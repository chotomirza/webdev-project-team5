import {FaBook, FaBookmark} from "react-icons/fa";

function SavedItem({place = {
    "id": 123,
    "name": "Toro",
    "address": "1704 Washington Street, Boston, MA 02118",
    "rating": 4.4,
    "description": "this is a description of it blah blah ..Small, stylish spot from Chef Ken Oringer serves up celebrated tapas, cocktails & Spanish wines.",
    "photo": "../images/toro.jpeg"
}}) {

    return(

        <div className={"card pt-2 col-sm-5 col-md-4"}>

            <img src = {place.photo} className={"pt-1 card-img-top"}  height="150px" width="100%"/>
            <div className={"card-body"}>
                <div className={"row row-description"}>
                    <h5 className={"card-title"}>{place.name}</h5>
                    <p className={"arial-font card-text align-top"}>{place.description}</p>
                </div>
                <div className={"row pt-4"}>
                    <button href={"#"} className={"align-bottom btn btn-info rounded-pill"}> See More</button>

                </div>
                <FaBookmark />

            </div>

        </div>
    );
}

export default SavedItem;