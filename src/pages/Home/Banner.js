import src from 'daisyui';
import React from 'react';
import img from "../../assets/images/bucketgirl.png";


const Banner = () => {
    return (
        <div class="hero bg-accent z-1 relative">
            <div class="hero-content flex-col-reverse lg:flex-row-reverse">
                <img src={img} class="max-w-sm rounded-lg w-[80vw] lg:w-[100vw]" alt='' />
                <div className='lg:pr-48'>
                    <p>Best Quality</p>
                    <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
                    <p class="py-6">Our all cleaning service is professional. So you can try with us. If you try with us please click under the button and follow instruction.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;