import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../routes/Home';
import Detail from '../routes/Detail';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;