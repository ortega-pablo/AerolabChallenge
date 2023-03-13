import { Categories, ProductApi, Sort } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';
import axios, { AxiosError } from 'axios';

interface ProductsState {
  allProducts: ProductApi[];
  orderedProducts: ProductApi[];
  productsQuantity: number;
  status: 'initial' | 'loading' | 'resolved' | 'rejected';
  pagination: {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    initIndex: number;
    finalIndex: number;
  };
  filters: {
    category?: Categories;
    sort?: Sort;
  };
}

const initialState: ProductsState = {
  allProducts: [],
  orderedProducts: [],
  productsQuantity: 0,
  status: 'initial',
  pagination: {
    currentPage: 1,
    totalPages: 1,
    pageSize: 16,
    initIndex: 0,
    finalIndex: 0
  },
  filters: {
    category: 'All Products',
    sort: ''
  }
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
          allProducts: [],
          orderedProducts: [],
          productsQuantity: 0,
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

      let orderedProducts: ProductApi[];

      if (filters.category === 'All Products') {
        orderedProducts = productsResponse;
      } else {
        console.log('Estoy en el else de categories');
        orderedProducts = productsResponse.filter((product: ProductApi) => {
          return product.category === filters.category;
        });
        console.log(orderedProducts);
      }

      switch (filters.sort) {
        case 'name':
          orderedProducts.sort((a, b) => {
            const A = a.name.toUpperCase();
            const B = b.name.toUpperCase();
            if (A < B) {
              return -1;
            }
            if (A > B) {
              return 1;
            }
            return 0;
          });
          break;
        case 'lowestPrice':
          orderedProducts.sort((a, b) => {
            return Number(a.cost) - Number(b.cost);
          });
          break;
        case 'highestPrice':
          orderedProducts.sort((a, b) => {
            return Number(b.cost) - Number(a.cost);
          });
          break;
        default:
          break;
      }

      const productsQuantity = orderedProducts.length;

      const totalPages = Math.ceil(
        orderedProducts.length / pagination.pageSize
      );
      const initIndex = (pagination.currentPage - 1) * pagination.pageSize;
      const finalIndex = initIndex + pagination.pageSize;

      const products = orderedProducts.slice(initIndex, finalIndex);

      dispatch(
        setProductsState({
          allProducts: productsResponse,
          orderedProducts: products,
          productsQuantity,
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
      dispatch(getProducts()); // actualizar la allProductsa de productos
    } catch (error) {
      if (error instanceof AxiosError) console.error(error.message);
      else console.error(error);
    }
  };
};

export const filterProducts = (filter: Categories) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { sort } = getState().products.filters;
    try {
      dispatch(
        setFilters({
          category: filter,
          sort
        })
      );
      dispatch(getProducts()); //
    } catch (error) {
      if (error instanceof AxiosError) console.error(error.message);
      else console.error(error);
    }
  };
};

export const sortProducts = (sortBy: Sort) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { category } = getState().products.filters;
    try {
      dispatch(
        setFilters({
          category,
          sort: sortBy
        })
      );
      dispatch(getProducts()); //
    } catch (error) {
      if (error instanceof AxiosError) console.error(error.message);
      else console.error(error);
    }
  };
};

export default productsSlice.reducer;
