import React from 'react';
import { Table, Badge, Input, Button, Icon } from 'antd';
import styles from "./TableView.module.css";
import { severityStyle } from './../../utilities';
import Highlighter from 'react-highlight-words';



class TableView extends React.Component {

    state = {
        searchText: '',
    };

    // This function will be reused by the columns that need searching functionality as it takes the dataIndex which represent
    // the type of data the column has. It goes through all rows and look for rows that have the entered text as its value.
    getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
                             setSelectedKeys, selectedKeys, confirm, clearFilters,
                         }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => { this.searchInput = node; }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
                </Button>
                <Button
                    onClick={() => this.handleReset(clearFilters)}
                    size="small"
                    style={{ width: 90 }}
                >
                    Reset
                </Button>
            </div>
        ),
        filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) => record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()): null,
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: (text) => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text ? text.toString() : "Unknown"}
            />
        ),
    });

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = (clearFilters) => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    render() {
        const {noiseData} = this.props;
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
                onFilter: (value, record) => record.severity ? record.severity.indexOf(value) === 0 : false,
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
                dataIndex: 'locationName',
                // render: (text, record, index) => (<p>{record.locationName ? record.locationName : "Unknown"}</p>),
                ...this.getColumnSearchProps('locationName'),
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
                dataIndex: 'deviceModel',
                // render: (text, record, index) => (
                //     <p>
                //         {record.deviceModel ? record.deviceModel : "Unknown"}
                //     </p>),
                ...this.getColumnSearchProps('deviceModel'),
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
    }

}

export default TableView;