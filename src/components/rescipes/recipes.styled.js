import styled from 'styled-components';
export const Img = styled.img`
  width: 200px;
  height: 600px;
`;
export const Ul = styled.ul`
  margin: 0 auto;
  padding: 15px;
  display: block;
  width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: grey;
`;
export const Li = styled.li`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  width: calc(100% / 3 - 30px);
  padding: 5px;
  border: 1px solid;
  border-color: white;
  background-color: yellow;
`;
export const Section = styled.section`
  width: 1120px;
  margin: 0 auto;
`;
export const Button = styled.button`
  padding: 15px;
  border: 1px solid;
  border-radius: 4px;
  border-color: black;
  background-color: blue;
  color: white;
  font-size: 30px;
`;
