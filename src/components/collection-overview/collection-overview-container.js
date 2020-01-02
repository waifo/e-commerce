import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsFetchingCollection } from "../../selectors/";
import WithSpinner from "../with-spinner";
import CollectionOverview from "./index";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetchingCollection
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
