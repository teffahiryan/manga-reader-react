import { mangaList } from '../datas/MangaList'
import { Link } from 'react-router-dom'

import '../styles/MangaList.css';

function MangaList({setIsOpen}){
    return(
        <section className="section-manga-list">
            <ul>
                {mangaList.map((manga) => (
                    <li className="li-manga" key={manga.id}> 
                        <h3> {manga.name} </h3>
                        <div className="cadre"> <img src={manga.img} alt={"Page de couverture "+ manga.name } /> </div>
                        <Link onClick={() => setIsOpen(false)} to={"/lecture/"+manga.id+"/1"}> Lire </Link> 
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default MangaList;