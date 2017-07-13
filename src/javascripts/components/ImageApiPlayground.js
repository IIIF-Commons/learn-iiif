import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image';

class ImageApiPlayground extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: '1015,1460,799,824',
      size: 'pct:25',
      rotation: '0',
      quality: 'default',
      format: 'jpg',
    };

    this.handleChange = this.handleChange.bind(this);
    this.imageUrl = this.imageUrl.bind(this);
  }
  imageUrl() {
    return `${this.props.urlPrefix}/${this.state.region}/${this.state.size}/${this.state.rotation}/${this.state.quality}.${this.state.format}`
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.placeholder] = event.target.value;
    this.setState(newState);
  }


  render() {
    const image = this.imageUrl();
    const spinner = (<img alt="spinner" className="" src='/assets/spinning-circles.svg'/>);
    return (
      <div>
        <div className="row">
          {this.props.urlPrefix}/
        </div>
        <div className="row">
          <div className="col-3">
            <input
              type="text"
              className="form-control"
              placeholder="region"
              value={this.state.region}
              onChange={this.handleChange}

            />
          </div>
          /
          <div className="col-2">
            <input
              type="text"
              className="form-control"
              placeholder="size"
              value={this.state.size}
              onChange={this.handleChange}

            />
          </div>
          /
          <div className="col-2">
            <input
              type="text"
              className="form-control"
              placeholder="rotation"
              value={this.state.rotation}
              onChange={this.handleChange}

            />
          </div>
          /
          <div className="col-2">
            <input
              type="text"
              className="form-control"
              placeholder="quality"
              value={this.state.quality}
              onChange={this.handleChange}

            />
          </div>
          .
          <div className="col-2">
            <input
              type="text"
              className="form-control"
              placeholder="format"
              value={this.state.format}
              onChange={this.handleChange}

            />
          </div>
        </div>
        <div className="row p-4">
          <div className="col-md-12 img-container rounded">
            <div className="container d-flex h-100 justify-content-center">
              <div className="row align-self-center">
                <Img src={image} loader={spinner} className="p-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/1015,1460,799,824/pct:25/0/default.jpg

ImageApiPlayground.propTypes = {
  region: PropTypes.string,
  urlPrefix: PropTypes.string,
}

export default ImageApiPlayground;
