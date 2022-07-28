import React from 'react';
import { like } from '../reducers/anecdoteReducer';
import { useSelector, useDispatch } from 'react-redux';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(setNotification(`you voted '${anecdotes.find(a => a.id === id).content}'`, 5));
    dispatch(like(id));
  };

  return (
    <div id='anecdoteList'>
      {
        anecdotes
          .filter(a => (a.content.toUpperCase().includes(filter.toUpperCase())))
          .sort((a, b) => {
            if (a.votes < b.votes) {
              return 1;
            } else if (a.votes > b.votes) {
              return -1;
            } else {
              return 0;
            }
          })
          .map(anecdote =>
            <div key={anecdote.id} id="anecdote">
              <div id="anecdoteContent">
                {anecdote.content}
              </div>
              <div id="votes">
                <b>has {anecdote.votes} votes</b>
                <button style={{ marginLeft: '5px', fontWeight: 'bold', backgroundColor: '#d4d4d4' }} onClick={() => vote(anecdote.id)}>vote</button>
              </div>
              <br />
            </div>
          )
      }
    </div>
  );
};
export default AnecdoteList;