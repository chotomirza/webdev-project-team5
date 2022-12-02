import React from "react";
import {FaStar} from "react-icons/fa";
import '../index.css'

const SearchItem = ({item = {"id": 456,
    "name": "Back Bay Social",
    "address": "867 Boylston St, Boston, MA 02116",
    "rating": 4.1,
    "description": "Stylishly old-fashioned, bustling bi-level bistro for New American eats & intricate cocktails.",
    "photo": "../images/backbaysocial.jpeg"}
}
) => {
    return (
        <li className="mt-2 list-group-item">

            <div className="row">

                <div className="col-12">
                    <h5 className={"text-success"}>{item.name} </h5>
                    {item.address} <br/>
                    <span className="text-warning"> {item.rating} <FaStar/> </span><br/>

            </div>
        </div>
    <div className="row pt-2">
        {item.description}
    </div>
</li>
    );
};

export default SearchItem;