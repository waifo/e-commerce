import React from "react";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import Card from "../card";
import { selectDirectorySections } from "../../selectors/directory";

const DirectoryContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 80px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Directory = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...otherProps }) => (
      <Card key={id} {...otherProps} />
    ))}
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
