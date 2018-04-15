import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongsList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        SongsList
      </div>
    )
  }
}

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongsList);
