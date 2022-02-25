import { useState, useEffect } from 'react';
import favoriCard from '../assets/favoricard.css';


function FavoriCard({name, description, temp, temp_min, temp_max, icon }) {
    /*const[pays, setPays] = useState("")

    useEffect(()=>{
        setPays("Un pays")
    }, [])*/

    return (
        <tr class="favCard">
            <td>
                {name}
            </td>
            <td>
                <img width="100px" src={"http://openweathermap.org/img/wn/"+icon+"@2x.png"}/>
            </td>
            <td>
                {description}
            </td>
            <td>
                {temp+'°C'}
            </td>
            <td>
                {temp_min+'°C'}
            </td>
            <td>
                {temp_max+'°C'}
            </td>
            <td>
               <button onClick={()=> this.removeFav()}>Remove Fav</button> 
            </td>
                 
        </tr>
    )
}

export default FavoriCard;