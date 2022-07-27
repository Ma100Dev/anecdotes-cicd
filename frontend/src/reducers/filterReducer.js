const initialState = ''

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case 'SET_FILTER':
        return action.text.toString()
    default:
        return state
    }
}

export const setFilter = (text) => {
    return {
        type: 'SET_FILTER',
        text: text
    }
}

export default reducer