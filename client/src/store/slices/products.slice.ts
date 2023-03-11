import { ProductApi } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';
import axios, { AxiosError } from 'axios';

interface ProductsState {
  list: ProductApi[];
  status: 'initial' | 'loading' | 'resolved' | 'rejected';
  pagination: {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    initIndex: number;
    finalIndex: number;
  };
  filters: {
    category?: string;
    sort?: '' | 'mostRecent' | 'lowestPrice' | 'highestPrice';
  };
}

const initialState: ProductsState = {
  list: [],
  status: 'initial',
  pagination: {
    currentPage: 1,
    totalPages: 1,
    pageSize: 16,
    initIndex: 0,
    finalIndex: 0
  },
  filters: {}
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsState(state, action: PayloadAction<ProductsState>) {
      return action.payload;
    },
    setPagination(state, action: PayloadAction<ProductsState['pagination']>) {
      state.pagination = action.payload;
    },
    setFilters(state, action: PayloadAction<ProductsState['filters']>) {
      state.filters = action.payload;
      state.pagination.currentPage = 1; // resetear la página a la primera cuando se cambian los filtros
    }
  }
});

export const { setProductsState, setPagination, setFilters } =
  productsSlice.actions;

export const getProducts = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { filters, pagination } = getState().products;
    try {
      dispatch(
        setProductsState({
          list: [],
          status: 'loading',
          pagination,
          filters
        })
      );

      const res = await axios.get(
        'https://coding-challenge-api.aerolab.co/products',
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAzNWQyOTcxZDBhYjAwMjU2YWFjYTMiLCJpYXQiOjE2Nzc5NDIwNTd9.0Tk4FiYXguXtNxQpS7ecQ8q8IrEJ_DlvxKbbQnC-fbE',
            'Content-Type': 'application/json'
          }
        }
      );
      const productsResponse = res.data;

      const totalPages = Math.ceil(
        productsResponse.length / pagination.pageSize
      );
      const initIndex = (pagination.currentPage - 1) * pagination.pageSize;
      const finalIndex = initIndex + pagination.pageSize;
      const products = productsResponse.slice(initIndex, finalIndex);

      console.log('productsResponse',productsResponse)
      console.log('totalPages',totalPages)
      console.log('initIndex',initIndex)
      console.log('finalIndex',finalIndex)
      console.log('products',products)
      dispatch(
        setProductsState({
          list: products,
          status: 'resolved',
          pagination: {
            currentPage: pagination.currentPage,
            totalPages,
            pageSize: pagination.pageSize,
            initIndex,
            finalIndex
          },
          filters
        })
      );
    } catch (error) {
      if (error instanceof AxiosError) console.error(error.message);
      else console.error(error);
    }
  };
};

export const setCurrentPage = (newPage: number) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
      const { totalPages, pageSize } = getState().products.pagination;
      const initIndex = (newPage - 1) * pageSize;
      const finalIndex = initIndex + pageSize;
      console.log('total pages: ', totalPages);
      try {
        dispatch(
          setPagination({
            currentPage: newPage,
            totalPages,
            pageSize,
            initIndex,
            finalIndex
          })
        );
        dispatch(getProducts()); // actualizar la lista de productos
      } catch (error) {
        if (error instanceof AxiosError) console.error(error.message);
        else console.error(error);
      }
    };
  };

export default productsSlice.reducer;
