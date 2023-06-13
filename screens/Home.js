import React, { Component } from "react"; 
import { View, Text, StyleSheet, Image, TouchableOpacity, ViewComponent } from "react-native"; 
import { Header, AirbnbRating, Icon } from "react-native-elements"; 
import { RFValue } from "react-native-responsive-fontsize"; 
import axios from "axios";

export default class HomeScreen extends Component {
    constructor(){
        super()
        this.state = {
            movieDetails : {}
        }
    }

    componentDidMount(){
        this.getMovieDetails();
    }

    timeconvert(num){
        var hours = Math.floor(num / 60);
        var min = num % 60;
        return `${hours} hrs ${min} mins`
    }

    getMovieDetails = () => {
        const URL = 'http://127.0.0.1:5000/get-movie';

        axios.get(URL).then((response) => {
            let details = response.data.data;
            details['duration'] = this.timeconvert(details.duration);
            this.setState({ movieDetails: details });
        }).catch(error => {
            console.log(error.message)
        })
    }

    likedMovie = () => {
        const URL = 'http://127.0.0.1:5000/liked-movie'

        axios.post(URL).then((response) => {
            this.getMovieDetails()
        }).catch(error => {
            console.log(error.message)
        })
    }

    dislikedMovie = () => {
        const URL = 'http://127.0.0.1:5000/not-liked-movie'

        axios.post(URL).then((response) => {
            this.getMovieDetails()
        }).catch(error => {
            console.log(error.message)
        })
    }

    notWatchedMovie = () => {
        const URL = 'http://127.0.0.1:5000/did-not-watched-movie'

        axios.post(URL).then((response) => {
            this.getMovieDetails()
        }).catch(error => {
            console.log(error.message)
        })
    }

    render(){
        return(
            <View><Text>Home Screen</Text></View>
        )
    }
}