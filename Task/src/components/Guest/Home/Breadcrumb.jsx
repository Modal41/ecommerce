import React from 'react'

const Breadcrumb = ({children}) => {
  return (
    <div className='container my-5 homeCategory'>
        <div className='row'>
            <div className='col-12'>
                <div className='card custom-shadow border-0 py-4 rounded'>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Breadcrumb