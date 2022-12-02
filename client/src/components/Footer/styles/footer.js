import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 60px;
  background: linear-gradient(90deg, #3a5c83 0%, #769ABE 100%);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  // position: relative;
  // top: 300px;
  position: absolute;
  bottom: 0;
  width: 100%;
  // height: 2.5rem; 


  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    // padding-bottom: 2.5rem;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Button = styled.button`
  color: #DCD5DC;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  background-color: #E8AA9B;

  &:hover {
      color: #1A385A;
      transition: 200ms ease-in;
      background-color: #E46f44;
  }
`;