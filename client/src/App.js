import React from 'react';
import axios from 'axios';
import './App.css';
import DisplayPanel from './DisplayPanel';

export default class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {geoData: null, ipVal: null};
    }

    render() {
        return (
            <div className="App">
                <input type="text" className="form-control" id="ipInput" value={this.state.ipVal} onChange={this.ipChangeHandle.bind(this)}/>
                <button type="button" className="btn btn-success" id="loadIp" onClick={this.getGeoDataByIp.bind(this)}>Get Data</button>
                <DisplayPanel id="displayPanel" data={this.state.geoData} />
            </div>
        );
    }

    ipChangeHandle(e){
        this.setState({ipVal: e.target.value});
    }

    async getGeoDataByIp(e){
        let res = await axios.get(`http://localhost:5000/position/${this.state.ipVal}`);

        this.setState({geoData: res.data});
    }

    async componentDidMount() {
        let res = await axios.get('http://localhost:5000/position/current');

        this.setState({geoData: res.data});
    }
};
