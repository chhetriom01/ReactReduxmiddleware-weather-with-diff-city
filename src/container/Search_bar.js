import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchWeather from "../actions/index";


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }
  FormSubmit = e => {
    e.preventDefault();

    this.props.fetchWeather(this.state.term);

    this.setState({
      term: ""
    });
  };

  onInputChange = e => {
    return this.setState({
      term: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.FormSubmit}>
          <input
            value={this.state.term}
            onChange={this.onInputChange}
            placeholder="five days forecast"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}
export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
