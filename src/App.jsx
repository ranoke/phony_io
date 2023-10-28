import Main from './pages/Main.jsx';

import React from "react";
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            {/* <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/calculator" element={<CalculatorPage />} />
                <Route path="/videos" element={<VideosPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/loan" element={<Loan />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/conditions" element={<Conditions />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/article" element={<Article />} />
                <Route path="/article2" element={<Article2 />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/car" element={<Car />} />
                <Route path="*" element={<Error />} />
            </Routes> */}
            <Main></Main>
        </>
    );
};

export default App;
