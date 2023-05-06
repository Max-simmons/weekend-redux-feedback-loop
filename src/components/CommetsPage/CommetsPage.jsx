import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CommentsPage() {



    return(
        <>
        <h2>Any comments you want to leave?</h2>
        <p>Comments</p>
        <textarea rows='10' cols='50'></textarea>
        <footer>
        {/* <button className='nextButton' onClick={newComment}>Next</button> */}
        </footer>
        </>
    )
}

export default CommentsPage;