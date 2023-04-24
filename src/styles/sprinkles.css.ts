import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { themeContract } from './themeContract.css';

const sizes = {
  none: '0',
  small: '4px',   
  medium: '8px',
  large: '16px',
};

const atomicProps = defineProperties({
  conditions: {
    default: {},
  },
  defaultCondition: 'default',
  properties: {
    fontWeight: {
      thin: '100',
      light: '300',
      regular: '400',
      medium: '500',
      bold: '700',
      black: '900',
    },
    color: themeContract.colors,
    backgroundColor: themeContract.colors,
    paddingTop: sizes,
    paddingBottom: sizes,
    paddingLeft: sizes,
    paddingRight: sizes,
    marginTop: sizes,
    marginBottom: sizes,
    marginLeft: sizes,
    marginRight: sizes,
  },
});

export const sprinkles = createSprinkles(atomicProps);