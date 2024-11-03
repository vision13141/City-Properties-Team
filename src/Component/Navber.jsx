import React, { useContext, useState } from 'react'
import logo from '../assets/Image/footlogo.png'
import Container from './Container'
import List from './List'
import { Link } from 'react-router-dom'
import { BsCartPlusFill } from "react-icons/bs";
import OrgContext from '../Context/OrgContext'



const Navber = () => {

    let menu = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Properties",
            path: "/Properties",
        },
        {
            name: "Agents",
            path: "/agents",
        },
        {
            name: "Blog",
            path: "/blog",
        },
        {
            name: "Contact",
            path: "/contact",
        }
    ]

    const { cart } = useContext(OrgContext)
    

    return (
        <div>
            <Container className={`py-[30px] flex items-center justify-between`}>
                <img src={logo} alt="" />

                <div className="w-[715px] items-center flex justify-between">
                    <ul className='flex gap-10'>
                        {
                            menu.map((el, idx) => {
                                return (
                                    <List key={idx} text={el.name} to={el.path} />
                                )
                            })
                        }
                    </ul>



                    <div className="flex gap-3 items-center">
                        <Link to={`/addToFavourite`}>

                            <div className="bg-blue text-white py-2 px-5 flex items-center font-Nunito font-semibold gap-2 rounded-md">
                                <BsCartPlusFill className='text-[20px]' />
                                <p>{cart.length}</p>
                            </div>

                        </Link>

                        <Link to={`/login`}>
                            <button className='text-[#FFFF] text-base w-[150px] h-[56px] bg-blue font-Nunito font-bold rounded-[30px]'>
                                Log In
                            </button>
                        </Link>
                    </div>



                    {/* <div className="flex gap-3 items-center">
                        <Link Link to={`/addToFavourite`}>

                            <div className="bg-blue text-white py-2 px-5 flex items-center font-Nunito font-semibold gap-2 rounded-md">
                                <BsCartPlusFill className='text-[20px]' />
                                <p>{cart.length}</p>
                            </div>

                        </Link>

                        <button onClick={logOut} className="bg-blue text-white py-2 px-5 flex items-center font-Nunito font-semibold gap-2 rounded-md">
                            <span>Log Out</span>
                            <CiLogin className='text-[20px]' />
                        </button>
                    </div>

                    <Link to={`/login`}>
                        <button className='text-[#FFFF] text-base w-[150px] h-[56px] bg-blue font-Nunito font-bold rounded-[30px]'>
                            Log In
                        </button>
                    </Link> */}



                </div >
            </Container >
        </div >
    )
}

export default Navber