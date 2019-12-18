import { css } from 'emotion';

function getStyles({
  background,
  color,
}) {
  return css`
    align-items: center;
    background: ${background};
    border-radius: 0.25rem;
    border: none;
    box-sizing: border-box;
    color: ${color};
    cursor: pointer;
    display: flex;
    font-size: 0.75rem;
    height: 2rem;
    justify-content: center;
    min-width: 5rem;
    padding: 0;
    
    & > div {
      background-color: transparent;
      border-radius: 0.25rem;
      box-sizing: border-box;
      height: 100%;
      padding: 0.5rem;
      width: 100%;
    }

    &:hover > div {
      background: rgba(0, 0, 0, 0.15);
    }

    &:active > div {
      background: rgba(0, 0, 0, 0.25);
    }
  `;
}

export default getStyles;
