import { useState, useEffect } from 'react';
import meteoCard from '../assets/card.css';
import { useDispatch } from 'react-redux';


function Card({name, description, temp, temp_min, temp_max, icon }) {
     

    //const dispatch= useDispatch();
    /*const[pays, setPays] = useState("")

    useEffect(()=>{
        setPays("Un pays")
    }, [])*/
    return (
        <div>
            <div class="wrapper">
                <div class="one">
                    <h2 className={{paddingTop : "10px"}}>
                        {name}
                    </h2>
                    <div>
                        <img width="200px" src={"http://openweathermap.org/img/wn/"+icon+"@2x.png"}/>
                    </div>
                    <div>
                        {description}
                    </div>
                    <div>
                        {"Temp : "+temp+"° / temp min : "+temp_min+"° / temp max : "+temp_max+"°"}
                    </div>
                    <br></br>
                </div>
            </div>
        </div>
    )  
}

export default Card;