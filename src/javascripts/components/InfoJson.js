import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import JSONPretty from 'react-json-pretty';

class InfoJson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiResponse: {},
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.imageUrl = this.imageUrl.bind(this);
  }

  componentDidMount() {
    const newThis = this;
    this.serverRequest =
      axios.get(this.props.url)
        .then((response) => {
          newThis.setState({
            apiResponse: response.data
          });
        });
  }

  componentWillUnMount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div>
        <p>
          {this.props.url}
        </p>
        <div className="codeblock">
          <JSONPretty json={this.state.apiResponse} />
        </div>
      </div>
    );
  }
}

InfoJson.propTypes = {
  url: PropTypes.string.isRequired,
}

export default InfoJson;
