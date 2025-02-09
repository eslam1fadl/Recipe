import React from 'react'
import logo from '../assets/logo-BfNap0Pe (1).png';
import { Link, useNavigate } from 'react-router-dom';

export default function Sidbar() {
  return (
    <>
        <div className='bg-[#F9FAFB] fixed top-0 bottom-0 left-0 w-[20%] hidden  md:block' >
            
                  <img src={logo} alt="Logo" />
                     
                     <ul className='px-2  '>
                      <li className='text-center mb-2'>
                      <Link className='bg-orange-primary text-white block border-[1px] py-2 rounded-2xl border-gray-300' to={"/"}> <i className="fa-solid fa-utensils me-3"></i> Meals</Link>
                      </li>
                      <li className='text-center'>
                      <Link className=' block border-[1px] py-2 rounded-2xl border-gray-300' to={"/Ingrediants"}> <i className="fa-solid fa-utensils me-3"></i> Ingrediants</Link>
                      </li>
                      <li className='text-center'>
                      <Link className='block border-[1px] py-2 rounded-2xl border-gray-300' to={"/Area"}> <i className="fa-solid fa-utensils me-3"></i> Area</Link>
                      </li>
                     </ul>

        </div>

    </>
  )
}
