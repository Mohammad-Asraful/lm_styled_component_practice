import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const NavBar = () => {

   const Container = styled.div`
   width: 98%;
   margin: 0 auto;
   `

   const MainHeader = styled.header`
   background-color: darkblue;
   width: 100%;
   `

   const NavStyle = styled.nav`
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      text-decoration: none;
      
      .navlink{
         color: white;
      }
      `

   const HeaderDiv = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;

      .logo{
         color: #FFA500;
         font-family: 'algerian';
      }
      `

   const Button = styled.button`
      padding: 10px 20px;
      background-color: blue;
      outline: none;
      border: none;
      border-radius:5px;

      :hover{
         background-color: black;
         color: white;
      }
      `

   return (
      <>
         <MainHeader>

            <Container>

               <HeaderDiv>

                  <div>
                     <h1 className="logo">Asraf</h1>
                  </div>

                  <NavStyle>
                     <NavLink className="navlink" to="/">Home</NavLink>
                     <NavLink className="navlink" to="/about">About</NavLink>
                     <NavLink className="navlink" to="/styledcomponent">Styled component</NavLink>
                  </NavStyle>

                  <Button>Get Started</Button>

               </HeaderDiv>

            </Container>

         </MainHeader>
      </>
   )
}

export default NavBar