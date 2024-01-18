import React, { useState } from 'react';
import { Table, Button, Modal, List, Avatar } from 'antd';
import { EyeOutlined } from '@ant-design/icons'
import { AppConst } from '../../../shared/App.const';

const JobListView = ({ jobs }) => {
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [job, setJob] = useState(jobs[0]);


    const handleChange = (pagination, filters, sorter) => {
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    const showModal = (record) => {
        console.log('data', record);
        setJob(record)
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const description = (item) => {
        return (
          <div>
            <div className='text-justify'>
              {item.summary || 'No description'}
            </div>

            <div>
              <p><span className='font-bold'>Skills:</span> {item.skills}</p>
              <p><span className='font-bold'>Location: </span> {item.location}</p>
              <p><span className='font-bold'>Job Type: </span>{item.jobType}</p>
              <p><span className='font-bold'>Category: </span>{item.category}</p>
              <p><span className='font-bold'>Creation Date: </span>{item.creationDate}</p>
              <p><span className='font-bold'>Start Date: </span>{item.creationDate}</p>
              <p><span className='font-bold'>Company: </span>{item.company}</p>
              <p><span className='font-bold'>Language: </span>{item.language}</p>
            </div>
          </div>

        )
      }
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Created On',
            dataIndex: 'created_date',
            key: 'created_date',
            sorter: (a, b) => new Date(a.created_date) - new Date(b.created_date),
            sortOrder: sortedInfo.columnKey === 'created_date' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            filters: AppConst.jobCategorie.map(category => ({
                ...category,
                text: category.label,
            })),
            filteredValue: filteredInfo.category || null,
            onFilter: (value, record) => record.category.includes(value),
            sorter: (a, b) => a.category.length - b.category.length,
            sortOrder: sortedInfo.columnKey === 'category' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'View',
            dataIndex: '',
            key: 'x',
            width: '150px',
            render: (_, record) =>
                <Button onClick={()=> showModal(record)}>
                    <EyeOutlined />
                    view
                </Button>

        }
    ];
    return (
        <>
            <Table pagination={false} columns={columns} dataSource={jobs} onChange={handleChange} />

            <Modal
                title="Jobs Information"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1000}>
                <div>

                    <div className='text-center'>
                        <h1>
                            {job?.name}
                        </h1>

                    </div>

                    <List
                        itemLayout="horizontal"
                        dataSource={[job]}
                        renderItem={(item, index) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                                    title={<a href="https://ant.design">{item.name}</a>}
                                    description={description(item)}
                                />
                            </List.Item>
                        )}
                    />

                </div>
            </Modal>
        </>
    );
};
export default JobListView;