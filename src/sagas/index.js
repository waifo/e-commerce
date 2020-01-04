import { all, call } from "redux-saga/effects";

import { fetchCollectionStart } from "./shop";
import { userSagas } from "./user";

export default function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userSagas)]);
}
