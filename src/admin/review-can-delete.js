import {FaTrash} from "react-icons/fa";

function ReviewCanDelete({review={
                        "id":1,
                        "userID": 2,
                        "placeID": 234,
                        "review": "I went here blah blah blah and htought blah blah blah"
                    }}, {place = {
                        "id": 234,
                        "name": "Mariel",
                        "address": "10 Post Office Square #120, Boston, MA, 02109",
                        "rating": 4.2,
                        "description":"Upscale venue for Cuban specialties & craft cocktails served in dreamy, elegant surrounds.",
                        "photo":"../images/mariel.jpeg"

                    }}
) {
    return(
        <div className="card pt-2 col-sm-5 col-md-4">
            <img
                src={place.photo}
                className="card-img-top pt-1"  height="150px" width="100%"/>
            <div className="card-body">
                <div className="row row-description">
                    <h5 className="card-title">{place.name}</h5>
                    <p className="card-text align-top">{review.review} </p>
                </div>
            <FaTrash/>

            </div>
        </div>
    );
}

export default ReviewCanDelete;