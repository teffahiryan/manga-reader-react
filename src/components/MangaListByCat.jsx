import { mangaList } from '../datas/MangaList'
import { Link } from 'react-router-dom'

import { useParams } from 'react-router-dom'

import '../styles/MangaList.css';

function MangaListByCat(){
    const { categoriename } = useParams()
    var mangaListCategorie = mangaList.filter(manga => manga.category.includes(categoriename))

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <section className="section-manga-list">
            <h2 className='title1'> {capitalizeFirstLetter(categoriename)} </h2>
            <ul>
                {mangaListCategorie.map((manga) => (
                    <li className="li-manga" key={manga.id + manga.category}> 
                        <h3> {manga.name} </h3>
                        <div className="cadre"> <img src={manga.img} alt={"Page de couverture "+ manga.name } /> </div>
                        <Link to={"/manga/"+manga.id}> Lire </Link> 
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default MangaListByCat; 