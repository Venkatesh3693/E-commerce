import React from 'react'

const Modal = ({ isModalopen, setIsModalopen, children }) => {
    if (!isModalopen) return null;
    return (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50'>
            <div className='bg-white rounded-lg p-6 w-full max-w-md'>
                <button className='absolute top-4 right-4 text-gray-300 text-3xl' onClick={() => setIsModalopen(false)}>&times;</button>
                {children}
            </div>
        </div>
    );
}

export default Modal
