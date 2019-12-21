import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.util";
import CollectionOverview from "../../components/collection-overview";
import Category from "../category";
import { updateCollection } from "../../actions/shop";

import WithSpinner from "../../components/with-spinner";

const ShopContainer = styled.div``;

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;
  state = {
    isLoading: true
  };

  componentDidMount() {
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollection(collectionsMap);
      this.setState({ isLoading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <ShopContainer>
        <Route
          exact
          path={`${match.path}`}
          render={props =>
            WithSpinner({ ...props, isLoading })(CollectionOverview)
          }
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={props => WithSpinner({ ...props, isLoading })(Category)}
        />
      </ShopContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollection: collectionsMap => dispatch(updateCollection(collectionsMap))
});

export default connect(null, mapDispatchToProps)(Shop);
