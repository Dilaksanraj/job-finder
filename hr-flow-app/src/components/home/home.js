import React, { useEffect } from 'react';
import { Button} from 'antd';
import { NavLink } from 'react-router-dom';

const HomePage = () => {

    return (
        <div className="relative h-screen flex items-center justify-center">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundColor: '#00cce0' }}
            >
                <div className='flex text-center'
                    style={{
                        backgroundImage: `url(https://hrflow-ai.imgix.net/backgrounds/main-spot.svg)`,
                        backgroundRepeat: 'no-repeat',
                        height: '33rem'
                    }}
                >

                </div>
            </div>
            <div className="absolute inset-0 bg-black opacity-0"></div>
            <div className="text-white text-center z-10">
                <h1 className="text-4xl font-bold mb-4">Welcome to Frontend Developer </h1>
                <p className="text-lg">HrFlowAi</p>
                <NavLink to="/job" activeClassName="active">
                    <Button type="primary" color='sucess'>Find my job</Button>
                </NavLink>
            </div>

        </div>
    )
};

export default HomePage;