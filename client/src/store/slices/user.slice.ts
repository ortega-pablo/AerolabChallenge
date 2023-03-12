import { postAddPoints, postRedeem, responsePostAddPoints, responsePostRedeem, UserApi } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { AppDispatch, RootState } from '../store';

interface UserState {
  user: UserApi;
  status: 'initial' | 'loading' | 'resolved' | 'rejected';
}

const initialState: UserState = {
  user: {
    _id: '',
    name: '',
    points: 0,
    createDate: '',
    redeemHistory: [],
    __v: 0
  },
  status: 'initial'
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserState(state, action: PayloadAction<UserState>) {
      state.user = action.payload.user;
      state.status = action.payload.status;
    }
  }
});

export const { setUserState } = userSlice.actions;

export const getUser = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { user } = getState().user;
    try {
      dispatch(
        setUserState({
          user,
          status: 'loading'
        })
      );

      const res = await axios.get(
        'https://coding-challenge-api.aerolab.co/user/me',
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAzNWQyOTcxZDBhYjAwMjU2YWFjYTMiLCJpYXQiOjE2Nzc5NDIwNTd9.0Tk4FiYXguXtNxQpS7ecQ8q8IrEJ_DlvxKbbQnC-fbE',
            'Content-Type': 'application/json'
          }
        }
      );
      const userResponse = res.data;

      dispatch(
        setUserState({
          user: userResponse,
          status: 'resolved'
        })
      );
    } catch (error) {
      if (error instanceof AxiosError) console.error(error.message);
      else console.error(error);
    }
  };
};

export const userAddPoints = (data: postAddPoints) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { user } = getState().user;
    try {
      dispatch(
        setUserState({
          user,
          status: 'loading'
        })
      );
      await axios.post<responsePostAddPoints>(
        'https://coding-challenge-api.aerolab.co/user/points',
        data,
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAzNWQyOTcxZDBhYjAwMjU2YWFjYTMiLCJpYXQiOjE2Nzc5NDIwNTd9.0Tk4FiYXguXtNxQpS7ecQ8q8IrEJ_DlvxKbbQnC-fbE',
            'Content-Type': 'application/json'
          }
        }
      );
      dispatch(getUser());
    } catch (error) {
      if (error instanceof AxiosError) console.error(error.message);
      else console.error(error);
    }
  };
};

export const userAddProduct = (data: postRedeem) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
      const { user } = getState().user;
      try {
        dispatch(
          setUserState({
            user,
            status: 'loading'
          })
        );
        await axios.post<responsePostRedeem>(
          'https://coding-challenge-api.aerolab.co/redeem',
          data,
          {
            headers: {
              Authorization:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAzNWQyOTcxZDBhYjAwMjU2YWFjYTMiLCJpYXQiOjE2Nzc5NDIwNTd9.0Tk4FiYXguXtNxQpS7ecQ8q8IrEJ_DlvxKbbQnC-fbE',
              'Content-Type': 'application/json'
            }
          }
        );
        dispatch(getUser());
      } catch (error) {
        if (error instanceof AxiosError) console.error(error.message);
        else console.error(error);
      }
    };
  };

export default userSlice.reducer;
