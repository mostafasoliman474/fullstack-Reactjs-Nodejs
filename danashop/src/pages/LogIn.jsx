import styled from "styled-components"


const Container=styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      rgba(153, 153, 153, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
    background-size: cover;
`
const Wrapper=styled.div`
    width: 25%;
    background-color: white;
    padding :20px;
    border-radius: 2px;
   
`

const Title=styled.h1`
    margin-bottom:20px;
    font-weight: 400;
`

const Form=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Input=styled.input`
    flex: 1;
    min-width: 40%;
    padding: 10px;
    background: white;
    margin: 10px 10px 10px 0;
    border-radius: 2px;
    border: 1px solid lightgray;
    outline: none;
    font-weight: 400;
    font-size: 18px;`

const Button=styled.button`
    width: 40%;
    padding:1rem 0 ;
    text-align: center;
    background-color: teal;
    color:lightgray ;
    font-size: 16px;
    font-weight: 600;
    border-radius: 2px;
    cursor: pointer;
    border: 1px solid teal;
    margin: 10px 0;
    &:hover{
        background-color: lightgray;
        color: teal;
        border:1px solid teal;
    }
`

const Link=styled.a`
    text-decoration: underline;
    margin-top: 5px;
    letter-spacing: 1px;
    cursor: pointer;
`


const LogIn = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder='UserName'/>
                <Input placeholder='Password'/>
                <Button>LOGIN</Button>
                <Link>Forgotten password?</Link>
                <Link>Create New Account</Link>
            </Form>
        </Wrapper>
    
    </Container>
  )
}
export default LogIn;