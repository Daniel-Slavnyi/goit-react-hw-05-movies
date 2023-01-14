import styled from '@emotion/styled/macro';

export const FormEl = styled.form`
  display: flex;
  justify-content: center;
`;

export const LabelEl = styled.label`
  position: relative;
  display: flex;
`;
export const SpanEl = styled.span`
  color: white;
`;

export const InputEl = styled.input`
  background: transparent;
  width: 200px;
  border: none;
  outline: none;
  border-bottom: 1px solid white;
  color: white;
  margin-right: 10px;

  & + ${SpanEl} {
    position: absolute;
    top: 10px;
    left: 0;
    transition: all 0.5s ease;
  }

  &:focus-within + ${SpanEl} {
    transform: translateX(-140%);
    color: tomato;
  }
  &:not(:placeholder-shown) + ${SpanEl} {
    transform: translateX(-140%);
    color: tomato;
  }
`;

export const ButtonlEl = styled.button`
  border: 1px solid white;
  background: transparent;
  padding: 10px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    border: 1px solid tomato;
    color: tomato;
  }
`;

export const UlEl = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  list-style: none;
  padding: 0;
`;

export const LiEl = styled.li`
  width: calc((100% - 30px) / 5);
  height: 300px;

  border-radius: 15px;
  object-fit: cover;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: cover;

    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: inset 0px 1px 7px 1px rgb(0 0 0 / 82%),
      0px 1px 6px 0px rgb(255 255 255 / 74%),
      0px 2px 3px 0px rgb(255 255 255 / 74%);
  }
`;
