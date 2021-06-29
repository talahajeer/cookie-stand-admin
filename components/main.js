
import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Stand from './stand';

export default function CookieStandForm() {
    const [stand, setStand] = React.useState({
        location : 'new location..',
        min : 0,
        max : 0,
        avg : 0,
        condition : false
    
    })

    const handelSubmit = (e) =>{
        e.preventDefault()
                setStand({
                    location :e.target.location.value,
                    min :e.target.min.value,
                    max :e.target.max.value,
                    avg :e.target.avg.value,
                    condition : true
                }) 
    }
    return (
        <form onSubmit={handelSubmit} className='bg-green-200 p-8 rounded-3xl '>
            <h2 className='font-medium text-center pb-3 text-xl' >Create Cookie Stand</h2>
            <div>
                <label className='px-5'>Location</label>
                <input className="w-10/12" type="text" placeholder={stand.location} id = 'location'/>
            </div >

                <label className='p-3'>Minimum Customers per Hour</label>
                <input className=' mx-3' placeholder={stand.min} name="min" type="number" id = 'min'/>
        
                <label className='p-3'>Maximum Customers per Hour</label>
                <input className=' mx-3' placeholder={stand.max} name="max" type="number" id = 'max' />
           
                <label className='p-3'>Average Cookies per Sale</label>
                <input className=' mx-3' placeholder={stand.avg} name="avg" type="number" id = 'avg'/>

                <button className='text-white mt-10 bg-green-500 px-10 py-3 rounded-xl hover:text-green-600 hover:bg-green-100 ' type="submit">Create</button>
          
        </form>
    );
}