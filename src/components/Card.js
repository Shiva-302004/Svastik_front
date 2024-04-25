import React from 'react'
import "./styles/Profile.css"
const Card = ({ Name, OrderId, address, phoneNo, pincode, product, referenceNo, status }) => {
    return (
        <div className='w-[89vw] h-[300px] md:w-[85vw]  lg:w-[55vw] border border-slate-400 mt-2 rounded-lg px-2 py-3 text-sm'>
            <div className='flex flex-col sm:flex-row  justify-around'>
                <div className=' flex flex-col'>
                    <div className='flex mt-1'><span className='font-bold mr-2 '>CoustmerName:</span>{Name}</div>
                    <div className='flex mt-1'><span className='font-bold mr-2 '>OrderId:</span>{OrderId}</div>
                    <div className='flex mt-1'><span className='font-bold mr-2 '>Address:</span>{address},{pincode}</div>
                    <div className='flex'><span className='font-bold mr-2 '>PhoneNo</span>{phoneNo}</div>
                </div>
                <div className=' flex flex-col mr-2'>
                    <div className='flex mt-1'><span className='font-bold mr-2 '>ReferenceNo:</span>{referenceNo}</div>
                    <div className='flex mt-1'><span className='font-bold mr-2 '>Product:</span>
                        <div className='flex flex-col'>
                            {product.map((item,id) => {
                                return <div key={id} className='flex '>
                                    <div className='flex'><span className=' mr-2 '>{item.Title}</span>{item.Count}</div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className='flex mt-1'><span className='font-bold mr-2'>Status:</span><span className={`${status==="pending"||status==="processing"?"bg-yellow-300 rounded-md p-1 capitalize":""} ${status==="shipped"?"bg-orange-300 rounded-md p-1 capitalize":""} ${status==="delivered"?"bg-green-300 rounded-md p-1 capitalize":""}`}>{status}</span></div>
                    
                </div>
            </div>



        </div>
    )
}

export default Card