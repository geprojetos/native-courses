import 'react-native';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Ignore React Web errors when using React Native
// but still show relevant errors
const suppressedErrors = /(React does not recognize the.*prop on a DOM element|Unknown event handler property|is using uppercase HTML|Received `true` for a non-boolean attribute `accessible`|If you want to write it to the DOM|This ensures that you're testing the behavior the user would see in the browser|The tag.*is unrecognized in this browser)|is using incorrect casing|Received `true` for a non-boolean attribute `enabled`/;
const realConsoleError = console.error; // eslint-disable-line
// eslint-disable-next-line
console.error = (message) => {
  if (message.match(suppressedErrors)) {
    return;
  }
  realConsoleError(message);
};

configure({adapter: new Adapter()});
