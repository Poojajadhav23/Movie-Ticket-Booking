import React from "react";
import "./styles/home.css";

class Home extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div className="container1">
                <div className="panel">
                    <div className="id">
                        <div className="logo1">
                            <h3>N</h3>
                        </div>
                        <div className="name">Adze.<span>DESIGN</span></div>
                    </div>
                    <div className="const">
                        <h4>News Feed</h4>
                    </div>
                    <div className="list">
                    <img src="./assets/compass-regular.svg" alt="" />Browser</div>

                    <div className="list">
                    <span><img src="./assets/chart-line-solid.svg" alt="" /></span>Trending</div>
                    
                    <div className="list">
                    <span><img src="./assets/user-regular.svg" alt="" /></span>Following</div>

                    <div className="list">
                    <span><img src="./assets/video-solid.svg" alt="" /></span>Your Videos</div>

                    <div className="list">
                    <span><img src="./assets/list-solid.svg" alt="" /></span>Playlist</div>

                    <hr />

                    <div className="user">
                        <h4>Follwing</h4>
                    </div>
                    <div className="online">
                        <span className="photo"><h3>N</h3></span>
                        <span className="username">Nikita</span>
                        <span className="Greenlight"></span>

                    </div>

                    <div className="online">
                        <span className="photo"><h3>P</h3></span>
                        <span className="username">Pranay</span>
                        <img src="./assets/wifi-solid.svg" alt="" />

                    </div>

                    <div className="online">
                        <span className="photo"><h3>A</h3></span>
                        <span className="username">Abhay</span>
                        <span className="Greenlight"></span>
                        

                    </div>

                    <div className="online">
                        <span className="photo"><h3>P</h3></span>
                        <span className="username">Pratha</span>
                        <img src="./assets/wifi-solid.svg" alt="" />

                    </div>

                    <div className="online">
                        <span className="photo"><h3>F</h3></span>
                        <span className="username">Fatima</span>
                        <span className="Greenlight"></span>
                        

                    </div>

                    <div className="online">
                        <span className="photo"><h3>R</h3></span>
                        <span className="username">Ronita</span>
                        <img src="./assets/wifi-solid.svg" alt="" />

                    </div>

                    <div className="online">
                        <span className="photo"><h3>H</h3></span>
                        <span className="username">Himani</span>
                        <img src="./assets/wifi-solid.svg" alt="" />

                    </div>

                    <div className="online">
                        <span className="photo"><h3>I</h3></span>
                        <span className="username">Ichaa</span>
                        <span className="Greenlight"></span>

                    </div>
                    <div className="load">
                        <img className="more"src="./assets/chevron-down-solid.svg" alt="" />    
                        <h4>Load More</h4>
                    </div>

                    


                </div>
                <div className="screen">
                    <div className="header1">
                        <div className="back">
                            <img src="./assets/chevron-left-solid.svg" alt="" />
                        </div>
                        <div className="navbar1">
                            <div className="searching">
                                <img src="./assets/magnifying-glass-solid.svg" alt="" />
                                <input type="text"placeholder="Search everything" />
                            </div>
                            <img src="./assets/bell-regular.svg" alt="" />
                            <span className="photo"><h3>H</h3></span>
                        </div>
                    </div>
                    <div className="picture">
                        <div className="liv">
                            <img src="./assets/wifi-solid.svg" alt="" />Live
                        </div>
                        <div className="watch">Watch</div>
                    </div>

                    <div className="movie">
                        <h2>Continue Watching</h2>
                        <select name="" id="">
                            <option value="Popular">Popular</option>
                            <option value="Top Rank">Top Rank</option>
                            <option value="MostWatch">MostWatch</option>
                        </select>
                    </div>

                    <div className="galary">
                        <div className="box">
                            <img src="./assets/img 1.jpg" alt="" />Hindi
                        </div>
                        <div className="box">
                            <img src="./assets/img 2.jpg" alt="" />Raazi
                        </div>
                        <div className="box">
                            <img src="./assets/img 3.jpeg" alt="" />Brothers
                        </div>
                        <div className="box">
                            <img src="./assets/img 4.jpeg" alt="" />Raees
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Home;