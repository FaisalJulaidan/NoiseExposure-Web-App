import React from 'react';
import { Table, Badge } from 'antd';
import styles from "./TableView.module.css";
import { severityStyle } from './../../utilities';

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
            render: (text, record, index) => (<p>{record.level ? record.level : "Unknown"}dB</p>),
        },
        {
            title: 'Severity',
            key: 'severity',
            render: (text, record, index) => {
                return (
                    <p><Badge status={severityStyle(record.severity).status} text={record.severity ? record.severity : "Unknown"} /></p>
                );
            },
        },
        {
            title: 'Location Name',
            key: 'locationName',
            render: (text, record, index) => (<p>{record.locationName ? record.locationName : "Unknown"}</p>),
        },
        {
            title: 'Noise Type',
            key: 'noiseType',
            render: (text, record, index) => {

                return (<p>
                    {record.noiseType ? record.noiseType : "Unknown"}
                </p>);

            },
        },
        {
            title: 'Device Model',
            key: 'deviceModel',
            render: (text, record, index) => (
                <p>
                    {record.deviceModel ? record.deviceModel : "Unknown"}
                </p>),
        },
        {
            title: 'Timestamp',
            key: 'timeStamp',
            render: (text, record, index) => {

                return (<p>
                    {record.timeStamp ? record.timeStamp : "Unknown"}
                </p>);


            },
        },
    ];

    return (
        <div className={styles.TableView}>
            <Table
                rowKey="uid"
                columns={columns}
                dataSource={noiseData}
                pagination={{defaultPageSize: 10, position: 'both'}}
                size='middle'
                // scroll={{y: 500, x: 100}}
                loading={(!(!!noiseData))}
            />
        </div>

    );
};

export default TableView;