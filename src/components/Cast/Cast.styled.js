import styled from '@emotion/styled';

export const WrapImg = styled.div`
  display: flex;
  margin-top: 50px;
  flex-wrap: wrap;
  gap: 30px;
  list-style: none;
  padding: 0;
`;

export const ImgEl = styled.img`
  width: calc((100% - 30px) / 8);

  border-radius: 15px;
  object-fit: cover;

  box-shadow: inset 0px 1px 7px 1px rgb(0 0 0 / 82%),
    0px 1px 6px 0px rgb(255 255 255 / 74%),
    0px 2px 3px 0px rgb(255 255 255 / 74%);
`;
