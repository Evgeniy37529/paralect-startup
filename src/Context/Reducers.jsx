import {
  GET_USER,
  SHOW_LOADER,
  HIDE_LOADER,
  GET_REPOSITORIES,
  USER_VALUE,
  SET_CURRENT_PAGE,
} from './ActionTypes';

const handlers = {
  [SHOW_LOADER]: (state) => ({ ...state, loading: true }),
  [HIDE_LOADER]: (state) => ({ ...state, loading: false }),
  [GET_USER]: (state, { payload }) => ({ ...state, user: payload }),
  [GET_REPOSITORIES]: (state, { payload }) => ({ ...state, repositories: payload }),
  [USER_VALUE]: (state, { payload }) => ({ ...state, searchUser: payload }),
  [SET_CURRENT_PAGE]: (state, { payload }) => ({ ...state, currentPage: payload }),
  DEFAULT: (state) => state,
};

export const GlobalReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
