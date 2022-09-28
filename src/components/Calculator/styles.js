import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  max-width: 1220px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  margin: 20px auto;
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    width: 60%;
    margin: 0 auto;
  }

  h1 {
    font-weight: bold;
    margin: 10px auto
  }

  form {

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
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
  
    margin: 10px auto;
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


