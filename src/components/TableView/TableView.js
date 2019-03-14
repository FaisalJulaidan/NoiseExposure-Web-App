import React from 'react';
import { Table, Badge } from 'antd';
import styles from "./TableView.module.css"




const TableView = (props) => {
    const {noiseData} = props;

    console.log(noiseData);
    const columns = [
        {
            title: '#',
            dataIndex: '#',
            key: '#',
            render: (text, record, index) => (<p>{index+1}</p>),

        },
        {
            title: 'Noise Level',
            key: 'noiseLevel',
            render: (text, record, index) => (<p>{record.level}dB</p>),
        },
        {
            title: 'Severity',
            key: 'severity',
            render: (text, record, index) => {

                return (
                    <p><Badge status="success" text="Normal" /></p>

                );
            },
        },
        {
            title: 'Location Name',
            key: 'locationName',
            render: (text, record, index) => (<p>{record.locationName}</p>),
        },
        {
            title: 'Noise Type',
            key: 'noiseType',
            render: (text, record, index) => {

                return (<p>
                    {record.noiseType}
                </p>);

            },
        },
        {
            title: 'Device Model',
            key: 'deviceModel',
            render: (text, record, index) => (<p>{record.deviceModel}</p>),
        },
        {
            title: 'Timestamp',
            key: 'timeStamp',
            render: (text, record, index) => {

                return (<p>
                    {record.timeStamp}
                </p>);


            },
        },
    ];

    return (
        <div className={styles.TableView}>
            <Table
                columns={columns}
                dataSource={noiseData}
                pagination={true}
                size='middle'
            />
        </div>

    );
};

export default TableView;