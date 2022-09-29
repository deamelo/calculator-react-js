import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  max-width: 1220px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  margin: 0 auto;
  padding-top: 20px;

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    width: 100%;
    margin: 0 auto;
    padding: 20px;
    border: gray solid 1px;
    border-radius: 10px;

    @media (min-width: 1024px) {
      width: 50%;
    }

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
    }
  }

  h1 {
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    color: black;

    @media (min-width: 1024px) {
      padding-top: 70px;
    }
  }

  form {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;

    @media (min-width: 768px) {
      width: 50%;
    }
  }

  input {

    width: 100%;
    height: 20px;
  
    padding: 15px;
    margin: 10px;
  
    color: gray;
    background-color: whitesmoke;
  
    font-size: 10px;
  
    border-radius: 10px;
    border: 1px solid gray;
  }

  span {

    color: red;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
  }

  button {

    display: flex;
    justify-content: center;
    align-items: center;
  
    width: 90px;
    height: 30px;
  
    font-weight: bold;
    font-size: 15px;

    border-radius: 10px;
    border: none;
  
    background-color: blue;
    color: white; 
  }

  aside {
    display: flex;
    flex-direction: column;
  }
`


