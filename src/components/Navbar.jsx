import styled from "styled-components";

const Container = styled.div`
    height: 50px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content:space-between;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
            <span>logo</span>
            <span>button</span>
            </Wrapper>
        </Container>
    )
}

export default Navbar
