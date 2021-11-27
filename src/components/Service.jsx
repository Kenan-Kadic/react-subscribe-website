import React from 'react'
import styled from 'styled-components'
import How from '../img/how.png'

const Container = styled.div`
    display: flex;
    height: 100%;
`;
const Left = styled.div`
    width: 50%;
    position: relative;
`;

const Image = styled.img`
    height: 100%;
`;

const Right = styled.div`
width: 50%;
`;

const Service = () => {
    return (
    <Container>
        <Left>
            <Image src={How}/>
        </Left>
        <Right></Right>
    </Container>
    )
}

export default Service