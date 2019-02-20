import React, {Component} from 'react';

class MapComponent extends Component {

  state = {
    arcgis: null
  };

  componentDidMount() {
    if (typeof window != 'undefined')
    {
      const arcgis = require('@esri/react-arcgis');
      this.setState({arcgis});
    }
  }

  render() {
    if (this.state.arcgis != null)
    {
      return (
        <div style={{width: "1280px", height: "720px"}} ><this.state.arcgis.Map /></div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }
}

export default MapComponent;
