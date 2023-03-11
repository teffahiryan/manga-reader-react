import { useParams } from 'react-router-dom'
import { mangaList } from '../datas/MangaList'
import Page from './Page';

import '../styles/Read.css';

function Read(){
    const { idvalue } = useParams()
    const { chapternumber } = useParams()

    const getManga = mangaList.find(manga => manga.id === idvalue)

    return(
        <div className="div-read">
            <h2 className='title1'> {getManga.name} </h2>
            <Page mangaChapter={chapternumber} manga={getManga} />
        </div>
    );
}

export default Read;