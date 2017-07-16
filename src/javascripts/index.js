import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import ImageApiPlayground from './components/ImageApiPlayground';

class App extends PureComponent {
  render() {
    return (
      <ImageApiPlayground
        urlPrefix="https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44"
      />
    );
  }
}

const playground = document.getElementById('image-api-playground');

if (playground) {
  render(<App />, playground);
}
