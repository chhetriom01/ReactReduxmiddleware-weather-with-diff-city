import React from "react";
import { connect } from "react-redux";
import { Sparklines, SparklinesLine } from "react-sparklines";

class WeatherList extends React.Component {
  renderWeather(cityData) {
    const name = cityData.name;
    const temp = cityData.main.temp;
    const humidity = cityData.main.humidity;
    const description =cityData.weather[0].description;
    console.log(temp);
    return (
      <tr key={name}>
        <td>{cityData.name}</td>
        <td>{temp}°C</td>
        <td>{humidity}</td>
        <td>{description}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperture</th>
            <th>Humidity</th>
            <th>Condition</th>
          </tr>
        </thead>
        {this.props.weather.map(this.renderWeather)}
        <tbody />
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}
export default connect(mapStateToProps)(WeatherList);
