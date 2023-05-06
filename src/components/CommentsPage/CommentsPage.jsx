import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CommentsPage() {

    const history = useHistory();

    const dispatch = useDispatch();

    const [commentInput, setCommentInput] = useState('');

    const newComment = () => {
        const currentComment = commentInput

        dispatch({
            type: 'SET_NEW_COMMENT',
            payload: currentComment
        })
        history.push('/review')
    }

    const handleCommentInput = (event) => {
        setCommentInput(event.target.value)
    }

    return(
        <>
        <h2>Any comments you want to leave?</h2>
        <p>Comments</p>
        <textarea
         value={commentInput} 
         rows='10' 
         cols='50'
         onChange={handleCommentInput}
        >      
         </textarea>
        <footer>
        <button className='nextButton' onClick={newComment}>Next</button>
        </footer>
        </>
    )
}

export default CommentsPage;