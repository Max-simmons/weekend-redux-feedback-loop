import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function UnderstandingPage() {

    const history = useHistory();

    const dispatch = useDispatch();

    const [understandingInput, setUnderstandingInput] = useState('')

    const newUnderstanding = () => {
        const currentUnderstanding = understandingInput

        if (currentUnderstanding >= 6 || currentUnderstanding == '' || currentUnderstanding <= -1) {
            alert('INVALID INPUT');
        }
        else {
            dispatch({
                type: 'SET_NEW_UNDERSTANDING',
                payload: currentUnderstanding
            })
            history.push('/support') 
        }
    }

    const handleUnderstandingInput = (event) => {
        setUnderstandingInput(event.target.value)
    }

    return(
        <>
        <h2>How well are you understanding the content?</h2>
        <p>Understanding?</p>
        <input
        placeholder='1-5'
        type='number'
        value={understandingInput}
        onChange={handleUnderstandingInput}
        />
        <footer>
            <button className='nextButton' onClick={newUnderstanding}>Next</button>
        </footer>
        </>
    )

}



export default UnderstandingPage;