import React from 'react'
import styled from 'styled-components'
import Price from './Price';

const Container = styled.div`

`;
const Container = styled.div`

`;
const Container = styled.div`

`;
const Container = styled.div`

`;
const Container = styled.div`

`;
const Container = styled.div`

`;
const Container = styled.div`

`;

const PriceCard = () => {
    return (
        <Container>
            <PriceContainer>
                $<Price>20</Price>/month
                <Type>Basic Plan</Type>
                <List>
                    <ListItem>200 Hand-Crafed Templetes</ListItem>
                    <ListItem>Exclusive Support</ListItem>
                    <ListItem>50+ PreBuilt Websites</ListItem>
                    <ListItem>Premium Plugins</ListItem>{" "}
                </List>
                <Button> Join Now</Button>
            </PriceContainer>
        </Container>
            
    )
}

export default PriceCard
