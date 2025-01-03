import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Modal from './Modal'
import Login from './Login'
import Register from './Register'
import { setSearchTerm } from '../redux/productSlice'


const Navbar = () => {
    const [isModalopen, setIsModalopen] = useState(false)
    const [isLogin, setIsLogin] = useState(true)
    const products = useSelector((state) => state.cart.products)
    const [search,setSearch] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSearch = (e) => {
         e.preventDefault()
         dispatch(setSearchTerm(search))
         navigate('/filter-data')
          

    }

    const handleModalOpen = (isLogin) => {
        setIsLogin(isLogin)
        setIsModalopen(true)
    }

    return (
        <nav className="bg-white shadow-md">
            <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
                <div className='text-2xl font-bold'>
                    <Link to="/">Online-KADAI</Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form onSubmit={handleSearch} >
                        <input type="text" placeholder="Search Product" className='w-full border py-2 px-4'
                        onChange={(e) => setSearch(e.target.value)}
                        />
                        <FaSearch className='absolute top-3 right-3 text-red-500' />
                    </form>
                </div>
                <div className='flex items-center space-x-4'>
                    <Link to="/cart" className='relative'>
                        <FaShoppingCart className='text-lg' />
                        {products.length > 0 && (
                            <span className='absolute -top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex items-center justify-center text-white'>
                                {products.length}
                            </span>
                        )}
                    </Link>
                    <button className='hidden md:block' onClick={() => handleModalOpen(true)}>
                        Login | Register
                    </button>
                    <button className='block md:hidden' onClick={() => handleModalOpen(true)}>
                        <FaUser />
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
                <Link to="/" className='hover:underline'>
                    Home
                </Link>
                <Link to="/shop" className='hover:underline'>
                    SHOP
                </Link>
                <Link to="/" className='hover:underline'>
                    Contact
                </Link>
                <Link to="/" className='hover:underline'>
                    About
                </Link>
            </div>
            <Modal isModalopen={isModalopen} setIsModalopen={setIsModalopen}>
                {isLogin ? <Login onRegisterClick={() => setIsLogin(false)} /> : <Register onLoginClick={() => setIsLogin(true)} />}
            </Modal>
        </nav>
    )
}

export default Navbar
