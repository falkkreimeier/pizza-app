import styled from "styled-components/macro";
import Pizza from "../Assets/Pizza-menue.jpeg";
import { Link } from "react-router-dom";

function Salads() {
  return (
    <Wrapper>
      <Image src={Pizza} alt="" />
      <LinkContainer>
        <NavLink to="/vorspeisen">Appetizers</NavLink>
      </LinkContainer>
      <LinkContainer>
        <NavLink to="">Salads</NavLink>
      </LinkContainer>
      <LinkContainer>
        <NavLink to="">Pizza</NavLink>
      </LinkContainer>
      <LinkContainer>
        <NavLink to="">Pasta</NavLink>
      </LinkContainer>
      <LinkContainer>
        <NavLink to="">Dessert</NavLink>
      </LinkContainer>
      <LinkContainer>
        <NavLink to="">Drinks</NavLink>
      </LinkContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const Image = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
`;

const LinkContainer = styled.div`
  margin: 0 auto;
  width: 95%;
  border-radius: 5px;
  background-color: white;
  height: 50px;
  padding: 15px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default Salads;
