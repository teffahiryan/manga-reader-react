import { useState } from 'react'
import { Link } from 'react-router-dom'

import { mangaList } from '../datas/MangaList'

import '../styles/SearchBar.css';

function SearchBar(){

    const [searchWord, updateSw] = useState(['']);
    var result
    var searchList = document.getElementById("search-list")
    var searchBar = document.getElementById("search-bar")

    function checkValue(value) {
        // Si la valeur entrée dans le formulaire n'est pas vide alors je continue, sinon je ne diffuse pas la liste
        if(value !== ''){
            
            // Filtre la liste de manga selon la valeur du formulaire, en transformant la valeur du formulaire ainsi que le nom du manga en minuscule
            result = mangaList.filter(manga => manga.name.toLowerCase().includes(value.toLowerCase()))

            // Si le filtre retourne au moins un manga alors j'affiche le menu et j'enregistre le ou les mangas en local
            if( result.length !== 0 ){
                // Je met à jour le state avec les nouvelles informations
                updateSw(result)
                // j'affiche la liste des mangas
                searchList.style.display = "flex";
            }
        }else{
            searchList.style.display = "none";
        }
    }

    function clear(){
        searchBar.value = ""
        searchList.style.display = "none"
    }

    return(
        <section className="section-search-bar">
            <input id="search-bar" type="text" placeholder="Rechercher..." onChange={(e) => checkValue(e.target.value)} />
            <div id="search-list">
                {searchWord.map((manga) =>
                    <div key={manga.id + manga.name}>
                        <img src={manga.img} alt={"Page de couverture du manga "+ manga.name} />
                        <Link onClick={(e) => clear()} to={"/manga/"+manga.id} > {manga.name} </Link>
                    </div>
                )}
            </div>
        </section>
    );

}

export default SearchBar;