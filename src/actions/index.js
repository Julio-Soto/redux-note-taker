import * as actions from './actionTypes'

export const noteCreated = (noteBody) => ({
    type: actions.NOTE_CREATED,
    payload: {
        noteBody : noteBody
    }
})

export const noteErased = (id) => ({
    type: actions.NOTE_ERASED,
    payload: {
        id: id
    }
})