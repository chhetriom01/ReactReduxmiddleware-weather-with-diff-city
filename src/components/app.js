import React, { Component } from "react";
import { connect } from "react-redux";
import { moviesList, directorList } from "../actions";
import { bindActionCreators } from "redux";
import SearchBar from "../container/Search_bar";
import WeatherList from '../container/weather_list'
export default class App extends Component {
  render() {
    return(
    <div>
      <SearchBar />
      <WeatherList />

    </div>
    );
  }
}
