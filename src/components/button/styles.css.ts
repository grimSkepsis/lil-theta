import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../styles/sprinkles.css';

export const buttonVariants = recipe({
  base: sprinkles({
    paddingTop: 'small',
    paddingBottom: 'small',
    paddingLeft: 'medium',
    paddingRight: 'medium',
  }),
  variants: {
    variant: {
      primary: sprinkles({
        backgroundColor: 'primary',
        color: 'primaryContent',
      }),
      secondary: sprinkles({
        backgroundColor: 'secondary',
        color: 'secondaryContent',
      }),
      tertiary: sprinkles({
        backgroundColor: 'tertiary',
        color: 'tertiaryContent',
      }),
    },
  },
});