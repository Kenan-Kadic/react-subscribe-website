import React from 'react';
import styled from 'styled-components';
import How from '../img/how.png';
import MiniCard from './MiniCard';
import Play from '../img/play.png';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    height: 100%;
`;
const Left = styled.div`
    width: 50%;
    position: relative;
`;

const Image = styled.img`
    display: ${(props) => props.open && "none"};
    height: 100%;
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
`;

const Right = styled.div`
    width: 50%;
`;

const Wrapper = styled.div`
    padding 50px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`

`

const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #555;
`;

const CardCOntainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;

const Button = styled.button`
    width: 180px;
    border: none;
    border-radius: 10px;
    background-color: crimson;
    color: white;
    font-size: 20px;
    padding: 15px;
    margin-top:50px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Service = () => {
        const [open, setOpen] = useState(false);

    return (
    <Container>
        <Left>
            <Image open={open} src={How}/>
        </Left>
        <Right>
            <Wrapper>
                <Title>Simple process to start</Title>
                <Desc>We provide digital experience services to startups and small businesses looking for a 
                    partner in their digital media, design and development, lead generation and communication
                    requirements. We work with you, not for you. Although we have great resources
                    </Desc>
                <CardCOntainer>
                    <MiniCard />
                    <MiniCard />
                    <MiniCard />
                </CardCOntainer>
                <Button onClick={() => setOpen(true)}>
                    <Icon src={Play} />
                    How it works
                </Button>
            </Wrapper>
        </Right>
    </Container>
    )
}

export default Service