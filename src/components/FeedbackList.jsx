import FeedbackItem from "./FeedbackItem"
import Card from './shared/Card'
import PropTypes from 'prop-types'

function FeedbackList({feedback}){
    if (!feedback || feedback.length ===0){
        return <p>No Feedback Yet</p>
    }

    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item}/>
            ))}
        </div>
    )}

    FeedbackItem.propTypes = {
        feedback : PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                text:PropTypes.string.isRequired,
                rating:PropTypes.number.isRequired,
            })
        ),
    }

export default FeedbackList