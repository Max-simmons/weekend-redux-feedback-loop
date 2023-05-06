import { useSelector } from "react-redux";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function ReviewPage() {

    const history = useHistory();

    const feelingScore = useSelector(state => state.feelingReducer);
    const understandingScore = useSelector(state => state.understandingReducer);
    const supportScore = useSelector(state => state.supportReducer);
    const commentLeft = useSelector(state => state.commentReducer);

    const submitFeedback = () => {
        
        axios({
            method: 'POST',
            url: '/api/feedback',
            data: {
                feeling: feelingScore,
                understanding: understandingScore,
                support: supportScore,
                comment: commentLeft
            }
        }).then((response) => {
            console.log('POSTED');
        }).catch((error) =>{
            console.log('POST ERROR', error);
        })

        history.push('/thankyou');
    }

    return(
        <>
        <h2>Review Your Feedback</h2>
        <p>Feelings: {feelingScore}</p>
        <p>Understanding: {understandingScore}</p>
        <p>Support: {supportScore}</p>
        <p>Comments: {commentLeft}</p>
        <button onClick={submitFeedback}>Submit</button>
        </>
    )
}

export default ReviewPage