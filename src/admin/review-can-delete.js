import {FaTrash} from "react-icons/fa";
import users from "../data/users.json";

function findUser(uid){
    let found = users.filter(u => uid === u.id);
    return(found[0]);

}
function ReviewCanDelete(pr
) {



    pr = pr.pr;
    let place = pr[0];
    let review = pr[1];

    let user = findUser(review.userID);


    return(
        <div className="text-start card pt-2 col-sm-5 col-md-4">
            <div className="card-body">
                <div className="row row-description mb-4">
                    <h5 className="text-center card-title text-success">{place.name}</h5>
                    <span className={"text-primary"}>@{user.username}: <br/></span>
                    <p className="arial-font card-text align-top">{review.review} </p>
                </div>
                <span className={"text-center"}><FaTrash/></span>

            </div>
        </div>
    );
}

export default ReviewCanDelete;