const initialState = {
    content: null,
    timerId: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case 'SET_NOTIFICATION':
        clearTimeout(state.timerId)
        return {
            content: action.text.toString(),
            timerId: action.id
        }
    case 'CLEAR':
        return {
            ...state,
            content: null
        }
    default:
        return state
    }
}

const setNotificationContent = (text, id) => {
    return {
        type: 'SET_NOTIFICATION',
        text: text,
        id: id
    }
}

const clearNotificationContent = () => {
    return {
        type: 'CLEAR'
    }
}

export const setNotification = (text, time) => {
    return dispatch => { //Ei tarvitse olla async
        const id = setTimeout(() => {
            dispatch(clearNotificationContent())
        },
        time * 1000)
        dispatch(setNotificationContent(text, id))
    }
}

export default reducer