import { css } from 'emotion';

function getStyles({
  width,
}) {
  return css`
    border: 0.075rem solid grey;
    border-radius: 0.25rem;
    box-sizing: border-box;
    color: #444;
    font-size: 1rem;
    height: 2rem;
    padding: 0 0.25rem;
    width: ${width};

    &:focus {
      border-color: #333;
    }
  `;
}

export default getStyles;
