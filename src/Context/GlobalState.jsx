import { useReducer } from 'react';
import { GlobalContext } from './GlobalContext';
import { GlobalReducer } from './Reducers';
import axiosInstance from '../servises/api';
import {
  GET_USER,
  SHOW_LOADER,
  HIDE_LOADER,
  GET_REPOSITORIES,
  USER_VALUE,
  SET_CURRENT_PAGE,
} from './ActionTypes';
import { useNavigate } from 'react-router-dom';

export const GlobalState = ({ children }) => {
  const navigate = useNavigate();

  const initialState = {
    searchUser: '',
    repositories: [],
    user: {},
    loading: false,
    perPage: 4,
    currentPage: 0,
  };

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const hideLoader = () => dispatch({ type: HIDE_LOADER });
  const setUserValue = (payload) => dispatch({ type: USER_VALUE, payload });
  const setCurrentPage = (payload) => dispatch({ type: SET_CURRENT_PAGE, payload });
  const getUser = async (searchValue) => {
    showLoader();
    setCurrentPage(0);
    try {
      const resp = await axiosInstance.get(`${searchValue}`);
      const payload = resp.data;
      dispatch({ type: GET_USER, payload });
      navigate('/results');
    } catch (error) {
      navigate('/notFoundResults');
    } finally {
      hideLoader();
    }
  };

  const getRepositories = async (searchValue, currentPage = 0) => {
    showLoader();
    try {
      const resp = await axiosInstance.get(
        `${searchValue}/repos?per_page=${state.perPage}&page=${currentPage}`
      );
      const payload = resp.data;
      console.log(payload);
      dispatch({ type: GET_REPOSITORIES, payload });
    } catch (error) {
    } finally {
      hideLoader();
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        loading: state.loading,
        searchUser: state.searchUser,
        user: state.user,
        repositories: state.repositories,
        perPage: state.perPage,
        currentPage: state.currentPage,
        setCurrentPage,
        showLoader,
        hideLoader,
        getUser,
        getRepositories,
        setUserValue,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
