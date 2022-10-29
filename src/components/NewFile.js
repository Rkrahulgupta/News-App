import React from 'react'
import Card from './Card';
import { Routes, Route } from "react-router-dom";
import Login from './Login';

function NewFile() {
    return (
        <div>
            {/* <BrowserRouter> */}
            <Routes>
                <Route path="/general" element={<Card key="general" country="in" category="general" />} />
                <Route path="/technology" element={<Card key="technology" country="in" category="technology" />} />
                <Route path="/science" element={<Card key="science" country="in" category="science" />} />
                <Route path="/business" element={<Card key="business" country="in" category="business" />} />
                <Route path="/entertainment" element={<Card key="entertainment" country="in" category="entertainment" />} />
                <Route path="/health" element={<Card key="health" country="in" category="health" />} />
                <Route path="/sports" element={<Card key="sports" country="in" category="sports" />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            {/* </BrowserRouter> */}
        </div>
    )
}
export default NewFile; 