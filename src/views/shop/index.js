import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectIsFetchingCollection,
  selectIsCollectionsLoaded
} from "../../selectors/shop";
// import CollectionOverviewContainer from "../../components/collection-overview/collection-overview-container";
import CollectionOverview from "../../components/collection-overview";
import Category from "../category";
import {
  fetchCollectionStartAsync,
  fetchCollectionStart
} from "../../actions/shop";

import WithSpinner from "../../components/with-spinner";

const ShopContainer = styled.div``;

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
  }
  render() {
    const { match, isFetchingCollection, isCollectionsLoaded } = this.props;

    return (
      <ShopContainer>
        <Route
          exact={true}
          path={`${match.path}`}
          render={props =>
            WithSpinner({ ...props, isLoading: isFetchingCollection })(
              CollectionOverview
            )
          }
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={props =>
            WithSpinner({ ...props, isLoading: !isCollectionsLoaded })(Category)
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
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
