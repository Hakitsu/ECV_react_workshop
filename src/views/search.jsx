import React, {Component} from "react";
import {connect} from 'react-redux';
import { addFav } from "../store/reducers/weatherReduc";
import Card from "../components/card";
import dataRepository from "../repository/dataRepository";

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            searchCity : null,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    async submitForm(name){
        const newCity = await dataRepository.getSearch(name);
        this.setState({
            searchCity: newCity
        })
    }

    handleChange(value){
        this.setState({[value.target.name]: value.target.value})
    }

    addFavori(){
        this.props.addFav({name : this.state.searchCity.name})
    }
    

    render(){
        return(
        <div>
            <div>
                <label className='label'>Ville</label>
                <input type='text' name='name' value={this.state.name} onChange={this.handleChange}  />
            </div>
            <button className={this.formButton} onClick={()=> this.submitForm(this.state.name)} >Rechercher</button>
            {this.state.searchCity &&(
                <Card 
                    name={this.state.searchCity.name}
                    description={this.state.searchCity.weather[0].description} 
                    temp={Math.round(this.state.searchCity.main.temp)} 
                    temp_min={Math.round(this.state.searchCity.main.temp_min)} 
                    temp_max={Math.round(this.state.searchCity.main.temp_max)}
                    icon={this.state.searchCity.weather[0].icon}      
                />
                
                
                /*<div>
                    <div class="wrapper">
                        <div class="one">
                            <h2 className={{paddingTop : "10px"}}>
                                {this.state.searchCity.name}
                            </h2>
                            <div>
                                <img width="200px" src={"http://openweathermap.org/img/wn/"+this.state.searchCity.weather[0].icon+"@2x.png"}/>
                            </div>
                            <div>
                                {this.state.searchCity.weather[0].description}
                            </div>
                            <div>
                                {"Temp : "+Math.round(this.state.searchCity.main.temp)+"° / temp min : "+ Math.round(this.state.searchCity.main.temp_min)+"° / temp max : "+Math.round(this.state.searchCity.main.temp_max)+"°"}
                            </div>
                            <br></br>
                            <button onClick={()=> this.addFavori()} >Add Fav</button>
                            </div>
                            </div>
                            </div>*/
            )}
            <button onClick={()=> this.addFavori()} >Add Fav</button>
        </div>
        )
    }
}

const mapDispatchToProps = dispacth => {
    return {
        addFav: (city) => dispacth(addFav(city))
    }
}

const mapStateToProps = state => {
    return {
        name: state.favoris.searchCity
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);