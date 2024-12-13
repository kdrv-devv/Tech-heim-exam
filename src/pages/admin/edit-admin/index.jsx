import React from 'react'
import { Header } from '../../../components'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Checkbox,
    Button,
  } from "@mui/material";
const EditAdmin = () => {
  return (
   <>
        <section className='edit-admin w-[100%]'>
        <h2 className="text-center text-[30px] text-gray-500">Rewiev the product</h2>
            <div className='container flex flex-col gap-3 '>
                <div className='editadmin-body mt-[30px]'>
                    <form action="" className=' w-[50%] rounded-[8px] m-auto flex items-center justify-between gap-3 border border-gray-400 !important'>
                        <input type="text" placeholder='search products...' className='w-[90%] h-[40px] rounded-[8px] pl-[10px] outline-none' />
                        <button className='w-[10%] bg-gray-100 h-[40px] rounded-[0px_8px_8px_0] text-gray-600 text-[20px] flex items-center justify-end pr-4'><CiSearch /></button>
                    </form>
                </div>

                <div className='searech-result-items flex flex-col gap-5'>
                    <div className='w-[100%] flex items-center justify-center flex-col'>
                        <div className='search-item w-[70%] h-[50px] flex items-center justify-between '>
                            <div className='search-left w-[20%] '>
                                <img src="" alt="Img boladi" />
                            </div>

                            <h3>Maxsulot title</h3>
                            
                            <Button variant='contained' className='!bg-green-700'>Edit</Button>

                        </div>
                    </div>
                </div>


            </div>
        </section>
   </>
  )
}

export default EditAdmin