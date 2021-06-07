import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 1rem;
  max-width: 50rem;
  margin: 1rem auto;

  @media (max-width: 1090px) {
    padding: 0;
    display: block;
  }

  & > div:first-child {
    flex: 1.825;
    padding-right: 2rem;
    min-width: 30rem;

    @media (max-width: 1090px) {
      padding-right: 0;
    }

    @media (max-width: 960px) {
      padding-right: 0;
      min-width: 18rem;
    }
  }

  & > div:last-child {
    flex: 1;
    margin-top: 3rem;
    min-width: 16rem;

    @media (max-width: 1090px) {
      width: 100%;
      max-width: 100%;
      border: 0;
    }
  }
`;

export const Controller = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    width: 20%;
  }
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    margin-left: 0.6rem;
  }
`;

export const ShoppingList = styled.div`
  & > div:first-child {
    border-bottom: 2px solid black;
    padding: 1rem 0;
  }
`;
