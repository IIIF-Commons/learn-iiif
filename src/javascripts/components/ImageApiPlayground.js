import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image';
import InfoJson from './InfoJson';

class ImageApiPlayground extends Component {
  constructor(props) {
    super(props);

    this.state = props;

    this.handleChange = this.handleChange.bind(this);
    this.imageUrl = this.imageUrl.bind(this);
  }

  imageUrl() {
    return `${this.state.scheme}://${this.state.server}/${this.state.prefix}` +
           `/${this.state.identifier}/${this.state.region}/${this.state.size}/` +
           `${this.state.rotation}/${this.state.quality}.${this.state.format}`;
  }

  infoUrl() {
    return `${this.state.scheme}://${this.state.server}/${this.state.prefix}` +
           `/${this.state.identifier}/info.json`;
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.placeholder] = event.target.value;
    this.setState(newState);
  }


  render() {
    const image = this.imageUrl();
    const infoUrl = this.infoUrl();
    const spinner = (<img alt="spinner" className="" src='/assets/spinning-circles.svg'/>);
    return (
      <div>
        <div className="row">
          <div className="form-group col-2">
            <label>Scheme</label>
            <input
              type="text"
              className="form-control"
              placeholder="scheme"
              value={this.state.scheme}
              onChange={this.handleChange}
            />
          </div>
          ://
          <div className="form-group col-3">
            <label>Server</label>
            <input
              type="text"
              className="form-control"
              placeholder="server"
              value={this.state.server}
              onChange={this.handleChange}
            />
          </div>
          /
          <div className="form-group col-3">
            <label>Prefix</label>
            <input
              type="text"
              className="form-control"
              placeholder="prefix"
              value={this.state.prefix}
              onChange={this.handleChange}
            />
          </div>
          /
          <div className="form-group col-3">
            <label>Identifier</label>
            <input
              type="text"
              className="form-control"
              placeholder="identifier"
              value={this.state.identifier}
              onChange={this.handleChange}
            />
          </div>
          /
        </div>
        <div className="row">
          <div className="form-group col-3">
            <label>Region</label>
            <input
              type="text"
              className="form-control"
              placeholder="region"
              value={this.state.region}
              onChange={this.handleChange}

            />
          </div>
          /
          <div className="form-group col-2">
            <label>Size</label>
            <input
              type="text"
              className="form-control"
              placeholder="size"
              value={this.state.size}
              onChange={this.handleChange}
            />
          </div>
          /
          <div className="form-group col-2">
            <label>Rotation</label>
            <input
              type="text"
              className="form-control"
              placeholder="rotation"
              value={this.state.rotation}
              onChange={this.handleChange}
            />
          </div>
          /
          <div className="form-group col-2">
            <label>Quality</label>
            <input
              type="text"
              className="form-control"
              placeholder="quality"
              value={this.state.quality}
              onChange={this.handleChange}

            />
          </div>
          .
          <div className="form-group col-2">
            <label>Format</label>
            <input
              type="text"
              className="form-control"
              placeholder="format"
              value={this.state.format}
              onChange={this.handleChange}

            />
          </div>
        </div>
        <p>
          Requested image url: {image}
        </p>
        <div className="row p-4">
          <div className="col-md-12 img-container rounded">
            <div className="container d-flex h-100 justify-content-center">
              <div className="row align-self-center">
                <Img src={image} loader={spinner} className="p-4" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <InfoJson url={infoUrl} />
        </div>
      </div>
    );
  }
}


ImageApiPlayground.propTypes = {
  scheme: PropTypes.string,
  server: PropTypes.string,
  prefix: PropTypes.string,
  identifier: PropTypes.string,
  region: PropTypes.string,
  size: PropTypes.string,
  rotation: PropTypes.string,
  quality: PropTypes.string,
  format: PropTypes.string,
};

ImageApiPlayground.defaultProps = {
  scheme: 'https',
  server: 'stacks.stanford.edu',
  prefix: 'image/iiif',
  identifier: 'hg676jb4964%2F0380_796-44',
  region: '1015,1460,799,824',
  size: 'pct:25',
  rotation: '0',
  quality: 'default',
  format: 'jpg',
};

export default ImageApiPlayground;
