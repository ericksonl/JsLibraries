import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import MarkdownPreviewer from '../pages/MarkdownPreviewer';
import NotFound from '../pages/NotFound';
import DrumMachine from '../pages/DrumMachine';
import Calculator from '../pages/Calculator';
import TwentyFiveFiveClock from '../pages/TwentyFiveFiveClock';

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/markdown-previewer" element={<MarkdownPreviewer />} />
                    <Route path="/drum-machine" element={<DrumMachine />} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/25-5-clock" element={<TwentyFiveFiveClock />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default AppRouter;