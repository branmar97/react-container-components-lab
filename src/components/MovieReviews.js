import React from 'react';

const MovieReviews = ({ reviews }) => {
    return (
        <div className='review-list'>
            {reviews.map(review => (
                <div key={review.display_title} className='review'>
                    <h2>{review.display_title}</h2>
                    <p><i>by {review.byline}</i></p>
                    <h4>{review.headline}</h4>
                    <p>{review.summary_short}</p>
                </div>
            ))}
        </div>
    )
}
 
export default MovieReviews;