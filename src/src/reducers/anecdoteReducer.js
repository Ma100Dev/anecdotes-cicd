/* eslint no-case-declarations: 0 */
import anecdoteService from '../services/anecdotes';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'NEW_ANECDOTE':
    return state.concat(action.data.data);
  case 'ADD_LIKE':
    const old1 = state.find(a => a.id === action.data.id);
    const modified1 = {
      ...old1,
      votes: old1.votes + 1
    };
    return state.map(obj => obj.id !== modified1.id ? obj : modified1);
  case 'SET_VOTES':
    const old2 = state.find(a => a.id === action.data.id);
    const modified2 = {
      ...old2,
      votes: action.data.votes
    };
    return state.map(obj => obj.id !== modified2.id ? obj : modified2);
  case 'INIT':
    return action.data;
  default:
    return state;
  }
};

export const like = (id) => {
  return async dispatch => {
    const data = await anecdoteService.setLikes(id);
    dispatch({
      type: 'SET_VOTES',
      data: {
        id,
        votes: data.votes
      }
    });
  };
};

export const createAnecdote = (content) => {
  return async dispatch => {
    const data = await anecdoteService.add(content);
    dispatch({
      type: 'NEW_ANECDOTE',
      data: { data }
    });
  };
};

export const initializeAnecdotes = () => {
  return async dispatch => {
    const data = await anecdoteService.getAll();
    dispatch({
      type: 'INIT',
      data: data
    });
  };
};

export default reducer;