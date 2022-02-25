import React, {Component} from "react";
import Card from "../components/card";
import Hours from "../components/dataHours"
import dataRepository from "../repository/dataRepository";

class City extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description : '',
            temp: '',
            temp_min: '',
            temp_max: '',
            icon: '',
            listHours: []
        };
    }
    async componentDidMount(){
        navigator.geolocation.getCurrentPosition(async (position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            const infoMyPos = await dataRepository.getMyPos(lon,lat)
            this.setState({ 
                name: infoMyPos.name,
                description: infoMyPos.weather[0].description,
                temp: infoMyPos.main.temp,
                temp_min: infoMyPos.main.temp_min,
                temp_max: infoMyPos.main.temp_max,
                icon: infoMyPos.weather[0].icon
        
            })
            const infoForHours = await dataRepository.getWeatherForHours(lon,lat)
            infoForHours.hourly.slice(0,3).map((hour) => {
                this.setState({ 
                    description: hour.weather[0].description,
                    temp: hour.temp,
                    icon: infoMyPos.weather[0].icon 
                })
                return( 
                    <Hours 
                        description={this.state.description} 
                        icon={this.state.icon}
                        temp={Math.round(this.state.temp)} 
                    />
                )
            })   
        })
    } 


    


    render(){
        return (
            <main>
                <Card 
                    name={this.state.name} 
                    description={this.state.description} 
                    temp={Math.round(this.state.temp)} 
                    temp_min={Math.round(this.state.temp_min)} 
                    temp_max={Math.round(this.state.temp_max)}
                    icon={this.state.icon}
                    
                />

            </main>
        )
    }
}

export default City;