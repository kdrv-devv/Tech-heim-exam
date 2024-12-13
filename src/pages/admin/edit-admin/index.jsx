import React from 'react'
import { Header } from '../../../components'
import { Link } from 'react-router-dom'
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
        <Header/>
        <section className='edit-admin'>
            <div className='container flex flex-col gap-3'>
                <div className="edit-admin-header flex items-center gap-2">
                    <Link to={"/admin"}> <h3 className='italic  text-gray-400'>Post admin > </h3> </Link>
                    <Link to={"/editadmin"}> <h3 className='italic underline text-gray-400'>Edit admin > </h3> </Link>
                    <Link to={"/admin"}> <h3 className='italic text-gray-400'>Post admin </h3> </Link>
                </div>

                <div className='editadmin-body mt-9'>
                    <form action="" className=' w-[70%] m-auto flex items-center justify-center gap-3 border border-gray-400 !important'>
                        <input type="text" placeholder='search products...' className='w-[80%] h-[40px] pl-[10px] outline-none' />
                        <button className='w-[20%] text-gray-600 text-[20px]'>search</button>
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