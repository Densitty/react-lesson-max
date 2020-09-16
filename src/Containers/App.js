import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieslist, directorslist } from '../Actions'
import { bindActionCreators } from 'redux'
import MoviesList from './../Components/moviesList'

// COMPONENTS

class App extends Component {
  componentDidMount() {
    console.log(this.props.directorslist())
    /* this.props.getMovies()
    // this.props.getDirectors()*/
    this.props.movieslist();
    this.props.directorslist();
  }



  render() {
    console.log(this.props)
    console.log(this.props.data.movies)
    return (
      <div>
        <MoviesList {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = state => {

  return {
    data: state.movies
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getMovies: () => {
//       dispatch(movieslist())
//     },
//     getDirectors: () => {
//       dispatch(directorslist())
//     }
//   }
// }

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    movieslist,
    directorslist
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
