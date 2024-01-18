import React, { useEffect, useState } from 'react';
import { Col, Divider, Row } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Switch, Tooltip } from 'antd';
import { AppConst } from '../../shared/App.const';

import '../css/job.css'

export default function JobFilter({ onSearch, isExpandAll, filterProps }) {

    const [filterForm] = Form.useForm();
    const [searchValue, setSearchValue] = useState(filterProps.name);
    const [categoriesValue, setCategoriesValue] = useState(filterProps.category);
    const [sortValue, setsortValue] = useState(filterProps.sort);

    useEffect(() => {
        const onFill = () => {
            filterForm.setFieldsValue({
              key: filterProps.name,
              categories: filterProps.category,
              sort:filterProps.sort
            });
          };

        onFill();
    }, [filterForm]);

    let sortByPros = AppConst.jobsSortByProps;
    let jobCategorie = AppConst.jobCategorie
    const handleChange = (type) => (value) => {

        if (type === 'SEARCH') {
            setSearchValue(value.target.value)
        }
        if (type === 'CATEGORY') {
            setCategoriesValue(value ? value : '')
        }
        if (type === 'SORT') {
            setsortValue(value ? value : '')
        }

    }

    const reset = () => {
        console.log('reset');
        filterForm.resetFields();
        setSearchValue('');
        setCategoriesValue('');
        setsortValue('');
        // handleSearch();
        // setTimeout(() => {
        //     handleSearch();
        // }, 500);
    }

    const handleSearch = () => {
        console.log(filterProps, 'filter props');
        const serachFormValue = {
            name: searchValue,
            category: categoriesValue,
            sort: sortValue
        }
        onSearch(serachFormValue)
    }

    const onChangeSwitch = (checked) => {
        isExpandAll(checked)
    };

    return (
        <div className="text-center md:pt-6">
            <Form
                name="wrap"
                labelAlign="left"
                labelWrap
                form={filterForm}
                // initialValues={initialValues}
                colon={false} >

                <Row gutter={16}>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8} className="gutter-row" span={6}>
                        <div className='text-center'>
                            <Form.Item label="key word" name="key">
                                <Input
                                    placeholder='frontend developerr'
                                    allowClear
                                    onChange={handleChange('SEARCH')}
                                    value={searchValue} />
                            </Form.Item>

                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8} className="gutter-row" span={6}>
                        <div >
                            <Form.Item label="categories" name="categories">

                                <Select
                                    allowClear
                                    value={categoriesValue}
                                    onChange={handleChange('CATEGORY')}
                                    showSearch
                                    placeholder="Search to Select"
                                    optionFilterProp="children"
                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={jobCategorie}
                                />
                            </Form.Item>

                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8} className="gutter-row" span={6}>
                        <div >
                            <Form.Item label="sort by" name="sort">
                                <Select
                                    allowClear
                                    value={sortValue}
                                    onChange={handleChange('SORT')}
                                    className='w-f'
                                    showSearch
                                    placeholder="sort by"
                                    optionFilterProp="children"
                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={sortByPros}
                                />
                            </Form.Item>

                        </div>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col xs={24} sm={24} md={24} lg={10} xl={10} className="gutter-row" span={6}>

                    </Col>
                    <Col xs={24} sm={24} md={24} lg={14} xl={14} className="gutter-row" span={6}>
                        <div className='md:float-right text-center'>
                            <label>
                                expand all
                            </label>
                            <Tooltip title="Expand all card">
                                <Switch
                                    onChange={onChangeSwitch}
                                    className='m-2'
                                    checkedChildren="Yes"
                                    unCheckedChildren="No" />
                            </Tooltip>

                            <Tooltip title="Reset all filter">
                                <Button type="primary"
                                    onClick={reset}
                                    danger
                                    // disabled={isFormHasValue}
                                    icon={<CloseOutlined />}>
                                    Reset
                                </Button>
                            </Tooltip>


                            <Tooltip title="Get Job list">
                                <Button
                                    onClick={handleSearch}
                                    className='m-2'
                                    type="primary"
                                    // disabled={isFormHasValue}
                                    icon={<SearchOutlined />}>
                                    Search
                                </Button>
                            </Tooltip>
                        </div>
                    </Col>
                </Row>

                <Divider></Divider>
            </Form>


        </div>
    )
}

