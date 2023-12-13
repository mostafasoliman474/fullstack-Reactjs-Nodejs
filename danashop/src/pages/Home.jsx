import React from 'react'
import Nav from '../components/Nav'
import styled from 'styled-components'
import { Announcement } from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Cards from '../components/Cards'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
const Container = styled.div`
               
`
const Home = () => {
  return (
    <Container>
      <Announcement/>
      <Nav />
      <Slider/>
      <Categories/>
      <Cards/>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default Home