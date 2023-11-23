import styled from "styled-components";
import MainDropDownButton2 from "../dropDownButton/MainDropDownButton";

const Container = styled.div`
  text-align: center;
`;

const MainDiv = styled.div``;

function Header() {
  return (
    <Container>
      <MainDiv>
        <MainDropDownButton2>
          <option hidden selected>
            Destination
          </option>
          <option>Paris</option>
          <option>Londre</option>
        </MainDropDownButton2>
      </MainDiv>
    </Container>
  );
}

export default Header;
