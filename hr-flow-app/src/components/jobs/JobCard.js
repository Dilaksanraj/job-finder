// JobCard.js
import React, { useState } from 'react';
import { EyeOutlined, EllipsisOutlined, SettingOutlined, CalendarOutlined } from '@ant-design/icons';
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
        <div classNameName='text-justify'>
          {item.summary || 'No description'}
        </div>

        <div>
          <p><span classNameName='font-bold'>Skills:</span> {job.skills}</p>
          <p><span classNameName='font-bold'>Location: </span> {job.location}</p>
          <p><span classNameName='font-bold'>Job Type: </span>{job.jobType}</p>
          <p><span classNameName='font-bold'>Category: </span>{job.category}</p>
          <p><span classNameName='font-bold'>Creation Date: </span>{job.creationDate}</p>
          <p><span classNameName='font-bold'>Start Date: </span>{job.creationDate}</p>
          <p><span classNameName='font-bold'>Company: </span>{job.company}</p>
          <p><span classNameName='font-bold'>Language: </span>{job.language}</p>
        </div>
      </div>

    )
  }

  const name = (job) => {
    return <div classNameName='text-center'>
      {job.name}
    </div>
  }

  return (
    // <div classNameName="border rounded-lg p-4 mb-4 bg-green-200 m-2 text-sm shadow-xl">
    //   <div classNameName='h-fit'>
    //     <h3 onClick={showModal} classNameName='text-center text-xxl cursor-pointer underline text-blue-400'>{job.name}</h3>
    //     <div classNameName='flex' style={{ justifyContent: 'space-between' }}>

    //       <p classNameName='mr-1'><span classNameName='font-bold'>Creation Date: </span>{job.creationDate}</p>
    //       <span classNameName='flex justify-end text-xl'>
    //         <Tooltip title="Expand card">
    //           <ExpandAltOutlined onClick={toggleExpand} classNameName="cursor-pointer" />
    //         </Tooltip>
    //       </span>
    //     </div>
    //   </div>

    //   {(isExpanded || isExpandAll) && (
    //     <div classNameName="mt-2">
    //       <p > <span classNameName='font-bold'>Description</span>: {job.summary.slice(0, 100)}</p>
    //       <p><span classNameName='font-bold'>Skills:</span> {job.skills}</p>
    //       <p><span classNameName='font-bold'>Location: </span> {job.location}</p>
    //       <p><span classNameName='font-bold'>Job Type: </span>{job.jobType}</p>
    //       <p><span classNameName='font-bold'>Category: </span>{job.category}</p>
    //       <p><span classNameName='font-bold'>Company: </span>{job.company}</p>
    //     </div>
    //   )}

    //   <Modal
    //     title="Jobs Information"
    //     open={isModalOpen}
    //     onOk={handleOk}
    //     onCancel={handleCancel}
    //     width={1000}>
    //     <div>

    //       <div classNameName='text-center'>
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

    // <div classNameName='m-2'>
    //   <Card size='small'
    //   style={{backgroundColor:'#bbf7d0'}}
    //     classNameName='shadow-xl'
    //     title={name(job)}
    //     actions={[
    //       <EyeOutlined onClick={showModal} key="edit" />
    //     ]}
    //   >
    //     <div classNameName='flex' style={{ justifyContent: 'space-between' }}>

    //       <p classNameName='mr-1'><span classNameName='font-bold'>Creation Date: </span>{job.creationDate}</p>
    //       <span classNameName='flex justify-end text-xl'>
    //         <Tooltip title="Expand card">
    //           <ExpandAltOutlined onClick={toggleExpand} classNameName="cursor-pointer" />
    //         </Tooltip>
    //       </span>
    //     </div>

    //     {(isExpanded || isExpandAll) && (
    //       <div classNameName="mt-2">
    //         <p > <span classNameName='font-bold'>Description</span>: {job.summary.slice(0, 100)}</p>
    //         <p><span classNameName='font-bold'>Skills:</span> {job.skills}</p>
    //         <p><span classNameName='font-bold'>Location: </span> {job.location}</p>
    //         <p><span classNameName='font-bold'>Job Type: </span>{job.jobType}</p>
    //         <p><span classNameName='font-bold'>Category: </span>{job.category}</p>
    //         <p><span classNameName='font-bold'>Company: </span>{job.company}</p>
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

    //       <div classNameName='text-center'>
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
      {/* <div
      style={{backgroundColor:'rgb(0 150 136 / 41%)', minHeight:'250px', transition: 'max-height 0.3s ease-out', height:"auto", maxHeight:'550px'}}
      classNameName=" m-2 w-full max-w-sm border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <div classNameName="flex justify-end px-4 pt-4">

        </div>
        <div classNameName="flex flex-col items-center pb-10">
          <h5 onClick={showModal} classNameName=" cursor-pointer underline text-center mb-1 text-xl font-medium text-blue-900 dark:text-white">
            {job.name}
          </h5>
          <span classNameName="text-sm text-gray-500 dark:text-gray-400">
            <p classNameName='mr-1'><span classNameName='font-bold'>Creation Date: </span>{job.creationDate}</p>
          </span>
          <div classNameName="mt-4 md:mt-6">

            <div classNameName='m-2'>
              {(isExpanded || isExpandAll) && (
                <div classNameName="mt-2">
                  <p > <span classNameName='font-bold'>Description</span>: {job.summary.slice(0, 100)}</p>
                  <p><span classNameName='font-bold'>Location: </span> {job.location}</p>
                  <p><span classNameName='font-bold'>Job Type: </span>{job.jobType}</p>
                  <p><span classNameName='font-bold'>Category: </span>{job.category}</p>
                  <p><span classNameName='font-bold'>Company: </span>{job.company}</p>

                  <div classNameName='text-md'>
                  {job.skills}
                  </div>
                </div>
              )}
            </div>
            <div classNameName='text-center'>
              <a href="#"
                classNameName="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-blue rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={toggleExpand}>{(isExpanded ? 'See less' : 'See more')}</a>
            </div>
          </div>
        </div>
      </div> */}

      <div className="h-full">
        {/* <!-- Card --> */}
        <div className="max-w-xs mx-auto m-4">
          <div className="relative flex flex-col h-full bg-indigo-600 shadow-lg rounded-lg shadow-lg p-5">
            {/* <!-- Popular badge --> */}
            <div className="absolute -top-3 right-5">
              <div className="text-xs inline-flex font-semibold bg-green-100 text-green-600 rounded-full text-center px-3 py-1.5 shadow-sm transform -translate-y-1/2">{job.creationDate}</div>
            </div>
            {/* <!-- Card header --> */}
            <header className="pb-4 mb-4 border-b border-indigo-200 border-opacity-30 text-center">
              {/* <!-- Logo --> */}
              <div className="mb-2">
                <svg width="42" height="44" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <linearGradient x1="27.515%" y1="0%" x2="59.658%" y2="100%" id="b">
                      <stop stop-color="#5EEAD4" offset="0%" />
                      <stop stop-color="#2DD4BF" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="67.338%" y1="82.466%" x2="4.807%" y2="15.884%" id="c">
                      <stop stop-color="#F0FDFA" stop-opacity=".12" offset="0%" />
                      <stop stop-color="#F0FDFA" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="47.38%" y1="24.752%" x2="58.769%" y2="81.336%" id="e">
                      <stop stop-color="#0F766E" stop-opacity=".24" offset="0%" />
                      <stop stop-color="#0D9488" stop-opacity="0" offset="100%" />
                    </linearGradient>
                    <path id="a" d="M25.015 44 0 29.437 10.654 0l25.17 4.338L42 26.648z" />
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <mask id="d" fill="#fff">
                      <use xlinkHref="#a" />
                    </mask>
                    <use fill="url(#b)" xlinkHref="#a" />
                    <path d="m10.281-.584 23.651 20.647 14.84 11.177 7.884-14.748-.927-9.78-11.44-7.296-8.81-3.26L20.02-4.62 10.281-.584Z" fill="url(#c)" style={{ mixBlendMode: 'overlay' }} mask="url(#d)" />
                    <path d="M43.015 17.16-1.969 29.974l6.647 11.579c6.184 3.808 9.481 5.867 9.894 6.175.412.31 7.729.31 21.95 0l7.884-9.88-1.391-20.688Z" fill="url(#e)" style={{ mixBlendMode: "multiply" }} mask="url(#d)" />
                    <path fill-opacity=".32" fill="#F0FDFA" style={{ mixBlendMode: 'overlay' }} mask="url(#d)" d="m36.18 3.3-2.17 16.714L23.625 48.18l20.15-5.107 5.89-11.297 1.085-18.881z" />
                  </g>
                </svg>
              </div>
              {/* <!-- Product name --> */}
              <h3 onClick={showModal} className="underline h-12 text-xl font-extrabold text-indigo-50 leading-snug mb-2 cursor-pointer">{job.name}</h3>
              {/* <!-- Price --> */}
              <div className="font-extrabold mb-1">
                <span class="text-xl text-indigo-200 m-2">
                  <CalendarOutlined />
                </span>

                <span className="text-lg text-indigo-50">{job.creationDate}</span></div>
              {/* <!-- Description --> */}
            </header>
            {/* <!-- Features list --> */}

            {(isExpanded || isExpandAll) && (
              <>
                <ul className="text-indigo-200 flex-grow mb-6 m-0">
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <p > <span classNameName='font-bold'>Description</span>: {job.summary.slice(0, 100)}</p>

                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <p><span classNameName='font-bold'>Location: </span> {job.location}</p>

                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>

                    <p><span classNameName='font-bold'>Job Type: </span>{job.jobType}</p>

                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <p><span classNameName='font-bold'>Category: </span>{job.category}</p>

                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <p><span classNameName='font-bold'>Company: </span>{job.company}</p>
                  </li>


                </ul>
                <div className='text-md mb-12 text-white mb-24 text-white'>
                  {job.skills}
                </div>
              </>
            )}
            <button className="cursor-pointer font-semibold text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out w-full bg-white hover:bg-indigo-500 hover:text-white text-indigo-500 focus:outline-none focus-visible:ring-2" onClick={toggleExpand}>{(isExpanded ? 'See less' : 'See more')}</button>
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

          <div classNameName='text-center'>
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
