import React, { useEffect, useState } from 'react';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';

const Product = (props) => {
    const [bookMarks, setBookMarks] = useState([]);

    useEffect(() => {
        const storedBookMarks = JSON.parse(localStorage.getItem('book-marks')) ?? [];
        setBookMarks(storedBookMarks);
    }, []);

    const addBookMark = id => {
        const storedBookMarks = JSON.parse(localStorage.getItem('book-marks')) ?? [];
        let newBookMarks = [];
        const alreadyExits = storedBookMarks.find(bookMark => bookMark === id);
        if (alreadyExits) {
            newBookMarks = storedBookMarks.filter(bookMark => bookMark !== id);
        }
        else {
            newBookMarks = [...storedBookMarks, id];
        }
        console.log(newBookMarks);
        localStorage.setItem('book-marks', JSON.stringify(newBookMarks));
        setBookMarks(newBookMarks);
    }


    const { id, image, title, price } = props.product;
    return (
        <div className='bg-slate-50 shadow rounded p-8 flex flex-col justify-between relative'>
            <div>
                <img className='max-w-full mx-auto h-52 rounded mb-4' src={image} alt="" />
                <h3 className='text-xl font-semibold'>{title}</h3>
            </div>
            <div className='flex justify-between items-center mt-2'>
                <h4 className='text-xl font-semibold'>${price}</h4>
                <button className='bg-black text-white rounded p-2'>Buy Now</button>
            </div>

            {bookMarks.find(bookMark => bookMark == id) ?
                <FaBookmark onClick={() => addBookMark(id)} className='text-purple-800 text-3xl absolute top-3 right-3' /> :
                <FaRegBookmark onClick={() => addBookMark(id)} className='text-purple-800 text-3xl absolute top-3 right-3' />
            }
        </div>
    );
};

export default Product;