import React, { useState } from "react";
import { compose } from "ramda";
import {
  Grid,
} from 'semantic-ui-react'
import SearchBar from "./components/SearchBar";
import FlagCard from "./components/FlagCard";
import UserDetail from "./components/UserDetail";
import search from "./lib/search";

import "./styles.css";

export default function App() {
  const [data, setData] = useState(null);

  const handleEmailSearch = email => {
    if(!email) setData(null);
    else compose(setData, search)(email);
  };

  return (
    <div className="App">
      <SearchBar onEmailSearch={handleEmailSearch} />
      {!data && <p>No Results!</p>}
      {
        data && (
          <Grid>
            <Grid.Row>
              {data.map(user => (
                <Grid.Column width={4}>
                  <FlagCard user={user}>
                    <UserDetail/>
                  </FlagCard>
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        )
      }
    </div>
  );
}
