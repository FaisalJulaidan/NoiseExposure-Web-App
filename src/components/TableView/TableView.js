import React from 'react';
import { Table } from 'antd';
import styles from './TableView.module.css';



const TableView = (props) => {
    const noiseData = [{}, {} , {}];
    const columns = [
        {
            title: 'Noise Level (dB)',
            key: 'NoiseLevel',
            render: (text, record, index) => (<p>55dB</p>),
        },
        {
            title: 'Location Name',
            key: 'LocationName',
            render: (text, record, index) => (<p>Queen Street</p>),
        },
        {
            title: 'Severity',
            key: 'Severity',
            render: (text, record, index) => {

                return (<p>
                    Normal
                </p>);


            },
        },
        {
            title: 'Noise Type',
            key: 'NoiseType',
            render: (text, record, index) => {

                return (<p>
                    Moderate Traffic
                </p>);


            },
        },
        {
            title: 'Timestamp',
            key: 'Timestamp',
            render: (text, record, index) => {

                return (<p>
                    12/03/2018 12:44:23 GMT
                </p>);


            },
        },
    ];


    return (
        <Table
            columns={columns}
            dataSource={noiseData}
            pagination={true}
            scroll={{ y: 500 }}
        />
    );
};

export default TableView;