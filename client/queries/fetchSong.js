import gql from 'graphql-tag';

expot defaut gql`
query SongQuery($id: ID!) {
  song(id: $id) {
    id
    title
  }
}
`;
