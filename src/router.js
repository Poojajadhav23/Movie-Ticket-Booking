import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Search from "./components/search";

class Router extends React.Component{

    render(){
        return(
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" Component={Home}></Route>
                        <Route path="/search" Component={Search}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default Router;