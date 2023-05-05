import React from 'react'
import ImgCarousels from '../Component/ImgCarousels'
import { Container } from 'react-bootstrap'



function Home() {
  return (
    <div>
       <div className='text-center mt-5'>
       <h2>Welcome to Snap-Trav</h2>
         <p>We are an award winning photography studio. We are dedicated to capture timeless images.</p>
       </div>
        
        <Container className='mt-5 '>
        <ImgCarousels />
        </Container>
        
    </div>
  )
}

export default Home