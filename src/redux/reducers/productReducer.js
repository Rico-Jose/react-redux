import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [
        {
            id: 1,
            title: "Dipesh",
            category: "programmer",
        }
    ],
}

export const productReducer = (state, { type, payload }) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return state;

        default:
            break;
    }
}