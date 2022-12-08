import {useNavigate} from "react-router";

function UserReview({pr}
)
{


    let place = pr[0][0];

    let review = pr[1];

    let navigate = useNavigate();
    const changeRoute = () =>{
        let path = `../details/`+ place.id;
        navigate(path);
    }

    return(
        <a className="border pt-2 col-sm-5 col-md-4" onClick={changeRoute}>
            <h5 className="card-title text-success">{place.name}</h5>
            <hr/>
            <p className="card-text align-top">{review.review} </p>
        </a>
    );
}

export default UserReview;