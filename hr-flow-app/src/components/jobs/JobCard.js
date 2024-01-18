// JobCard.js
import React, { useState } from 'react';
import { EyeOutlined, EllipsisOutlined, SettingOutlined, ExpandAltOutlined } from '@ant-design/icons';
import { Tooltip, Modal, Avatar, List, Card } from 'antd';
const JobCard = ({ job, isExpandAll }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  const description = (item) => {
    return (
      <div>
        <div className='text-justify'>
          {item.summary || 'No description'}
        </div>

        <div>
          <p><span className='font-bold'>Skills:</span> {job.skills}</p>
          <p><span className='font-bold'>Location: </span> {job.location}</p>
          <p><span className='font-bold'>Job Type: </span>{job.jobType}</p>
          <p><span className='font-bold'>Category: </span>{job.category}</p>
          <p><span className='font-bold'>Creation Date: </span>{job.creationDate}</p>
          <p><span className='font-bold'>Start Date: </span>{job.creationDate}</p>
          <p><span className='font-bold'>Company: </span>{job.company}</p>
          <p><span className='font-bold'>Language: </span>{job.language}</p>
        </div>
      </div>

    )
  }

  const name = (job) => {
    return <div className='text-center'>
      {job.name}
    </div>
  }

  return (
    // <div className="border rounded-lg p-4 mb-4 bg-green-200 m-2 text-sm shadow-xl">
    //   <div className='h-fit'>
    //     <h3 onClick={showModal} className='text-center text-xxl cursor-pointer underline text-blue-400'>{job.name}</h3>
    //     <div className='flex' style={{ justifyContent: 'space-between' }}>

    //       <p className='mr-1'><span className='font-bold'>Creation Date: </span>{job.creationDate}</p>
    //       <span className='flex justify-end text-xl'>
    //         <Tooltip title="Expand card">
    //           <ExpandAltOutlined onClick={toggleExpand} className="cursor-pointer" />
    //         </Tooltip>
    //       </span>
    //     </div>
    //   </div>

    //   {(isExpanded || isExpandAll) && (
    //     <div className="mt-2">
    //       <p > <span className='font-bold'>Description</span>: {job.summary.slice(0, 100)}</p>
    //       <p><span className='font-bold'>Skills:</span> {job.skills}</p>
    //       <p><span className='font-bold'>Location: </span> {job.location}</p>
    //       <p><span className='font-bold'>Job Type: </span>{job.jobType}</p>
    //       <p><span className='font-bold'>Category: </span>{job.category}</p>
    //       <p><span className='font-bold'>Company: </span>{job.company}</p>
    //     </div>
    //   )}

    //   <Modal
    //     title="Jobs Information"
    //     open={isModalOpen}
    //     onOk={handleOk}
    //     onCancel={handleCancel}
    //     width={1000}>
    //     <div>

    //       <div className='text-center'>
    //         <h1>
    //           {job.name}
    //         </h1>

    //       </div>

    //       <List
    //         itemLayout="horizontal"
    //         dataSource={[job]}
    //         renderItem={(item, index) => (
    //           <List.Item>
    //             <List.Item.Meta
    //               avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
    //               title={<a href="https://ant.design">{item.name}</a>}
    //               description={description(item)}
    //             />
    //           </List.Item>
    //         )}
    //       />

    //     </div>
    //   </Modal>

    // </div>

    // <div className='m-2'>
    //   <Card size='small'
    //   style={{backgroundColor:'#bbf7d0'}}
    //     className='shadow-xl'
    //     title={name(job)}
    //     actions={[
    //       <EyeOutlined onClick={showModal} key="edit" />
    //     ]}
    //   >
    //     <div className='flex' style={{ justifyContent: 'space-between' }}>

    //       <p className='mr-1'><span className='font-bold'>Creation Date: </span>{job.creationDate}</p>
    //       <span className='flex justify-end text-xl'>
    //         <Tooltip title="Expand card">
    //           <ExpandAltOutlined onClick={toggleExpand} className="cursor-pointer" />
    //         </Tooltip>
    //       </span>
    //     </div>

    //     {(isExpanded || isExpandAll) && (
    //       <div className="mt-2">
    //         <p > <span className='font-bold'>Description</span>: {job.summary.slice(0, 100)}</p>
    //         <p><span className='font-bold'>Skills:</span> {job.skills}</p>
    //         <p><span className='font-bold'>Location: </span> {job.location}</p>
    //         <p><span className='font-bold'>Job Type: </span>{job.jobType}</p>
    //         <p><span className='font-bold'>Category: </span>{job.category}</p>
    //         <p><span className='font-bold'>Company: </span>{job.company}</p>
    //       </div>
    //     )}

    //   </Card>

    //   <Modal
    //     title="Jobs Information"
    //     open={isModalOpen}
    //     onOk={handleOk}
    //     onCancel={handleCancel}
    //     width={1000}>
    //     <div>

    //       <div className='text-center'>
    //         <h1>
    //           {job.name}
    //         </h1>

    //       </div>

    //       <List
    //         itemLayout="horizontal"
    //         dataSource={[job]}
    //         renderItem={(item, index) => (
    //           <List.Item>
    //             <List.Item.Meta
    //               avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
    //               title={<a href="https://ant.design">{item.name}</a>}
    //               description={description(item)}
    //             />
    //           </List.Item>
    //         )}
    //       />

    //     </div>
    //   </Modal>

    // </div>
    <>
      <div
      style={{backgroundColor:'rgb(0 150 136 / 41%)', minHeight:'250px', transition: 'max-height 0.3s ease-out', height:"auto", maxHeight:'550px'}}
      className="m-2 w-full max-w-sm border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end px-4 pt-4">

        </div>
        <div className="flex flex-col items-center pb-10">
          <h5 onClick={showModal} className=" cursor-pointer underline text-center mb-1 text-xl font-medium text-blue-900 dark:text-white">
            {job.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            <p className='mr-1'><span className='font-bold'>Creation Date: </span>{job.creationDate}</p>
          </span>
          <div className="mt-4 md:mt-6">

            <div className='m-2'>
              {(isExpanded || isExpandAll) && (
                <div className="mt-2">
                  <p > <span className='font-bold'>Description</span>: {job.summary.slice(0, 100)}</p>
                  <p><span className='font-bold'>Location: </span> {job.location}</p>
                  <p><span className='font-bold'>Job Type: </span>{job.jobType}</p>
                  <p><span className='font-bold'>Category: </span>{job.category}</p>
                  <p><span className='font-bold'>Company: </span>{job.company}</p>

                  <div className='text-md'>
                  {job.skills}
                  </div>
                </div>
              )}
            </div>
            <div className='text-center'>
              <a href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-blue rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={toggleExpand}>{(isExpanded ? 'See less' : 'See more')}</a>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Jobs Information"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}>
        <div>

          <div className='text-center'>
            <h1>
              {job.name}
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

export default JobCard;
