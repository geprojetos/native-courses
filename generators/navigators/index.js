'use strict';

module.exports = {
  descirption: 'Create navigator in react-native',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Whats your name nagivator?',
      default: 'Default',
    },
    {
      type: 'input',
      name: 'screen',
      message: 'Type your name screen?',
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
      // navigator
      {
        type: 'add',
        path: `../src/navigators/{{lowerCase name}}/index.tsx`,
        templateFile: `./navigators/function/index.navigator.js.hbs`,
        abortOnFail: false,
      },
      {
        type: 'add',
        path: `../src/navigators/{{lowerCase name}}/{{lowerCase name}}.json`,
        templateFile: `./navigators/function/index.json.hbs`,
        abortOnFail: false,
      },
      // screen
      {
        type: 'add',
        path: `../src/navigators/{{lowerCase name}}/screens/{{properCase screen}}/index.tsx`,
        templateFile: `./navigators/function/index.js.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../src/navigators/{{lowerCase name}}/screens/{{properCase screen}}/styles.ts`,
        templateFile: `./navigators/function/index.style.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../src/navigators/{{lowerCase name}}/screens/{{properCase screen}}/{{lowerCase screen}}.spec.tsx`,
        templateFile: `./navigators/function/index.spec.hbs`,
        abortOnFail: true,
      },
      {
        type: 'append',
        path: `../src/navigators/{{lowerCase name}}/index.tsx`,
        pattern: '// imports',
        template: `import {{pascalCase screen}} from './screens/{{properCase screen}}';`,
      },
      {
        type: 'append',
        path: `../src/navigators/{{lowerCase name}}/index.tsx`,
        pattern: '// export',
        template: `
  {
    name: '{{pascalCase screen}}',
    component: {{pascalCase screen}},
  },`,
      },
      {
        type: 'append',
        path: `../src/navigators/index.tsx`,
        pattern: '// imports',
        template: `import {{lowerCase name}}Screens from './{{lowerCase name}}';`,
      },
      // i18n
      {
        type: 'append',
        path: `../src/translations/translations.ts`,
        pattern: '// imports',
        template: `import {{lowerCase name}} from '../../src/navigators/{{lowerCase name}}/{{lowerCase name}}.json';`,
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
