
export const addSafe = (safe) => {
    return {
        type: 'ADD_SAFE',
        payload: safe
    }
}

export const editSafe = (safe) => {
    return {
        type: 'EDIT_SAFE',
        payload: safe
    }
}

export const deleteSafe = (id) => {
    return {
        type: 'DELETE_SAFE',
        payload: id
    }
}

export const selectSafe = (id) => {
    return {
        type: 'SELECT_SAFE',
        payload: id
    }
}

export const addsecrets = (secret) => {
    return {
        type: 'ADD_SECRETS',
        payload: secret
    }
}
