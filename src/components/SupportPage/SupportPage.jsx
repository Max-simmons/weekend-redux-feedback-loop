import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SupportPage() {

    const history = useHistory();

    const dispatch = useDispatch();

    const [supportInput, setSupportInput] = useState('')

    const newSupport = () => {
        const currentSupport = supportInput

        dispatch({
            type: 'SET_NEW_SUPPORT',
            payload: currentSupport
        })
        // history.push('/commets')
    }

    const handleSupportInput = (event) => {
        setSupportInput(event.target.value)
    }

    return(
        <>
        <h2>How well are you being supported?</h2>
        <p>Support</p>
        <input
        placeholder='1-5'
        type='number'
        value={supportInput}
        onChange={handleSupportInput}
        />
        <footer>
            <button className='nextButton' onClick={newSupport}>Next</button>
        </footer>
        </>
    )

}

export default SupportPage;