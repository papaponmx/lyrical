import React, { Component } from 'react';
import gql from 'graphql-tag';

export default class SongsList extends Component {
  render() {
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
