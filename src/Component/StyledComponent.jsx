import React from 'react'

import img1 from '../Images/guille-pozzi-PO0UHx-5mHo-unsplash.jpg'
import img2 from '../Images/igor-lypnytskyi-2-m61bS_cJY-unsplash.jpg'
import img3 from '../Images/ishan-seefromthesky-wXt0DiISf38-unsplash.jpg'
import img4 from '../Images/jackson-graham-VKfc9oMJSeU-unsplash.jpg'
import img5 from '../Images/kar-ming-moo-Q_3WmguWgYg-unsplash.jpg'
import img6 from '../Images/laura-vinck-Hyu76loQLdk-unsplash.jpg'
import img7 from '../Images/max-van-den-oetelaar-S0txA-JnUFA-unsplash.jpg'
import img8 from '../Images/pagie-page-UaaHbkk40Ow-unsplash.jpg'
import styled from 'styled-components'
import NavBar from './NavBar'
import Footer from './Footer'

const StyledComponent = () => {

   const Container = styled.div`
   width: 98%;
   margin: 0 auto;
   `

   const H1 = styled.h1`
   text-align: center;
   margin: 20px 0;
   `

   const Imagediv = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   gap:10px;

   img{
      width: 30%;
   }
   `

   return (

      <>

         <NavBar />

         <Container>

            <H1>Here are my images</H1>

            <Imagediv>
               <img src={img1} alt="Images" />
               <img src={img2} alt="Images" />
               <img src={img3} alt="Images" />
               <img src={img4} alt="Images" />
               <img src={img5} alt="Images" />
               <img src={img6} alt="Images" />
               <img src={img7} alt="Images" />
               <img src={img8} alt="Images" />
            </Imagediv>
         </Container>

         <Footer />
      </>
   )
}

export default StyledComponent