import styled from "styled-components";

const DropDownButton = styled.select`
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #fff;
`;

const DropDownButton2 = styled.select`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const ImageProfil = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 20px;
`;

const RectangleBar = styled.div`
  width: 1px;
  height: 63px;
  background: #fff;
`;

const SecondeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const HelloText = styled.p`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const NameUser = styled.p`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

function MainDropDownButton({ title, children }) {
  return (
    <>
      <label>
        <DropDownButton name={title}>
          {children}
          <option></option>
        </DropDownButton>
      </label>
    </>
  );
}

function MainDropDownButton2({ ImgProfil }) {
  return (
    <>
      <label>
        <DropDownButton2>
          <ImageProfil src={ImgProfil} />
          <RectangleBar />
          <SecondeDiv>
            <HelloText>Hello</HelloText>
            <NameUser>John Doe</NameUser>
          </SecondeDiv>
        </DropDownButton2>
      </label>
    </>
  );
}

export { MainDropDownButton, MainDropDownButton2 };
export default MainDropDownButton;
