import { createStore } from "redux";

const storeReducer = (state = { auth: { userLoggedIn: false, userData: null } }, action) => {
    if(action.type === 'login') {
        return {
            auth: {
                userLoggedIn: true,
                userData: action.body
            }
        }
    }

    return state;
};

// TODO: replace legacy createStore with Redux Toolkit (below function deprecated)
export const store = createStore(storeReducer);
