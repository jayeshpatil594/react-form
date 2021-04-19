import { NEXT_STEP, RESET_STEP, SAVE_PLAN_FORM_DATA,  SAVE_PRICE_FORM_DATA } from '../actions/types';

const initialState = { step : 1};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch(action.type) {
        case SAVE_PRICE_FORM_DATA:
            return {
                ...state,
                price: action.price,
            }
        case SAVE_PLAN_FORM_DATA:
            return {
                ...state,
                plan: action.plan
            }
        case NEXT_STEP:
            return {
                ...state,
                step: state.step + 1
            }
        case RESET_STEP:
            return {
                ...state,
                step: 1
            }
        default:
            return state;
    }
}