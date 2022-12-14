import {useNavigate} from "react-router";

function ShowUser({user}){
    let uid = user._id;


    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `../profile/`+ uid;
        navigate(path);
    }
    return(
        <li className={"list-group-item text-primary"} onClick={routeChange}>
            <h3 className={"text-start text-success"}>{user.firstName} {user.lastName}</h3>
            <u>   @{user.username}  </u>
        </li>
    )
}

export default ShowUser;