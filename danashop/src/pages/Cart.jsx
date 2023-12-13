import { Add, Remove } from '@mui/icons-material'
import styled from 'styled-components'
import StripeCheckout from 'react-stripe-checkout'
import Nav from '../components/Nav'
import { Announcement } from '../components/Announcement'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { useEffect, useState, } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px ;
`
const Title = styled.h1`
    text-align:center;
    font-weight: 300;
    
`
const TopLinksContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Center = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
   
`
const ButtonTop = styled.button`
    background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
    border: ${props => props.type === 'filled' ? '2px solid lightgray' : ' 2px solid black;'};
    color:${props => props.type === 'filled' ? 'white' : 'black'};
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
`
const Link = styled.a`
    margin-right:5px;
    text-decoration: underline;
    cursor: pointer;
`
const BottomContainer = styled.div`
    display: flex;
    
`

const InformationContainer = styled.div`
    flex: 3;
    
`

const Product = styled.div`
    display: flex;
    margin: 20px 0;
    
`

const Image = styled.img`
    flex:1;
    max-width: 35%;
    
`

const Info = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 30px;
`

const ProductName = styled.p``

const ProductID = styled.p``

const ProductSize = styled.p`
    font-size: 20px;
    font-weight: bold;
`

const ProductColor = styled.div`

    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.backcolor};
    border:1px solid teal
`



const AmmountContainer = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Ammount = styled.span`
    font-size: 30px;
    margin: 0 5px;

`

const Price = styled.p`
    font-size: 30px;
    opacity: .9;
    color: #222222;
`
const Summry = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    
    padding :0 20px;
    border: 1px solid lightgray;
    border-radius: 10px;
    margin-top: 20px;
  
`

const AddContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Hr = styled.hr`
    height: 1px;
    background-color: lightgray;
    margin: 10px 0;
`
const AddWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
`
const SummryTitle = styled.h1`
    font-weight: 200;
    margin: 20px 0 30px 0;
`
const Information = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 15px 0;
`
const ValueName = styled.p`
font-weight: ${props => props.type === 'total' ? 800 : 400};
font-size: ${props => props.type === 'total' ? '24px' : '16px'};
    
`
const Value = styled.p`
    font-weight: ${props => props.type === 'total' ? 800 : 400};
    font-size: ${props => props.type === 'total' ? '24px' : '16px'};
`

const ProductInfoContainer = styled.div`
    display: flex;
    flex: 1;

`
const Cart = () => {

    const [stripeToken, setStripeToken] = useState('');
    const { product, quantity, totalPrice } = useSelector(state => state.cart);
    const navigate = useNavigate();
    const stripeKey = 'pk_test_51OIBXGGTHVRNZlBtU9bwqUW1Df0CIMl0TTBm9aYZ3vQWSgf4NeU5iYyjEK760Dj94hGgbbqc0t2V467iiDvRL0pq00HAYvCfeR';
    /* console.log(cart) */
    const onToken = (token) => {
        setStripeToken(token)
    }
    useEffect(() => {
        const getData = async () => {
            try {

                const res = await axios.post("http://localhost:5000/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: totalPrice * 100
                    }
                )
                navigate('/success', {data:res.data})
            }
            catch (err) {
                console.log(err)
            }


        }
        stripeToken && getData();

    }, [stripeToken, totalPrice, navigate])
    return (
        <Container>
            <Nav />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <TopLinksContainer>

                    <ButtonTop>Continue Shopping</ButtonTop>

                    <Center>
                        <Link>Shopping Bag ({quantity})</Link>
                        <Link>Your Wishlist (0)</Link>
                    </Center>

                    <ButtonTop type='filled'>Checkout Now</ButtonTop>

                </TopLinksContainer>
                <BottomContainer>
                    <InformationContainer>
                        {product.map(item => (
                            <>
                                <Product key={item._id}>
                                    <ProductInfoContainer>
                                        <Image src={item.img} />
                                        <Info>
                                            <ProductName><b>Product:</b> {item.title}</ProductName>
                                            <ProductID><b>ID: </b>{item._id}</ProductID>
                                            <ProductColor backcolor={item.color} />
                                            <ProductSize><b>Size: </b>{item.size}</ProductSize>
                                        </Info>
                                    </ProductInfoContainer>

                                    <AmmountContainer>
                                        <AddWrapper>
                                            <AddContainer>
                                                <Add style={{ 'cursor': 'pointer' }} />
                                                <Ammount>{item.quantity}</Ammount>
                                                <Remove style={{ 'cursor': 'pointer' }} />
                                            </AddContainer>
                                            <Price>$ {item.price}</Price>
                                        </AddWrapper>
                                    </AmmountContainer>
                                </Product>
                                <Hr />
                            </>
                        ))}

                    </InformationContainer>
                    <Summry>
                        <SummryTitle>ORDER SUMMRY</SummryTitle>

                        <Information>
                            <ValueName>Subtotal</ValueName>
                            <Value>$ {totalPrice}</Value>
                        </Information>

                        <Information>
                            <ValueName>Estimated Shipping</ValueName>
                            <Value>$ 5.90</Value>
                        </Information>


                        <Information>
                            <ValueName>Shipping Discount</ValueName>
                            <Value>- $ 5.90</Value>
                        </Information>
                        <Information>
                            <Information>
                                <ValueName type='total'>Total</ValueName>
                                <Value type='total'>$ {totalPrice}</Value>
                            </Information>
                        </Information>
                        <StripeCheckout
                            stripeKey={stripeKey}
                            image='https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=600'
                            name='DANA'
                            token={onToken}
                            shippingAddress
                            billingAddress
                            amount={totalPrice * 100}
                            description={`your total is $${totalPrice}`}
                        >
                            <ButtonTop type='filled'>CHECKOUT NOW</ButtonTop>
                        </StripeCheckout>
                    </Summry>
                </BottomContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}
export default Cart;