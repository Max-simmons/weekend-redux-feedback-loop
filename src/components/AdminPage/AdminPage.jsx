import axios from "axios";
import { useState, useEffect } from 'react';
import './AdminPage.css';


function AdminPage() {

    useEffect(() => {
        getFeedback();
    }, [])

    const [arrayFeedback, setArrayFeedback] = useState([])

const getFeedback = () => {

    axios({
        method: 'GET',
        url: '/api/feedback'
    }).then((response) => {
        
        const arrayFeedback = response.data;
        console.log('theFeedback', arrayFeedback);
        setArrayFeedback(arrayFeedback)
    }).catch((error) => {
        console.log('GET ERROR:', error);
    })
}

// const deleteFeedback = () => {

//     axios({
//         method: 'DELETE',
//         url: `/api/feedback/delete/${feedback.id}`,
//     }).then((res) => {
//         console.log('SUCCESSFUL DELETE FEEDBACK');

//     }).catch((err) => {
//         console.log('ERROR IN DELETE FEEDBACK', err);
//     })
// }
   
    return(
        <>
        <header>
            <h2>Feedback Results</h2>
        </header>
        <table>
            <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Delete</th>
                </tr>
            </thead>
                <tbody>
                    {
                        arrayFeedback.map((feedback) => {
                            return (
                                <tr key={feedback.id}>
                                    <td>{feedback.feeling}</td>
                                    <td>{feedback.understanding}</td>
                                    <td>{feedback.support}</td>
                                    <td>{feedback.comment}</td>
                                    {/* <td><button onClick={deleteFeedback}>Delete</button></td> */}
                                </tr>
                                
                            )
                        })
                    }
                </tbody>
        </table>
        
        </>
    )
}






export default AdminPage;