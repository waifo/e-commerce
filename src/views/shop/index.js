import React, { useEffect } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectIsFetchingCollection,
  selectIsCollectionsLoaded
} from "../../selectors/shop";
// import CollectionOverviewContainer from "../../components/collection-overview/collection-overview-container";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview-container";
import CategoryContainer from "../category";
import { fetchCollectionStart } from "../../actions/shop";

const ShopContainer = styled.div``;

const Shop = ({
  fetchCollectionStart,
  match,
  isFetchingCollection,
  isCollectionsLoaded
}) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <ShopContainer>
      <Route
        exact={true}
        path={`${match.path}`}
        render={CollectionOverviewContainer}
      />
      <Route path={`${match.path}/:categoryId`} render={CategoryContainer} />
    </ShopContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetchingCollection: selectIsFetchingCollection,
  isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
