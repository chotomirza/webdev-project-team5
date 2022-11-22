const NavigationSidebar = (active = 'home') => {
    return(
        <div id='left_side_bar' className="me-1 d-none d-sm-block col-xl-2 col-lg-2 col-md-2 col-sm-2 ">

            <ul className="list-group wd-font-14">


                <a href="../home.html" className="text-decoration-none">
                    <li className="list-group-item">
                        <span className="d-none d-md-block "> <i className="me-1 fa fa-home"></i>  Home</span>
                        <span className="d-md-none"> <i className="fa fa-home"></i></span>
                    </li>
                </a>

                <a href="index.html" className="text-decoration-none">
                    <li className="list-group-item active orr">
                        <span className="d-none d-md-block "> <i className="me-1 fa fa-map-pin"></i>  Explore</span>
                        <span className="d-md-none"> <i className="me-1 fa fa-map-pin"></i></span>
                    </li>
                </a>

                <a href="../bookmarks/index.html" className="text-decoration-none">
                    <li className="list-group-item">
                        <span className="d-none d-md-block"> <i className='me-1 fa fa-bookmark'></i>  Saved</span>
                        <span className="d-md-none"> <i className="fa fa-bookmark"></i></span>
                    </li>
                </a>


                <a href="../profile.html" className="text-decoration-none">
                    <li className="list-group-item">
                        <span className="d-none d-md-block"> <i className='me-1 fa fa-user'> </i> Profile</span>
                        <span className="d-md-none"> <i className="fa fa-user"></i></span>
                    </li>
                </a>
            </ul>


        </div>

    );
};

export default NavigationSidebar;