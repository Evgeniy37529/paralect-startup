import { GET_USER, SHOW_LOADER, HIDE_LOADER, GET_REPOSITORIES } from './ActionTypes';
const handlers = {
  [SHOW_LOADER]: (state) => ({ ...state, loading: true }),
  [GET_USER]: (state, { payload }) => ({ ...state, user: payload }),
  [GET_REPOSITORIES]: (state, { payload }) => ({ ...state, repositories: payload }),

  DEFAULT: (state) => state,
};

export const GlobalReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
