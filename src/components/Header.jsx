import { Link } from 'react-router-dom'

import Contact from './Contact';

import '../styles/Header.css';

function Header({isOpen, setIsOpen}){

    return(
        <nav className="nav-header">
            <Link className='nav-a' onClick={() => setIsOpen(false)} to="/"> <h1> MangaDev </h1> </Link>
            {
                isOpen ? 
                    (<div> 
                        <div className='nav-a' onClick={() => setIsOpen(false)}> Contact </div> 
                        <div className='modal'> <Contact /> </div> 
                    </div>
                    )
                    :
                    (
                        <div className='nav-a' onClick={() => setIsOpen(true)}> Contact </div>
                    )
            }
        </nav>
    );
}

export default Header;