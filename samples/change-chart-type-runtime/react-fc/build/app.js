import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
// import FusionTime from 'fusioncharts/themes/fusioncharts.theme.fusion';

import '../../../../../assets/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts);
// ReactFC.fcRoot(FusionCharts, Charts, FusionTime);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'column2d',
      width: '100%',
      height: '85%',
      dataFormat: 'jsonurl',
      dataSource: '../../data.json',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      type: e.currentTarget.value,
    });
  }

  render() {
    return (
      <div>
        <ReactFC {...this.state} />
        <br />
        <br />
        <center>
          <select onChange={this.onChange}>
            <option value="column2d">Column 2D Chart</option>
            <option value="bar2d">Bar 2D Chart</option>
            <option value="line">Line 2D Chart</option>
          </select>
        </center>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
