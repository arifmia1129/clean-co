import React from 'react';
import Banner from './Banner';
import EstimateForm from './EstimateForm';

const Home = () => {
    return (
        <div>
            <div>
                <Banner />
            </div>
            <div className='mt-[-40px] mb-10'>
                <EstimateForm />
            </div>
        </div>
    );
};

export default Home;