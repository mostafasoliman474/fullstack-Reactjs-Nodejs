import { Facebook, Instagram, LocalPhone, LocationOn, Mail, Pinterest, Twitter } from '@mui/icons-material'
import styled from 'styled-components'

const Container=styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    

`
const Left=styled.div`
    flex: 1;
    height: auto;
    
  
`
const Logo=styled.h1`
    font-weight: bold;
    margin-bottom:20px;
`
const Desc=styled.div`
    font-size: 16px;
    font-weight: 300;
    width: 80%;
    margin-bottom:20px;
`
const SocialMedia=styled.div`
    height: 7vh;
    width: 80%;
    display: flex;
    
`
const Icon=styled.div`
    width: 60px;
    width: 60px;
    color: white;
    margin-right:20px ;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #${(props)=>props.bgc};
    cursor: pointer;
   
`
const Center=styled.div`
   flex: 1;
    display: flex;
    flex-direction: column;
    
`
const Title=styled.h1`
    font-weight: bold;
    margin-bottom:20px ;
`
const LinksList=styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap:10px;
    row-gap:10px;

`
const ListItem=styled.a`
    font-weight: 700;
    cursor: pointer;
    
`



const Right=styled.div`
     flex: 1;
     
`
const InfoContainer=styled.div`

    
`
const Info=styled.div`
    display: flex;
    margin-bottom: 20px;
`
const IconDesc=styled.div`
    margin-left: 10px;
    font-weight: 500;
`
 const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                TOQA.
            </Logo>
            <Desc>There are many variations of Passages of lorem ipsum available, but the majority have suffered alternation words which don't look even slightly believable</Desc>
            <SocialMedia>
                <Icon bgc='3b5999'>
                    <Facebook fontSize='large'/>
                </Icon>
                <Icon bgc='E4405F'>
                    <Instagram fontSize='large'/>
                </Icon>
                <Icon bgc='55acbe'>
                    <Twitter fontSize='large'/>
                </Icon>
                <Icon bgc='e60023'>
                    <Pinterest fontSize='large'/>
                </Icon>
            </SocialMedia>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <LinksList>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </LinksList>
        </Center>
        <Right>
            <Title>Contact</Title>
            <InfoContainer>
                <Info>
                    <LocationOn/>
                    <IconDesc>NASR CITY , CAIRO , EGYPT 98336</IconDesc>
                </Info>
                <Info>
                    <LocalPhone/>
                    <IconDesc>+201110734104</IconDesc>
                </Info>
                <Info>
                    <Mail/>
                    <IconDesc>contact@TOQA.SHOP</IconDesc>
                </Info>
            </InfoContainer>
        </Right>
    </Container>
  )
}
export default Footer;