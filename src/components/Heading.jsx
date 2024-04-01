import React from 'react'

function Heading({className, title}) {
  return (
    <div className={`${className} max-w-[50rem] m-auto mb-12 lg:mb-20`}>
        {title && <h2 className='h2'>{title}</h2>}
    </div>
  )
}

export default Heading