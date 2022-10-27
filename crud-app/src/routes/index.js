import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ViewBooks from '../features/books/ViewBooks';
import AddBooks from '../features/books/AddBooks.jsx';
import EditBooks from '../features/books/EditBooks.jsx';
import NAvbar from '../layouts/NAvbar';

import Error from '../pages/Error';
import Home from '../pages/Home';
import Footer from '../layouts/Footer';

const Index = () => {
    return (
        <BrowserRouter>
            <NAvbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/show-books" element={<ViewBooks />} />
                    <Route path="/add-book" element={<AddBooks />} />
                    <Route path="/edit-book" element={<EditBooks />} />
                    <Route path="*" element={<Error />} />

                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>

    )
}

export default Index