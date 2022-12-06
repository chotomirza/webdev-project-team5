import {useNavigate} from "react-router";

function PlaceReview({ ru
}){

   let  user = ru[1];
    let review = ru[0];

    let navigate = useNavigate();
    const routeChange = () => {
        let path=`../profile/`+user.id;
        navigate(path);
    }


    return(
        <div className={"text-start card mb-5 pt-2 pb-2 "}>
            <a onClick={routeChange}> <h5 className={" ms-4 text-primary"}><u>{user.username}</u></h5></a>

            <span className={"ms-4 arial-font"}>{review.review}</span>

        </div>
    )
}

export default PlaceReview;