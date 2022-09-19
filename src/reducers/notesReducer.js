import * as actions from '../actions/actionTypes'

let lastID = 0;

const notesReducer = (state = [],action) => {
    switch(action.type){
        case actions.NOTE_CREATED: {
            return [
                ...state,
                {
                    id: ++lastID,
                    textBody: action.payload.textBody
                }
            ]
        }
        case actions.NOTE_ERASED:
            return state.filter(note => note.id !== action.payload.id)
    default:
        return state
    }
}

export default notesReducer