import styled from 'styled-components';

export const Product = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;

  & > a {
    width: 100%;
    height: ${({ smallImage }) => (smallImage ? '8rem;' : '12rem;')}
    margin-bottom: 0.5rem;
    border: 1px solid var(--color-grey-100);

    & > img {
      width: 100%;
      min-width: 6.375rem;
      background-color: var(--color-white);
      object-fit: contain;
    }
  }
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.2rem 0.5rem;

  & > div {
    display: flex;
    flex-direction: column;
  }
`;

export const Name = styled.span`
  font-size: var(--font-micro);
  color: var(--color-grey-400);
`;

export const Price = styled.span`
  font-size: var(--font-small);
`;

export const CartButton = styled.button`
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.125);
  }
`;
