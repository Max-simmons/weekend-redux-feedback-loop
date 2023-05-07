import './Header.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function Header() {

  return(
    <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      
      <p><Link to='/admin'>Admin</Link></p>
      
      </header> 
  )
}

export default Header;