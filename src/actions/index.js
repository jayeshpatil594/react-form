import { NEXT_STEP, SAVE_PLAN_FORM_DATA, RESET_STEP, SAVE_PRICE_FORM_DATA } from './types';

export const savePriceFormData = (price) => (dispatch) => {
    dispatch({
        type: SAVE_PRICE_FORM_DATA,
        price: price
    })
}

export const nextStep = () => (dispatch) => {
    dispatch({
        type: NEXT_STEP
    })
}

export const resetStep = () => (dispatch) => {
    dispatch({
        type: RESET_STEP
    })
}

export const savePlanFormData = (plan) => (dispatch) => {
    dispatch({
        type: SAVE_PLAN_FORM_DATA,
        plan: plan
    })
}