import { useHistory } from 'react-router-dom';
import './ThankYouPage.css';

function ThankYouPage() {

    const history = useHistory();

    const backToHome = () => {
        history.push('/');
    }

    
    return(
        <>
        <header>
            <p>Feedback!</p>
        </header>
        <h2>Thank You!</h2>
        <button className='thankYouButton' onClick={backToHome}>Leave New Feedback</button>
        </>
    )
}



export default ThankYouPage;