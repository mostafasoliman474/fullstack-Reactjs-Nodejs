import { Send} from "@mui/icons-material"
import styled from "styled-components"


const Container=styled.div`
    height: 60vh;
    background-color: #fbf0f4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Head=styled.h1`
    font-size: 70px;
    font-weight: 700;
    margin: 20px;
`
const Info=styled.p`
    font-size: 24px;
    font-weight: 400;
    margin: 10px;
 
`
const InpField=styled.div`
    width: 50%;
    display: flex;
    align-items: initial;
    justify-content: center;
    font-weight: 600;
    margin: 10px;
    box-shadow: 0 0 2px 0 rgb(0 0 0);
    
`
const Input=styled.input`
    outline: none;
    border: none;
    flex: 8;
    height: 5vh;
    font-size: 18px;
    font-weight: 600;
    padding-left: 1rem;
    border-radius: 2px 0 0 2px;
`
const Button=styled.button`
    background-color: teal;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 2px 2px 0;
    cursor: pointer;
    flex: 1;
    color: white;
`
 const NewsLetter = () => {
  return (
    <Container>
        <Head>Newsletter</Head>
        <Info>Get timely updates from your favorite products</Info>
        <InpField>
            <Input type='text' placeholder='Your Email'/>
            <Button>
                <Send/>
            </Button>
        </InpField>
    </Container>
  )
}

export default NewsLetter;