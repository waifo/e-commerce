import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectIsFetchingCollection,
  selectIsCollectionsLoaded
} from "../../selectors/shop";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview-container";
import Category from "../category";
import { fetchCollectionStartAsync } from "../../actions/shop";

import WithSpinner from "../../components/with-spinner";

const ShopContainer = styled.div``;

class Shop extends React.Component {
  // unsubscribeFromSnapshot = null;
  // state = {
  //   isLoading: true
  // };

  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
    // const collectionRef = firestore.collection("collections");
    // collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollection(collectionsMap);
    //   this.setState({ isLoading: false });
    // });
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crown-db-8a5d1/databases/(default)/documents/collections"
    // ).then(async snapshot => {
    //   console.log("snapshot", snapshot);
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollection(collectionsMap);
    //   this.setState({ isLoading: false });
    // });
    // collectionRef.get().then(async snapshot => {
    //   console.log("snapshot", snapshot);
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollection(collectionsMap);
    //   this.setState({ isLoading: false });
    // });
  }
  render() {
    const { match, isFetchingCollection, isCollectionsLoaded } = this.props;
    // const { isLoading } = this.state;
    return (
      <ShopContainer>
        <Route
          exact
          path={`${match.path}`}
          Component={<CollectionOverviewContainer />}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={props =>
            WithSpinner({ ...props, isFetchingCollection })(Category)
          }
        />
      </ShopContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetchingCollection: selectIsFetchingCollection,
  isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
