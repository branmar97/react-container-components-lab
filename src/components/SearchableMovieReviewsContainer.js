import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
    state = { 
        reviews: [],
        searchTerm: ''
    }

    handleChange = event => this.setState({ searchTerm: event.target.value })

    handleSubmit = event => {
        event.preventDefault()
        this.getSearchableReviews(this.state.searchTerm)
    }

    getSearchableReviews = query => {
        fetch(URL.concat(this.state.searchTerm))
            .then(res => res.json())
            .then(res => this.setState({ reviews: res.results}))
    }
 
    render() { 
        return ( 
            <div className='searchable-movie-reviews'>
                <form className='searchable-movie-reviews-form' onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type='text' value={this.state.searchTerm} />
                    <button type='submit'>Search</button>
                </form>

                <MovieReviews reviews={this.state.reviews} />
            </div>
         );
    }
}
 
export default SearchableMovieReviewsContainer;