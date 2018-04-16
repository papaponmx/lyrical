import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongsList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song =>(
      <li>
        {song.title}
      </li>
    )
  );
}


render() {
  return (
    <div>
      {/* {this.renderSongs()} */}
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
