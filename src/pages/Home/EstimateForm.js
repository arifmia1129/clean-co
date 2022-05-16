import React from 'react';

const EstimateForm = () => {
    return (
        <div className='lg:mx-48 bg-base-200 mt-[-50px] z-2 relative p-10 rounded-lg'>
            <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">Theme</button>
            <h1 className='text-xl text-primary my-5'>Get Free Estimate</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            </div>
            <button class="btn btn-primary mt-5">REQUEST A QUOTE</button>
        </div>
    );
};

export default EstimateForm;