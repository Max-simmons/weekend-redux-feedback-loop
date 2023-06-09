import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import './FeelingPage.css';

function FeelingPage() {

    const history = useHistory();

    const dispatch = useDispatch();

    const [feelingInput, setFeelingInput] = useState('');

    const newFeeling = () => {
        
        const currentFeeling = feelingInput

        if (currentFeeling >= 6 || currentFeeling == '' || currentFeeling <= -1) {
            alert('INVALID INPUT');
        }
        else {
            dispatch({
                type: 'SET_NEW_FEELING',
                payload: currentFeeling
            })
            history.push('/understanding')   
        }
    }


    const handleFeelingInput = (event) => {
        setFeelingInput(event.target.value)
    }
    
    return(
        <>
        <Header />
        <h2>How are you feeling today?</h2>
        <p>Feeling?</p>
        <input
        placeholder="1-5"
        type="number"
        value={feelingInput}
        onChange={handleFeelingInput}
        />
        <footer>
            <button className='nextButton' onClick={newFeeling}>Next</button>
        </footer>
        </>
    )
}





export default FeelingPage;