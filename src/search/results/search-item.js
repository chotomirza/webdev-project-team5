import React from "react";

const SearchItem = ({item = {"id": 456,
    "name": "Back Bay Social",
    "address": "867 Boylston St, Boston, MA 02116",
    "rating": 4.1,
    "description": "Stylishly old-fashioned, bustling bi-level bistro for New American eats & intricate cocktails.",
    "photo": "../images/backbaysocial.jpeg"}
}
) => {
    return (
        <li class="card list-group-item">

            <div class="row">
                <div class="col-2">
                    <img class = 'd-none d-sm-block d-md-none wd-rounded-corners-all-around-less' src={item.image} width="50px" height="50px"/>
                </div>
                <div class="col-10">
                    <h5>{item.name} </h5>
                    {item.address} <br/>
                    <span class="text-warning"> {item.rating} <i class="fa fa-star"></i> </span><br/>

            </div>
        </div>
    <div class="row pt-2">
        {item.description}
    </div>
</li>
    );
};

export default SearchItem;