import { useState } from 'react'
import { Routes } from 'react-router-dom/dist';
import { Route } from 'react-router-dom'

import Header from './Header';
import MangaList from './MangaList';
import Read from './Read';
import Contact from './Contact';

function App(){
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <Routes>
				<Route path="/" element={<MangaList isOpen={isOpen} setIsOpen={setIsOpen}/>} />
				<Route path="/contact" element={<Contact />} />
				<Route name="read" path="/lecture/:idvalue/:chapternumber" element={<Read isOpen={isOpen} setIsOpen={setIsOpen}/>} />
			</Routes>
        </div>
    );
}

export default App;