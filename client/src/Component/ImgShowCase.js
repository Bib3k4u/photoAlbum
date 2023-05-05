import React from 'react'

function ImgShowCase(props) {
  return (
    <div style={{columns:props.columnCount , columnGap:0}}>
        {props.imageUrls.map((img,i)=>
           <img src={`data:image/jpeg;base64,${img.data}`} key={i} className='d-block w-full' style={{padding:props.gap/2}} alt={`${img._id}`} />
        )}
       
    </div>
  )
}

export default ImgShowCase