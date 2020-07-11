'use strict';

module.exports = {
  descirption: 'Create screen in react-native',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Whats your name screen?',
      default: 'Default',
    },
    {
      type: 'list',
      name: 'componentType',
      message: 'Type your component?',
      default: 'none',
      choices: [
        {
          name: 'Function component',
          value: 'function',
        },
      ],
    },
  ],
  actions: (data) => {
    let actions = [];

    actions = [
      {
        type: 'add',
        path: `../src/screens/{{properCase name}}/index.tsx`,
        templateFile: `./screens/function/index.js.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../src/screens/{{properCase name}}/styles.ts`,
        templateFile: `./screens/function/index.style.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../src/screens/{{properCase name}}/index.spec.tsx`,
        templateFile: `./screens/function/index.spec.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../src/screens/{{properCase name}}/index.json`,
        templateFile: `./screens/function/index.json.hbs`,
        abortOnFail: true,
      },
      {
        type: 'append',
        path: `../src/screens/index.tsx`,
        pattern: '// imports',
        template: `import {{properCase name}} from './{{properCase name}}';`,
      },
      {
        type: 'append',
        path: `../src/screens/index.tsx`,
        pattern: '// exports',
        template: `  {{properCase name}},`,
      },
      {
        type: 'append',
        path: `../src/translations/translations.ts`,
        pattern: '// imports',
        template: `import {{lowerCase name}} from '../../src/screens/{{properCase name}}/index.json';`,
      },
      {
        type: 'append',
        path: `../src/translations/translations.ts`,
        pattern: '// exports',
        template: `  {{lowerCase name}},`,
      },
      {
        type: 'append',
        path: `../src/i18n.ts`,
        pattern: '// imports',
        template: `  {{lowerCase name}},`,
      },
      {
        type: 'append',
        path: `../src/i18n.ts`,
        pattern: '// en',
        template: `      {{lowerCase name}},`,
      },
    ];
    return actions;
  },
};
