import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function UnderstandingPage() {

    // const history = useHistory();

    // const dispatch = useDispatch();

    const [understandingInput, setUnderstandingInput] = useState('')



    return(
        <>
        <h2>How well are you understanding the content?</h2>
        <p>Understanding?</p>
        <input
        placeholder='1-5'
        type='number'
        value={understandingInput}
        />

        </>
    )

}



export default UnderstandingPage