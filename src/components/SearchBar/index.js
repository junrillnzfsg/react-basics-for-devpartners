import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input, Segment } from "semantic-ui-react";
export default function SearchBar({ onEmailSearch }) {
  const [timer, setTimer] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEmailChange = e => {
    timer && clearTimeout(timer);
    setLoading(true);
    onEmailSearch(e.target.value);
    const timeout = setTimeout(() => setLoading(false), 1000);
    setTimer(timeout);
  }

  return (
    <Segment>
      <p>Search by Email</p>
      <Input
        loading={loading}
        onChange={handleEmailChange}
        fluid
        placeholder="Email to Search"
      />
    </Segment>
  );
}

SearchBar.propTypes = {
  onEmailSearch: PropTypes.func.isRequired
};
