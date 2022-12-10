import React, {useEffect} from 'react';
import './App.css';
import {FiSettings} from "react-icons/fi";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Sidebar01 from "./components/02.sidebar/Sidebar01";

const App = () => {
    const isMenuOpen = true;
    return (
        <div>
            <BrowserRouter>
                <div className="flex relative  dark:bg-main-dark-bg">
                    <div className="fixed  right-4 bottom-4" style={{zIndex: '1000'}}>
                        <TooltipComponent content="Settings" position="Top">
                            <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray
                            text-white" style={{background: 'blue', borderRadius: '50%'}}>
                                <FiSettings/>
                            </button>
                        </TooltipComponent>
                    </div>
                    {isMenuOpen ?
                        (<div className="w-72 sidebar  dark:bg-secondary-dark-bg bg-white"><Sidebar01/></div>)
                        :(<div className="w-0  dark:bg-secondary-dark-bg"><Sidebar01/></div>)
                    }
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App