export function addContact(newContact){
    return{
        type: 'SET_ADD_CONTACT',
        payload: newContact
    }
}

export function editContactAction (id, updatedContact){
    return{
    type: 'SET_EDIT_CONTACT',
    payload: {
        id: id,
        updatedContactInfo : updatedContact
    }
    }
}

export function deleteContactAction(id){
    return{
        type: 'SET_DELETE_CONTACT',
        payload: id
    }
}