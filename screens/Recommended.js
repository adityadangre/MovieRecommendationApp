import React, { Component } from "react"; 
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"; 
import { Header, AirbnbRating, Icon } from "react-native-elements"; 
import { RFValue } from "react-native-responsive-fontsize"; 
import axios from "axios";

export default class RecommendedMovieScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            data : []
        }
    }

    componentWillMount(){
        this.getData();
    }

    timeconvert(num){
        var hours = Math.floor(num / 60);
        var min = num % 60;
        return `${hours} hrs ${min} mins`
    }

    getData = () => {
        const URL = 'http://127.0.0.1:5000/recommended-movies';

        axios.get(URL).then(async (response) => {
            let details = response.data.data;
            details['duration'] = this.timeconvert(details.duration);
            this.setState({ data: details });
        }).catch(error => {
            console.log(error.message)
        })
    }

    render(){
        return(
            <View><Text>Recommended Screen</Text></View>
        )
    }
}