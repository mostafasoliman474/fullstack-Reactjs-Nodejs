import React from 'react'
import styled from 'styled-components'
const Offer=styled.div`
    background-color: teal;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
    color: white;
    padding:10px 0;
`
export const Announcement = () => {
  return (
    <Offer>
       Super Deal! Free Shipping On Order Over 50%
    </Offer>
  )
}