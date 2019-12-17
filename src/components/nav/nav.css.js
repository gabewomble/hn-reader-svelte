import { css } from 'emotion';
import colors from '../../styles/colors';

const { nephritis, clouds } = colors;

function getStyles() {
  return css`
    align-items: center;
    background: ${nephritis};
    color: ${clouds};
    display: flex;
    height: 5rem;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;

    & a {
      color: ${clouds};
      margin: 0.5rem;
    }
  `;
}

export default getStyles;
