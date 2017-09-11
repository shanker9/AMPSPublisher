import React from 'react';
import AmpsClientData from '../Amps/AmpsData.js';

class App extends React.Component {

    constructor() {
        super();

    }

    componentDidMount() {

        let controller = new AmpsClientData();
        controller.connectAndPublish();
  
    }

    render() {
        return (<div>SAMPLE PUBLISHER</div>);

    }
}

export default App;