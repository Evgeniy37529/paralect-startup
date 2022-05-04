import React, { useReducer } from 'react';
import axios from 'axios';
import { GlobalContext } from './GlobalContext';
import { GlobalReducer } from './Reducers';
import axiosInstance from '../servises/api';
import { GET_USER, SHOW_LOADER, HIDE_LOADER, GET_REPOSITORIES } from './ActionTypes';

export const GlobalState = ({ children }) => {
  const initialState = {
    searchUser: '',
    repositories: [],
    // user: {
    //   name: '',
    //   followers: 0,
    //   following: 0,
    // },
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const hideLoader = () => dispatch({ type: HIDE_LOADER });
  const getUser = async (searchValue) => {
    showLoader();
    // const resp = await axiosInstance.get(`${searchValue}`);
    // const { followers, following, name } = resp.data;
    // const payload = { followers, following, name };
    // dispatch({ type: GET_USER, payload });
    try {
      const resp = await axiosInstance.get(`${searchValue}`);
      //   const { followers, following, name } = resp.data;
      //   const payload = { followers, following, name };
      const payload = resp.data;
      dispatch({ type: GET_USER, payload });
    } catch (error) {
      console.error(error);
    } finally {
      hideLoader();
    }
  };

  const getRepositories = async (searchValue) => {
    showLoader();
    try {
      const resp = await axiosInstance.get(`${searchValue}/repos`);
      const payload = resp.data;
      dispatch({ type: GET_REPOSITORIES, payload });
    } catch (error) {
      console.error(error);
    } finally {
      hideLoader();
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        repositories: state.repositories,
        showLoader,
        hideLoader,
        getUser,
        getRepositories,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
