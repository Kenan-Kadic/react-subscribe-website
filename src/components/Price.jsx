import React from 'react'
import styled from 'styled-components'
import PriceCard from './PriceCard';

const Container = styled.div`   
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
      }
`;

const Price = () => {
    return (
        <Container>
            <PriceCard price="10" type="Basic" templetes="100 Hand-Crafed-Templetes" support="Basic Support" websites="50+ PreBuilt Websites" plugins="Basic Plugins"/>
            <PriceCard price="20" type="Premium" templetes="200 Hand-Crafed-Templetes" support="Premium Support" websites="100+ PreBuilt Websites" plugins="Premium Plugins"/>
            <PriceCard price="30" type="Advanced" templetes="300 Hand-Crafed-Templetes" support="Advanced Support" websites="200+ PreBuilt Websites" plugins="Advanced Plugins"/>
        </Container>
    )
}

export default Price
