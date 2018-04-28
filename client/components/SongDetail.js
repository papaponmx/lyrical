import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import { Link } from 'react-router';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;
    if (!song) {
      return <div></div>
    }

    return (
      <div>
        <h3>{song.title}</h3>
        <Link to="/">Back</Link>
      </div>
    )
  }
}

export default graphql(fetchSong, {
  options: (props) => ({ variables: { id: props.params.id } } )
})(SongDetail);
