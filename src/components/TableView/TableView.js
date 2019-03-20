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
            sorter: (a, b) => a.level - b.level,
            render: (text, record, index) => (<p>{record.level ? record.level : "Unknown"}dB</p>),
        },
        {
            filters: [{
                text: 'Normal',
                value: 'Normal',
            }, {
                text: 'High',
                value: 'High',
            }, {
                text: 'Dangerous',
                value: 'Dangerous',
            }
            ],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.severity.indexOf(value) === 0,
            title: 'Severity',
            key: 'severity',
            dataIndex: 'severity',
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
            sorter: (a, b) => new Date(a.timeStamp).valueOf() - new Date(b.timeStamp).valueOf(),
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