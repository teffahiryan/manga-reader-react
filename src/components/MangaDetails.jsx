import { useParams } from 'react-router-dom'

import { mangaList } from '../datas/MangaList'
import { Link } from 'react-router-dom'

import '../styles/MangaDetails.css';

function MangaDetails(){

    const { idvalue } = useParams()
    const getManga = mangaList.find(manga => manga.id === idvalue)

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <section className="section-manga-details">
            <h2 className='title1'> {getManga.name} </h2>
            <section className="section-manga-info">
                <div> 
                    <img src={getManga.img} alt={"Couverture du manga "+ getManga.title}/> 
                </div>
                <div>

                    <div className='informations-table'>
                        <div className='informations-tleft'>
                            <div>Type</div>
                            <div>Genre</div>
                            <div>Auteur</div>
                            <div>Début</div>
                        </div>
                        <div className='informations-tright'>
                            <div>{getManga.type}</div>
                            <div className="informations-cat">
                                {getManga.category.map((category) => (
                                    <div key={category}> {capitalizeFirstLetter(category)}  </div>
                                ))}
                            </div>
                            <div>{getManga.author}</div>
                            <div>{getManga.release}</div>
                        </div>
                    </div>

                    <div className="quick-read">
                        <Link className="read-button" to={"/lecture/"+getManga.id+"/" + getManga.chapter.at(0).id}> Premier chapitre </Link> 
                        <Link className="read-button" to={"/lecture/"+getManga.id+"/" + getManga.chapter.at(-1).id}> Dernier chapitre </Link> 
                    </div>
                    
                </div>
            </section> 

            <h2 className='title1'> Liste des chapitres </h2>

            <ul className='chapter-list'>
                {getManga.chapter.map((chapter) => (
                    <li key={getManga.id + chapter.id}> 
                        <div> Chapitre {chapter.id}  </div>
                        <Link className="read-button" to={"/lecture/"+getManga.id+"/"+chapter.id}> Lire </Link> 
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default MangaDetails; 