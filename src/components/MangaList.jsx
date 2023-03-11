import { mangaList } from '../datas/MangaList'
import { Link } from 'react-router-dom'

import '../styles/MangaList.css';

function MangaList(){
    return(
        <section className="section-manga-list">
            <h2 className='title1'> Liste des mangas</h2>
            <ul>
                {mangaList.map((manga) => (
                    <li className="li-manga" key={manga.id}> 
                        <h3> {manga.name} </h3>
                        <div className="cadre"> <img src={manga.img} alt={"Page de couverture "+ manga.name } /> </div>
                        <Link to={"/manga/"+manga.id}> Lire </Link> 
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default MangaList; 