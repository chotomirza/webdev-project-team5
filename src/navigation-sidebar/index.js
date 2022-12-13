import React from "react";
import {FaHome, FaMap} from "react-icons/fa"
import {FaMapPin}from "react-icons/fa"
import {FaBookmark} from "react-icons/fa"
import {FaUser} from "react-icons/fa"
import {BsPeople, BsPeopleFill} from "react-icons/bs"
import '../search/index.css'



const NavigationSidebar = ({active = "home"}) => {
    return(

            <ul className="list-group wd-font-14">


                    <li className={`list-group-item`}>
                        <span className="d-none d-lg-block "> <span className="me-1"></span>
                            <b className="text-muted">POUR DECISIONS</b></span>
                        <span className="d-block d-lg-none "> <span className="me-1"></span>
                            <b className="text-muted">PD</b></span>
                    </li>



                <a href="../" className="text-decoration-none">
                    <li className={`list-group-item
                    ${active === 'home'?'active orr':''}`}>
                        <span className="d-none d-lg-block "> <span className="me-1"><FaHome/></span>  Home</span>
                        <span className="d-lg-none"> <FaHome/></span>
                    </li>
                </a>

                <a href="../search" className="text-decoration-none">
                    <li className={`list-group-item
                    ${active === 'search'?'active orr':''}`}>
                        <span className="d-none d-lg-block "> <span className="me-1"><FaMapPin/></span>  Search</span>
                        <span className="d-lg-none"> <FaMapPin/></span>
                    </li>
                </a>



                <a href="../users" className="text-decoration-none">
                    <li className={`list-group-item
                    ${active === 'users'?'active orr':''}`}>
                        <span className="d-none d-lg-block"> <span className='me-1'><BsPeopleFill/></span>  Users</span>
                        <span className="d-lg-none"> <BsPeopleFill/></span>
                    </li>
                </a>


                <a href="../profile" className="text-decoration-none">
                    <li className={`list-group-item
                    ${active === 'profile'?'active orr':''}`}>
                        <span className="d-none d-lg-block"> <span className='me-1'><FaUser/> </span> Profile</span>
                        <span className="d-lg-none"> <FaUser/></span>
                    </li>
                </a>
            </ul>



    );
};

export default NavigationSidebar;