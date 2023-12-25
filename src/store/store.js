import { createStore } from "redux";

const storeReducer = (state = { auth: { userLoggedIn: false, userData: null }, view: 'Day' }, action) => {
    if(action.type === 'login') {
        return {
            ...state,
            auth: {
                userLoggedIn: true,
                userData: action.body
            }
        }
    }
    else if(action.type === 'updateHomeView') {
        return {
            ...state,
            view: action.body
        }
    }

    return state;
};

// TODO: replace legacy createStore with Redux Toolkit (below function deprecated)
export const store = createStore(storeReducer);
