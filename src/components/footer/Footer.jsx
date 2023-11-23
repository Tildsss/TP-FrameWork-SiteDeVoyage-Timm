import styled from "styled-components";
import MainDropDownButton from "../dropDownButton/MainDropDownButton";

const Container = styled.div`
  text-align: center; /* Centrer le contenu */
`;

const MainDiv = styled.div`
  display: flex;
  padding: 15px 16px;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.4);
  flex-direction: row;
  margin-top: 200px;
`;

function Footer() {
  return (
    <Container>
      <MainDiv>
        <MainDropDownButton>
          <option hidden selected>
            Destination
          </option>
          <option>Paris</option>
          <option>Londre</option>
        </MainDropDownButton>
        <MainDropDownButton>
          <option hidden selected>
            Itinéraire
          </option>
          <option>Ville 1</option>
          <option>Ville 2</option>
          <option>Ville 3</option>
          <option>Ville 4</option>
        </MainDropDownButton>
        <MainDropDownButton>
          <option hidden selected>
            Hébergement
          </option>
          <option>1 étoile</option>
          <option>2 étoiles</option>
          <option>3 étoiles</option>
          <option>4 étoiles</option>
          <option>5 étoiles</option>
        </MainDropDownButton>
      </MainDiv>
    </Container>
  );
}

export default Footer;
