'use strict';

module.exports = {
  descirption: 'Create shared component in react-native',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Whats your name shared component?',
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
        path: `../src/shared/{{properCase name}}/index.tsx`,
        templateFile: `./shared/function/index.js.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../src/shared/{{properCase name}}/index.ts`,
        templateFile: `./shared/function/index.style.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../src/shared/{{properCase name}}/index.spec.tsx`,
        templateFile: `./shared/function/index.spec.hbs`,
        abortOnFail: true,
      },
      {
        type: 'append',
        path: `../src/shared/index.tsx`,
        pattern: '// imports',
        template: `import {{properCase name}} from './{{properCase name}}';`,
        abortOnFail: true,
      },
      {
        type: 'append',
        path: `../src/shared/index.tsx`,
        pattern: '// exports',
        template: `  {{properCase name}},`,
        abortOnFail: true,
      },
    ];
    return actions;
  },
};