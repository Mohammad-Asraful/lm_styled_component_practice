import React from 'react'
import NavBar from './NavBar'
import styled from 'styled-components'

import img1 from '../Images/arif-angga-ibrahim--y6oZ2pPyIc-unsplash.jpg'
import img2 from '../Images/ceci-li-JcYkgt8CgrI-unsplash.jpg'
import img3 from '../Images/chloe-chavanon-WArirthbCY4-unsplash.jpg'
import img4 from '../Images/chuck-fortner-LFVBohYmtgc-unsplash.jpg'
import img5 from '../Images/daniel-shapiro-5ManHvUoiBM-unsplash.jpg'
import img6 from '../Images/daniel-shapiro-TIVnungUUG0-unsplash.jpg'
import img7 from '../Images/domenico-loia-EhTcC9sYXsw-unsplash.jpg'
import img8 from '../Images/efe-kurnaz-RnCPiXixooY-unsplash.jpg'
import Footer from './Footer'

const About = () => {

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
            <H1>About Page Images</H1>

            <Imagediv>
               <img width='100%' src={img1} alt="Images" />
               <img width='100%' src={img2} alt="Images" />
               <img width='100%' src={img3} alt="Images" />
               <img width='100%' src={img4} alt="Images" />
               <img width='100%' src={img5} alt="Images" />
               <img width='100%' src={img6} alt="Images" />
               <img width='100%' src={img7} alt="Images" />
               <img width='100%' src={img8} alt="Images" />
            </Imagediv>
         </Container>

         <Footer />

      </>
   )
}

export default About