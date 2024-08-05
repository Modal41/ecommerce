import React from 'react'

const Content = ({children}) => {
  return (
    <div className='container my-5 py-5'>
        <div className='row'>
            <div className='col-12'>
                <div className='card bg-white border-0 custom-shadow p-4'>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content