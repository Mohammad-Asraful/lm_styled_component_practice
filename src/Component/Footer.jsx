import React from 'react'
import styled from 'styled-components'

const Footer = () => {

   const Footer = styled.footer`
   margin-top:30px;
   padding: 30px 0 0 0;
   background-color: darkblue;
   `

   const Container = styled.div`
   width: 95%;
   margin: 0 auto;
   `

   const Flexdiv = styled.div`
   color: white;
   display: flex;
   justify-content: 'space-between';
   align-items: 'center';
   line-height: 1.8;

   div{
      width: 50%;
   }
   `

   const Lastfooter = styled.div`
   padding: 20px;
   background-color:indigo;
   color: darkgray;
   display: flex;
   justify-content: space-between;
   align-items: 'center';
   `

   const Icondiv = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: 'center';
   gap:15px;

   i{
      color: rgb(71 85 105);
      width: 25px;
      height: 25px;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
   
   :hover{
      color: black;
   }
   }
   `

   return (
      <>
         <Footer>

            <Container>

               <Flexdiv>
                  <div>
                     <h1>Contact us</h1>
                     <h3>Gmail: asrafmail01@gmail.com</h3>
                     <h3>Phone: 01700000011</h3>
                     <a style={{ color: 'white', }} href="https://facebook.com" target="_blank" rel="noopener noreferrer">Social media: Facebook</a>
                  </div>
                  <div>
                     <h1>About us</h1>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid minus dolorem perferendis fuga eveniet similique quos, enim nemo omnis? Magni odit eligendi quam delectus quaerat eum officiis quas. Provident, accusantium.</p>
                  </div>
               </Flexdiv>

            </Container>

            <Lastfooter>
               <p style={{ color: '#fff' }}>&copy; copy right researved.</p>
               <Icondiv>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-facebook-messenger"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-whatsapp"></i>
                  <i class="fa-brands fa-skype"></i>
               </Icondiv>
            </Lastfooter>

         </Footer>
      </>
   )
}

export default Footer