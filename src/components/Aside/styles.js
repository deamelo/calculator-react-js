import styled from "styled-components";

export const ContainerAside = styled.div`
  max-width: 1220px;
 
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;

  h2 {
    font-size: 25px;
  }

  .total {
    font-size: 18px;
  }

  h2, .total {
  color: blue;
  font-weight: bold;
  }

  p {
    font-size: 12px;
    color:  rgb(86 147 255);

    margin: 10px;
  }
`