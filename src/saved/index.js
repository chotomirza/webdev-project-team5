import SavedLoggedIn from "./saved-logged-in";
import SavedLoggedOut from "./saved-logged-out";

function Saved({user}) {
    if(user === null){
        return(<SavedLoggedOut/>);
    }
    else{
        return(<SavedLoggedIn user={user}/>);
    }
}

export default Saved;