import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "./users-thunk";
import {Navigate, useNavigate} from "react-router";

const Login = () => {
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `../signup`;
        navigate(path);
    }
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState('alice')
    const [password, setPassword] = useState('alice1234')
    const dispatch = useDispatch()
    const handleLoginBtn = () => {
        try {
            dispatch(loginThunk({username, password}))
            // navigate('/profile')
        } catch (e) {

        }
    }
    if (currentUser) {
        return (<Navigate to={'/profile'}/>)
    }
    return(
<<<<<<< HEAD
        <div>
=======
        <>
>>>>>>> 1c3d2705a3f40fa6f2b776790990bd38792a96c2
            <h1 className={"text-info"}>Please login</h1>
            <form className={"justify-content-center card pt-3 ps-4 pb-3 text-bg-dark bg-gradient"}>
            <div className={"pt-2 form-group row text-start"}>
                <label htmlFor={"text-fields-username"} className={"col-lg-2 col-form-label"}>Username:</label>
                <input
                    id="text-fields-username"
                    title="Username cannot exceed 16 characters"
                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="username"
                                    value={username}
                                    className={"form-control w-50"} />
                <br/>
            </div>
            <div className={"pt-2 form-group row text-start"}>
                <label htmlFor={"text-fields-password"} className={"col-lg-2 col-form-label"}>Password:</label>
                <input
                    id="text-fields-password"
                    title="Your password must be 8 characters"
                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="password"
                                    type="password"
                                    value={password}
                                    className={"form-control w-50"} /><br/>
           </div>
           </form>
           <br/>
           <button type={"button"}className={" w-100 btn btn-outline-success"} >Save</button>
           <br/>
           <br/>
           <button type={"button"}onClick={routeChange} className={" w-100 btn btn-link"} >Don't have an account? Sign Up!</button>


            <input
                onChange={(e) => setPassword(e.target.value)}
                className="form-control" placeholder="password" type="password" value={password}/>
            <button
                className="btn btn-primary w-100"
                onClick={handleLoginBtn}>Login</button>
        </>
    )
}
<<<<<<< HEAD

=======
>>>>>>> 1c3d2705a3f40fa6f2b776790990bd38792a96c2
export default Login