import { useHistory } from 'react-router-dom';

function ThankYouPage() {

    const history = useHistory();

    const backToHome = () => {
        history.push('/');
    }

    
    return(
        <>
        <h2>Thank You!</h2>
        <button onClick={backToHome}>Leave New Feedback</button>
        </>
    )
}



export default ThankYouPage;