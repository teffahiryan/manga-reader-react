import { Routes } from 'react-router-dom/dist';
import { Route } from 'react-router-dom'

import Header from './Header';
import MangaList from './MangaList';
import Read from './Read';
import Contact from './Contact';
import MangaListByCat from './MangaListByCat';
import MangaDetails from './MangaDetails';

function App(){
    return(
        <div id="main">
            <Header />
            <Routes>
				<Route path="/" element={<MangaList />} />
				<Route path="/contact" element={<Contact />} />
				<Route name="read" path="/lecture/:idvalue/:chapternumber" element={<Read />} />
                <Route path="/categorie/:categoriename" element={<MangaListByCat />} />
                <Route path="/manga/:idvalue" element={<MangaDetails />} />
			</Routes>
        </div>
    );
}

export default App;