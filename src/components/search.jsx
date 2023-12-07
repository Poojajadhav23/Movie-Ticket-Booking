import React from "react";
import "./styles/search.css";

class Search extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className="header2"></div>
                <div className="content">
                    <div className="leftpanel"></div>
                    <div className="rightpanel">
                        <h2>New Releases</h2>
                        <div className="galary2 row">
                            <div className="box col-lg-4 col-md-6 col-sm-12 col-xs-12 col-4">
                                <img src="./assets/img 1.jpg" alt="" />Hindi
                            </div>
                            <div className="box col-lg-4 col-md-6 col-sm-12 col-xs-12 col-4">
                                <img src="./assets/img 2.jpg" alt="" />Raazi
                            </div>
                            <div className="box col-lg-4 col-md-6 col-sm-12 col-xs-12 col-4">
                                <img src="./assets/img 3.jpeg" alt="" />Brothers
                            </div>
                            <div className="box col-lg-4 col-md-6 col-sm-12 col-xs-12 col-4">
                                <img src="./assets/img 4.jpeg" alt="" />Raees
                            </div>
                            <div className="box col-lg-4 col-md-6 col-sm-12 col-xs-12 col-4">
                                <img src="./assets/img 5.jpeg" alt="" />Mauli
                            </div>
                            <div className="box col-lg-4 col-md-6 col-sm-12 col-xs-12 col-4">
                                <img src="./assets/img 6.jpeg" alt="" />2 states
                            </div>
                            <div className="box col-lg-4 col-md-6 col-sm-12 col-xs-12 col-4 ">
                                <img src="./assets/img 7.jpeg" alt="" />Mimi
                            </div>
                            <div className="box col-lg-4 col-md-6 col-sm-12 col-xs-12 col-4">
                                <img src="./assets/img 8.jpeg" alt="" />Maidan
                            </div>
                            <div className="box col-lg-4 col-md-6 col-sm-12 col-xs-12 col-4">
                                <img src="./assets/img 9.jpeg" alt="" />Mili
                            </div>
                            <div className="box col-lg-4 col-md-6 col-sm-12 col-xs-12 col-4">
                                <img src="./assets/img 10.jpeg" alt="" />Drishyam
                            </div>
                            <div className="box col-lg-4 col-md-6 col-sm-12 col-xs-12 col-4">
                                <img src="./assets/img 11.jpeg" alt="" />Dabang 3
                            </div>
                            <div className="box col-lg-4 col-md-6 col-sm-12 col-xs-12 col-4">
                                <img src="./assets/img 12.jpeg" alt="" />Ram lila
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Search;