import styled from "styled-components";

function Opening() {
  return (
    <>
      <Headline>Öffnungszeiten</Headline>
      <Text>Di - Fr: 17:00 - 22:00</Text>
      <Text>Sa und So: 17:00 - 22:00</Text>
      <Text>Montag ist Ruhetag</Text>
    </>
  );
}

const Headline = styled.h2`
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
`;
export default Opening;
