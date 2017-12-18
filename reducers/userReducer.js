import { LIST_USERS } from '../constants/actionTypes';

// Private Methods starts here

const _generateUsers = () => {
    let usersList = [];
    _.range(1,50).map(val => {
        usersList.push(
            {
                username: `test_user${val}`,
                email: 'test_user${val}@reactapp.com',
                password: `test_user${val}`,
                age: (val + 10),
                gender: ((val % 2 == 0) ? 'M' : 'F')
            }
        )
    })
    return usersList;
}

// Private methods ends here

const initialState = {
    users: _generateUsers()
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LIST_USERS :
            return { ...state, users: action.users }
        default :
            return state
    }
}
