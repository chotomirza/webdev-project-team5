import React from "react";
import {useNavigate} from "react-router";

function Login () {
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `../signup`;
        navigate(path);
    }

    return(
        <div>
        <h1 className={"text-info"}>Please login</h1>
            <form className={"justify-content-center card pt-3 ps-4 pb-3 text-bg-dark bg-gradient"}>
                <div className={"pt-2 form-group row text-start"}>
                    <label htmlFor={"text-fields-username"} className={"col-lg-2 col-form-label"}>Username:</label>
                    <input id="text-fields-username" title="Username cannot exceed 16 characters"
                           className={"form-control w-50"} /><br/>
                </div>
                <div className={"pt-2 form-group row text-start"}>
                    <label htmlFor={"text-fields-password"} className={"col-lg-2 col-form-label"}>Password:</label>
                    <input type="password" id="text-fields-password" title="Your password must be 8 characters"
                           className={"form-control w-50"} /><br/>
                </div>
            </form>
            <br/>
            <button type={"button"}className={" w-100 btn btn-outline-success"} >Save</button>
            <br/>
            <br/>
            <button type={"button"}onClick={routeChange} className={" w-100 btn btn-link"} >Don't have an account? Sign Up!</button>



        </div>
    );
}

export default Login

