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

export const DivForm = styled.div`
  width: 400px;
  margin: 2rem auto 0.5rem auto;
  form {
    padding: 1rem 2rem;
    background-color: #f2f2f2;
    border-radius: 10px;

    fieldset {
      border: none;
    }
    legend {
      text-align: center;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    label {
      display: block;
      font-size: 12px;
      font-weight: 500;
      margin-bottom: 0.1rem;
    }
    input {
      &[type="text"] {
        width: 100%;
        height: 2rem;
        margin-bottom: 0.5rem;
        padding-left: 1rem;
        border: none;
        border-radius: 5px;
        filter: drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.07));
      }

      &[type="file"] {
        width: 100%;
        padding: 1rem;
        margin-bottom: 0.5rem;
        background-color: #fff;
        border-radius: 5px;
      }
    }

    textarea {
      width: 100%;
      padding: 1rem;
      height: 5rem;
      resize: none;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.07));
    }
  }
`;
export const AdicionarFicha = styled.div`
  text-align: center;
  margin: 0 0 2rem 0;
  button {
    padding: 0.5rem 3rem;
    border: none;
    border-radius: 10px;
    background: linear-gradient(178.81deg, #5bba83 5.91%, #42865f 102.49%);
    color: #fff;
    cursor: pointer;
    &:hover {
      background: linear-gradient(178.81deg, #5bba83 100%, #42865f 0%);
    }
  }
`;
