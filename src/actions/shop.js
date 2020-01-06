import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../firebase/firebase.util";

import { ShopActionTypes } from "../types";

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START
});

export const fetchCollectionSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionFailure = errorMsg => ({
  type: ShopActionTypes.fetchCollectionFailure,
  payload: errorMsg
});

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    dispatch(fetchCollectionStart());
    const collectionRef = firestore.collection("collections");
    collectionRef
      .get()
      .then(async snapshot => {
        console.log("snapshot", snapshot);
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionFailure(error.message)));
  };
};
