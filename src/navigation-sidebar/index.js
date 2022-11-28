import React from "react";
import {FaHome} from "react-icons/fa"
import {FaMapPin}from "react-icons/fa"
import {FaBookmark} from "react-icons/fa"
import {FaUser} from "react-icons/fa"
import '../search/index.css'



const NavigationSidebar = ({active = "home"}) => {
    return(

            <ul className="list-group wd-font-14">


                <a href="../home.html" className="text-decoration-none">
                    <li className={`list-group-item
                    ${active === 'home'?'active orr':''}`}>
                        <span className="d-none d-md-block "> <span className="me-1"><FaHome/></span>  Home</span>
                        <span className="d-md-none"> <i className="fa fa-home"></i></span>
                    </li>
                </a>

                <a href="index.html" className="text-decoration-none">
                    <li className={`list-group-item
                    ${active === 'search'?'active orr':''}`}>
                        <span className="d-none d-md-block "> <span className="me-1"><FaMapPin/></span>  Search</span>
                        <span className="d-md-none"> <i className="me-1 fa fa-map-pin"></i></span>
                    </li>
                </a>

                <a href="../bookmarks/index.html" className="text-decoration-none">
                    <li className={`list-group-item
                    ${active === 'saved'?'active orr':''}`}>
                        <span className="d-none d-md-block"> <span className='me-1'><FaBookmark/></span>  Saved</span>
                        <span className="d-md-none"> <i className="fa fa-bookmark"></i></span>
                    </li>
                </a>


                <a href="../profile.html" className="text-decoration-none">
                    <li className={`list-group-item
                    ${active === 'profile'?'active orr':''}`}>
                        <span className="d-none d-md-block"> <span className='me-1'><FaUser/> </span> Profile</span>
                        <span className="d-md-none"> <i className="fa fa-user"></i></span>
                    </li>
                </a>
            </ul>



    );
};

export default NavigationSidebar;