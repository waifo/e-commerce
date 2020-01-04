import { all, call, put, takeLatest } from "redux-saga/effects";
import { UserActionTypes } from "../types";
import { clearCart } from "../actions/cart";

export function* onSignOutSuccess() {
  yield put(clearCart());
}

export function* onClearCart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, onSignOutSuccess);
}

export function* cartSagas() {
  yield all([call(onClearCart)]);
}
