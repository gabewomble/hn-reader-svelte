import { css } from 'emotion';
import colors from '../../styles/colors';

const { clouds, white, granite, greenSea } = colors;

function getStyles() {
  return css`
    align-items: center;
    border-bottom: 0.1rem solid ${clouds};
    background: ${white};
    color: ${granite};
    display: flex;
    height: 5rem;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;

    & a {
      color: ${greenSea};
      margin: 0.5rem;
    }
  `;
}

export default getStyles;
