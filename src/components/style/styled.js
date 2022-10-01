import styled from "styled-components";

export const DivFichas = styled.div`
  gap: 2rem;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1440px;
`;
export const DivFicha = styled.div`
  border-radius: 10px;
  /* margin: 0 auto; */
  background-color: #f2f2f2;
  padding: 1rem;
  width: 300px;
  height: 600px;

  h2 {
    text-align: center;
  }
  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 0.5rem;
    height: 200px;
  }
  p {
    margin-bottom: 1rem;
  }
  span {
    font-weight: 600;
    &.obs {
      display: block;
    }
  }
`;
