import React from 'react';
import './DisplayPanel.css';

export default class DisplayPanel extends React.Component {
    render() {
        return (
            <div id="display-panel">
                <table className="table table-bordered">
                    {this.createList(this.props.data)}
                </table>
            </div>
        );
    }

    createList(data) {
        let listData = [];

        console.log(data);

        for (let key in data) {
            listData.push(
                <tr>
                    <td className="geo-data">{key}</td>
                    <td className="geo-data">{data[key]}</td>
                </tr>
            );
        }

        return listData;
    }
}