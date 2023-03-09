import { ProductApi } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import axios, { AxiosError } from 'axios';

interface ProductsState {
  list: ProductApi[];
  status: 'initial' | 'loading' | 'resolved' | 'rejected';
}

const initialState: ProductsState = {
  list: [],
  status: 'initial'
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsState(state, action: PayloadAction<ProductsState>) {
      state.list = action.payload.list;
      state.status = action.payload.status;
    }
  }
});

export const { setProductsState } = productsSlice.actions;

export const getProducts = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(
        setProductsState({
          list: [],
          status: 'loading'
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

      dispatch(
        setProductsState({
          list: productsResponse,
          status: 'resolved'
        })
      );
    } catch (error) {
      if (error instanceof AxiosError) console.error(error.message);
      else console.error(error);
    }
  };
};

export default productsSlice.reducer;
