import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Header/Navbar'
import { useSelector } from 'react-redux';
import Modal from '../components/Modal/Modal';

const HomeLayout = () => {
  const {open, data} = useSelector(state => state.modal)

  return (
    <>
      <Navbar />
      {open && <Modal name={open} data={data}/>}
      <Outlet />
    </>
  )
}

export default HomeLayout