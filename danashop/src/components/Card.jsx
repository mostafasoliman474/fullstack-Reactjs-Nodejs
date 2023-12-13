import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Container = styled.div`
       width: 320px;
       height: 55vh;
       background: rgb(231, 235, 250);
       position: relative;
       border-radius: 5px;
       display: flex;
       align-items: center;
       justify-content: center;
`
const Image = styled.img`
       width: 50%;

       position: absolute;
       z-index: 2;
`
const CirculeContainer = styled.div`
       border-radius: 50%;
       background-color: #ffffff;
       width: 90%;
       height: 80%;
       position: absolute;
`
const MenuItems = styled.div`
       position: absolute;
       width: 100%;
       height: 100%;
       z-index: 3;
       background-color: transparent;
       opacity: 0;
       display: flex;
       align-items: center;
       justify-content: center;
       gap: 10px;
       border-radius: 5px;
       transition: .5s ease-out;
       &:hover{
        background-color: rgba(0,0,0,.5);
        opacity: 1;
        border-radius: 10px;  
       }
`
const Icon = styled.div`
       padding:5px;
       background-color: #ffffff;
       border-radius: 50%;
       cursor: pointer;
       display: flex;align-items: center;justify-content: center;
`
const Card = ({ item }) => {
       console.log(item)
       return (
              <Container key={item.id}>
                     <Image src={item.img} />
                     <CirculeContainer />
                     <MenuItems>
                            <Icon>
                                   <Link to={`/product/${item._id}`} style={{
                                          color:"black"
                                   }}>

                                   <SearchOutlined />
                                   </Link>
                            </Icon>
                            <Icon>

                                   <ShoppingCartOutlined />
                            </Icon>
                            <Icon>

                                   <FavoriteBorderOutlined />
                            </Icon>
                     </MenuItems>
              </Container>
       )
}

export default Card