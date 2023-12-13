import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Container = styled.div`
   padding:10px 20px;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
`
const Right = styled.div`
    display: flex;
    gap:20px;
    align-items: center;
`
const Center = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;            
`
const Left = styled.div`
              
`
const Language = styled.p`
  font-size:20px;
  font-weight: bold; 
  cursor: pointer;            
`
const SearchContainer = styled.div`
   display: flex;
   align-items: center;  
   border:1px solid lightgray;
   border-radius:10px;
   padding:5px 5px 5px 10px  ;
   height: 35px;        
`
const Input = styled.input`
   outline:none;
   border:none;
   font-size: 17px;
`
const Logo = styled.h1`
   font-size:40px;
   font-weight: 900;
`
const MenuContainer = styled.div`
  display: flex;
  gap:20px;   
  align-items: center;       
`
const MenuItem = styled.a`
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
`
const Nav = () => {
  const cart=useSelector(state=>state.cart.quantity);
  
  return (
    <Container>
      <Wrapper>
        <Right>
          <Language>
            EN
          </Language>
          <SearchContainer>
            <Input type='text'/>
            <SearchOutlined />
          </SearchContainer>
        </Right>
        <Center>
          <Link to='/'>
          <Logo>TOQA.</Logo>
          </Link>
        </Center>
        <Left>
          <MenuContainer>
            <MenuItem>
              LOGIN
            </MenuItem>
            <MenuItem>
              REGISTER
            </MenuItem>
            <Link to='/cart'>
            <MenuItem>
              <Badge color='primary' badgeContent={cart}>
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
            </Link>
          </MenuContainer>
        </Left>
      </Wrapper>
    </Container>
  )
}

export default Nav