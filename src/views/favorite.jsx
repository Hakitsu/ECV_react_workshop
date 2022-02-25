import React, {Component} from "react";
import FavoriCard from "../components/favoricard";
import dataRepository from "../repository/dataRepository";
import { connect } from "react-redux";

class Favori extends Component{
    constructor(props){
        super(props);
        this.state = {
            city : [],
            isLoaded : false,
            listOfCity: [],
        };
    }
    async componentDidMount(){
            const favCity = await Promise.all(
                    this.props.city.map(async (city) => {
                        return{
                            name: city.name, weather : await dataRepository.getCity(city.name)
                        }
                    }
                )
            ) 
            this.setState({ 
                listOfCity : favCity

            },()=>{
                this.setState({ isLoaded : true })
            }
        )
    }

    removeFav(){
        const newstate = this.state.city;
        
    }
            
    render(){
        return (
            <table>
                <thead>
                    <th>ville</th>
                    <th>Ciel</th>
                    <th>Temps</th>
                    <th>Température</th>
                    <th>Température minimum</th>
                    <th>Température maximum</th>
                    <th></th>
                </thead>
                <tbody>
                {this.state.isLoaded ? (
                    this.state.listOfCity.map((city) => {
                        return(
                            <FavoriCard 
                                name={city.name}
                                description={city.weather.weather[0].description} 
                                temp={Math.round(city.weather.main.temp)} 
                                temp_min={Math.round(city.weather.main.temp_min)} 
                                temp_max={Math.round(city.weather.main.temp_max)}
                                icon={city.weather.weather[0].icon}
                            />
                        );
                    })): <div></div>
                }
                </tbody>
            </table>
        )
    }
}


const mapStateToProps = state => {
    return {
        city: state.favoris.listOfCity
    }
}

export default connect (mapStateToProps)(Favori)