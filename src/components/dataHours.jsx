import { useState, useEffect } from 'react';


function Hours({weather, description, temp }) {
    const[hours, setHours] = useState("")

    useEffect(()=>{
        setHours("Hours")
    }, [])

    return (
        <div>
            <div>
                <h4>
                    <b>{'Météo : '+weather+' / Temps : '+description+' / Température : '+temp+'°C'}</b>
                </h4>
                <p>
                    {hours}
                </p>
            </div>
        </div>
    )
}

export default Hours;