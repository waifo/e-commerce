import { takeLatest, call, put } from "redux-saga/effects";

import {
  ShopActionTypes,
  fetchCollectionSuccess,
  fetchCollectionFailure
} from "../actions/shop";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../firebase/firebase.util";

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    fetchCollectionFailure(error.message);
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionAsync
  );
}
