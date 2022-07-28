import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
    const addAnecdote = (event) => {
        const content = event.target.content.value
        event.target.content.value = ''
        event.preventDefault()
        props.createAnecdote(content)
        props.setNotification(`you added '${content}'`, 5)
    }

    return (
        <>
            <h2 style={{ marginBottom: '0px' }}>create new</h2>
            <form id="createAnecdoteForm" onSubmit={addAnecdote}>
                <div style={{ display: 'inline' }}>
                    <input name="content" required="required" />
                    <button>create</button>
                </div>
            </form>
            <br />
        </>
    )
}

const Connected = connect(
    null,
    {
        createAnecdote,
        setNotification
    }
)(AnecdoteForm)
export default Connected