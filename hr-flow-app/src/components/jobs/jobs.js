import React, { useState, useEffect } from "react";
import { Breadcrumb, Layout, Modal, theme, Pagination, Empty, Button, FloatButton, Row, Col, Radio } from "antd";
import { SettingOutlined } from '@ant-design/icons';
import { ArrowLeftOutlined } from '@ant-design/icons'
import { getAllJobList } from "../../service/jobs.service";
import JobFilter from "./filter.job";
import JobList from "./job.list";
import { Link } from "react-router-dom";
import { AppConst } from "../../shared/App.const";
import JobListView from "./view/job.list.view";

const { Content } = Layout;
const pageSizeOptions = [10]


const Job = () => {

    const [filterJobs, setFilterJobs] = useState([]);
    const [jobsData, setJobsData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [current, setCurrent] = useState(1);
    const [total, setTotal] = useState(0);
    const [count, setCount] = useState(10);
    const [isExpandAll, setIsExpandAll] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewAs , setViewAs] = useState('GRID');
    const [filter, setFilter] = useState(
        localStorage.getItem(AppConst.localStorage.filterKey) ?
            JSON.parse(localStorage.getItem(AppConst.localStorage.filterKey)) : { name: '', category: '', sort: '' } //get saved filter value from local
    )

    useEffect(() => {
        setIsLoading(true);
        const pageProps = {
            page: current,
            limit: count
        }
        const getJoblist = async () => {
            const jobs = await getAllJobList(pageProps);
            setJobsData(jobs?.data);
            setFilterJobs(jobs?.data);
            setTotal(jobs?.paginationProps.total);
            setCount(jobs?.paginationProps.count);

            setTimeout(() => {
                setIsLoading(false)
            }, 2000);
        };

        // get filter value from local storage
        if (localStorage.getItem(AppConst.localStorage.filterKey)) {
            setFilter(JSON.parse(localStorage.getItem(AppConst.localStorage.filterKey)));
        }

        getJoblist();
        // handleSearch(JSON.parse(localStorage.getItem(AppConst.localStorage.filterKey)), true) // to filter job based on the saved filter props
    }, [current, count]);

    const updateJobsOrder = (newJobs) => {
        setFilterJobs(newJobs);
      };

    const handleSearch = (searchValue, isInitial = false) => {
        //start spinner
        setIsLoading(true);
        let filteredJobsData = jobsData; //each serach reset the filter jobs

        isInitial ? setFilter(filter) : setFilter(searchValue)
        console.log(filter);

        if (searchValue?.name !== '') {
            filteredJobsData = filteredJobsData.filter(job => {
                return job.name.toLowerCase().includes(searchValue.name.toLowerCase()) //check if job contains serach name
            });
        }

        if (searchValue?.category !== '') {
            filteredJobsData = filteredJobsData.filter((job) => {
                return job.category.toLowerCase().includes(searchValue.category.toLowerCase()) //check if job contains serach category name
            })
        }
        setFilterJobs([]);

        //sort filtered job list
        setTimeout(() => {
            if (searchValue?.sort === 'name') {
                setFilterJobs(sortJobsByName(filteredJobsData));
            }
            if (searchValue?.sort === 'category') {
                setFilterJobs(sortJobsByCategory(filteredJobsData));
            }
            if (searchValue?.sort === 'creationDate') {
                setFilterJobs(sortJobsByCreationDate(filteredJobsData));
            }

            setTotal(filterJobs.length)
            setFilterJobs(filteredJobsData);
            setIsLoading(false);

        }, 1000);
        console.log(filteredJobsData);
    };

    const isExpandAllCard = (value) => {
        console.log(value);
        setIsExpandAll(value);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        localStorage.setItem(AppConst.localStorage.filterKey, JSON.stringify(filter))
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onChangePagination = (page) => {
        setIsLoading(true)

        const pageProps = {
            page: page,
            limit: 10
        }
        const joblist = async () => {
            const jobs = await getAllJobList(pageProps);
            setJobsData(jobs?.data);
            setFilterJobs(jobs?.data);
            setTotal(jobs?.paginationProps.total);
            setCount(jobs?.paginationProps.count);
            setTimeout(() => {
                setIsLoading(false);
                // handleSearch(filter, false)
            }, 1000);
        };
        joblist();
        setCurrent(page);

    };

    const onShowSizeChange = (page, pageSize) => {
        console.log(current, pageSize);

        setIsLoading(true)

        const pageProps = {
            page: page,
            limit: pageSize
        }
        const joblist = async () => {
            const jobs = await getAllJobList(pageProps);
            setJobsData(jobs?.data);
            setFilterJobs(jobs?.data);
            setTotal(jobs?.paginationProps.total);
            setCount(jobs?.paginationProps.count);
            setTimeout(() => {
                setIsLoading(false)
            }, 1000);
        };
        joblist();
        setCurrent(page);
    };

    const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

    const sortJobsByName = (jobs) => {
        return jobs.sort((a, b) => a.name.localeCompare(b.name));
    };
    const sortJobsByCategory = (jobs) => {
        return jobs.sort((a, b) => a.category.localeCompare(b.category));
    };
    const sortJobsByCreationDate = (jobs) => {
        return jobs.sort((a, b) => new Date(a.creationDate) - new Date(b.creationDate));
    };
    const onChangeRadioBtn = ({target: {value}})=>{
        setViewAs(value)
    }

    return (
        <Layout>
            {isLoading && <div className="loader-container">
                <div className="spinner"></div>
            </div>}
            <Content className="md:m-24 m-6 px-0 py-0">
                <div className="flex">

                    <Link to="/">
                        <Button
                            type="link"
                            className="">
                            <ArrowLeftOutlined />
                            go back
                        </Button>
                    </Link>
                    <Breadcrumb
                        style={{ margin: "2px 0" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Jobs</Breadcrumb.Item>
                    </Breadcrumb>

                </div>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <JobFilter onSearch={handleSearch} isExpandAll={isExpandAllCard} filterProps={filter}  ></JobFilter>
                    <Row gutter={16}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="gutter-row" span={6}>
                            <div className='text-center mb-10 md:block hidden '>
                                <Radio.Group onChange={onChangeRadioBtn} defaultValue="GRID" buttonStyle="solid">
                                    <Radio.Button  value="GRID">Grid</Radio.Button>
                                    <Radio.Button value="LIST">List</Radio.Button>
                                </Radio.Group>
                            </div>
                        </Col>
                    </Row>
                    {(filterJobs && viewAs === 'GRID'?
                    <JobList jobs={filterJobs} isExpandAll={isExpandAll} updateJobsOrder={updateJobsOrder} /> : (<JobListView jobs = {filterJobs} />)
                    )}
                    {(filterJobs?.length === 0 && viewAs === 'GRID') && <Empty />}

                    <Pagination
                        className="mt-24"
                        responsive
                        showSizeChanger
                        onChange={onChangePagination}
                        onShowSizeChange={onShowSizeChange}
                        defaultCurrent={1}
                        current={current}
                        total={total}
                        pageSize={10}
                        defaultPageSize={10}
                        pageSizeOptions={pageSizeOptions}
                    />
                </div>
                <FloatButton
                    onClick={showModal}
                    icon={<SettingOutlined />}
                    type="primary" style={{ right: 24 }} />

                <Modal
                    title="filter setting"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="back" onClick={handleCancel}>
                            Cancel
                        </Button>,
                        <Button key="submit" type="primary" onClick={handleOk}>
                            Save
                        </Button>
                    ]}>
                    <div>
                        <span className="">
                            key: <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                {filter.name}
                            </span>
                        </span>
                    </div>

                    <div>
                        <span>
                            category: <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                {filter.category}
                            </span>
                        </span>
                    </div>

                    <div>
                        <span>
                            sort by: <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                {filter.sort}
                            </span>
                        </span>
                    </div>


                </Modal>

            </Content>
        </Layout>
    );
};
export default Job;
