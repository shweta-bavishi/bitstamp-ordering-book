import {Platform} from 'react-native';

const fontFamily = Platform.select({android: 'sans-serif', ios: 'Helvetica'});
const fontWeightRegular = 'normal';
const fontWeightBold = 'bold';

export default {
  headingText: theme => ({
    fontFamily,
    color: theme.headingTextColor,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  }),
  headingTextBold: theme => ({
    fontFamily,
    color: theme.headingTextColor,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  }),
  subheadingText: theme => ({
    fontFamily,
    color: theme.subHeadingText,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  }),
  subheadingTextBold: theme => ({
    fontFamily,
    color: theme.subHeadingText,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  }),
  bodyText: theme => ({
    fontFamily,
    color: theme.bodyTextColor,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  }),
  bodyTextBold: theme => ({
    fontFamily,
    color: theme.bodyTextColor,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  }),
  buttonText: {
    fontFamily,
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 2,
    paddingBottom: 1,
  },
};
