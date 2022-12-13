import {useState, useCallback, useEffect} from "react";
import axios from 'axios'


function GenericDrinksFunc() {
    const [loading, setLoading] = useState(false);
    const [data,setData] = useState([]);

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

    const fetchCocktailHandler = useCallback(() => {
        setLoading(true);

        axios.get(url).then(res=> {
            console.log(res.data)
            setData(res.data.drinks)
        }).catch(e=>console.log(e))
            .finally(()=>setLoading(false))
    },[])


    useEffect(()=> {
        fetchCocktailHandler()
    },[fetchCocktailHandler])

    if (loading){
        return <h4>Loading...</h4>
    }

    return (

        <div className={"card pt-2 col-sm-5 col-md-4 bg-transparent"}>
            {/* Title of Drink */}
            {data.map((cocktail)=> (
                <div key={cocktail.idDrink}>
                    <h4 className={"text-success card-title"}>{cocktail.strDrink}</h4>

                    <a className="button" href={"/details/" + cocktail.idDrink}>
                        <button>
                            learn more
                        </button>
                    </a>
                </div>
            ))}

            {/* Photo of Drink */}
            <div className={"card-body"}>
                <div className={"row row-description"}>
                    <hr/>
                    {data.map((cocktail)=> (
                        <div key={cocktail.idDrink}>
                            <img src={cocktail.strDrinkThumb} alt="#" width="100%"/>
                        </div>
                    ))}
                </div>
            </div>

        </div>


    );
}

export default GenericDrinksFunc;