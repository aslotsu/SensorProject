import styled from "styled-components";

const NavBar = () => {
    return (
        <>
            <FullBar>
                <Logo>Sensor Project</Logo>
            </FullBar>
        </>
    )
}

const FullBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
  height: 8.33vh;
  background-color: #1b1b1b;
  max-width: 100vw;
  padding: 0 10vw;
`

const Logo = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  color: white;
  font-family: "Mukta", monospace;
  &:hover {
    color: #23d;
    transform: scale(1.15);
  }
  transition: color 0.4s ease;
`

export default NavBar