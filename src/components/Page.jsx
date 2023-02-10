import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import '../styles/Page.css';

function Page(props){
    const navigate = useNavigate();

    const manga = props.manga;
    const chapter = props.mangaChapter;

    const [actualChapter, updateChapter] = useState(chapter - 1);
    const [actualPage, updatePage] = useState(0);

    var chapterLenght = manga.chapter.length - 1;
    var pageLenght = manga.chapter[actualChapter].pages.length - 1;

    function jumpto(){
        window.location.href = "#jump";
    }

    function nextPage(){
        jumpto()
        actualPage < pageLenght ? updatePage(actualPage + 1) : nextChapter() 
    }

    function previousPage(){
        jumpto()
        actualPage > 0 ? updatePage(actualPage - 1) : previousChapter()
    }

    function nextChapter(){
        if(actualChapter < chapterLenght){
            jumpto()
            updateChapter(actualChapter + 1) 
            updatePage(0)
            var newUrlChapter  = actualChapter + 2;
            navigate('/lecture/'+ manga.id +'/'+ newUrlChapter)
        }
    }

    function previousChapter(){
        if(actualChapter > 0){
            jumpto()
            updateChapter(actualChapter - 1) 
            updatePage(0)
            var newUrlChapter  = actualChapter;
            navigate('/lecture/'+ manga.id +'/'+ newUrlChapter)
        }
    }

    return(
        <section id="jump" className='section-page'>

            <div className='chapter-name'> {manga.chapter[actualChapter].title} </div>

            <img src={manga.chapter[actualChapter].pages[actualPage]} alt={"Page de manga de "+ manga.title}/>

            <div className='page-switch switch'>
                <button onClick={() => previousPage()}> <i className="fas fa-backward"></i> </button>
                <button onClick={() => nextPage()}> <i className="fas fa-forward"></i> </button>
            </div>

            <div className='chapter-switch switch'>
                <button onClick={() => previousChapter()}> Chapitre précédent </button>
                <button onClick={() => nextChapter()}> Chapitre suivant </button>
            </div>

        </section>
    );
}

export default Page;