import React from 'react'
import NavBar from './NavBar'
import styled from 'styled-components'

import img1 from '../Images/pawel-czerwinski-3k9PGKWt7ik-unsplash.jpg'
import img2 from '../Images/redd-f-3mWxKnqET3E-unsplash.jpg'
import img3 from '../Images/rick-l-037fCBgZB10-unsplash.jpg'
import img4 from '../Images/robert-katzki-jbtfM0XBeRc-unsplash.jpg'
import img5 from '../Images/robynne-hu-HOrhCnQsxnQ-unsplash.jpg'
import img6 from '../Images/spacejoy-7fX2YfJIrOQ-unsplash.jpg'
import img7 from '../Images/trinity-nguyen-gALJlPWQ644-unsplash.jpg'
import img8 from '../Images/trinity-nguyen-gALJlPWQ644-unsplash.jpg'
import img9 from '../Images/vino-li-gGX1fJkmw3k-unsplash.jpg'
import img10 from '../Images/vlad-gorshkov-aMnJywTJWzg-unsplash.jpg'
import img11 from '../Images/zhengtao-tang-V7SKRhXskv8-unsplash.jpg'
import Footer from './Footer'

const Home = () => {

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

            <H1>Home page Images</H1>

            <Imagediv>
               <img width='100%' src={img1} alt="Images" />
               <img width='100%' src={img2} alt="Images" />
               <img width='100%' src={img3} alt="Images" />
               <img width='100%' src={img4} alt="Images" />
               <img width='100%' src={img5} alt="Images" />
               <img width='100%' src={img6} alt="Images" />
               <img width='100%' src={img7} alt="Images" />
               <img width='100%' src={img8} alt="Images" />
               <img width='100%' src={img9} alt="Images" />
               <img width='100%' src={img10} alt="Images" />
               <img width='100%' src={img11} alt="Images" />
            </Imagediv>
         </Container>

         <Footer />
      </>
   )
}

export default Home