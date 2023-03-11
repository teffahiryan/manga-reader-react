import { Link } from 'react-router-dom'

import SearchBar from './SearchBar';

import '../styles/Header.css';

function Header(){

    return(
        <nav className="nav-header">
            <div>
                <Link className='nav-a' to="/"> <h1> MangaDev </h1> </Link>
                <SearchBar />
                <Link className='nav-a' to="/Contact"> Contact </Link> 
            </div>
            <div className='category-list-header'>
                <Link to="/categorie/action"> ACTION </Link>
                <Link to="/categorie/aventure"> AVENTURE </Link>
                <Link to="/categorie/comedie"> COMEDIE </Link>
                <Link to="/categorie/fantasy"> FANTASY </Link>
                <Link to="/categorie/sport"> SPORT </Link>
                <Link to="/categorie/drama"> DRAMA </Link>
            </div>
        </nav>
    );
}

export default Header;