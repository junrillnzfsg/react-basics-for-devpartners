import React from "react";
import PropTypes from "prop-types";
import { Input, Segment } from "semantic-ui-react";

export default function SearchBar({ onEmailChange }) {
  return (
    <Segment>
      <p>Search by Email</p>
      <Input
        loading
        onChange={e => {
          console.log(e);
        }}
        fluid
        placeholder="Email to Search"
      />
    </Segment>
  );
}

// SearchBar.propTypes = {
//   onEmailChange: PropTypes.func.isRequired
// };
