import React from 'react'
import './admin.scss'
import { Header } from '../../components'
const Admin = () => {
  return (
    <>
        <Header/>
        <section className='admin'>
            <div className='container'>
                <div className="admin-left">
                    <div className="name">
                        <label htmlFor="">Product name</label>
                        <input type="text" placeholder='Type name here' />
                    </div>
                    <div className="name">
                        <label htmlFor="">description</label>
                        <input type="text" placeholder='Type Description here' />
                    </div>

                    <div className="name">
                        <label htmlFor="">Category</label>
                        <input type="text" placeholder='Type Category here' />
                    </div>
                    <div className="name">
                        <label htmlFor="">Brand name</label>
                        <input type="text" placeholder='Type brand name here' />
                    </div>


                    <div className="ram">
                            .d
                    </div>


                </div>
                <div className="admin-right">

                </div>
            </div>
        </section>
    </>
  )
}

export default Admin