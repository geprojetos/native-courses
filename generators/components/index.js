'use strict';

module.exports = {
  descirption: 'Create component in reactjs',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Whats your name component?',
      default: 'Default',
    },
    {
      type: 'input',
      name: 'module',
      message: 'Whats your name page?',
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
        path: `../src/screens/{{properCase module}}/components/{{properCase name}}/index.tsx`,
        templateFile: `./components/function/index.js.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../src/screens/{{properCase module}}/components/{{properCase name}}/index.ts`,
        templateFile: `./components/function/index.style.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../src/screens/{{properCase module}}/components/{{properCase name}}/index.spec.tsx`,
        templateFile: `./components/function/index.spec.hbs`,
        abortOnFail: true,
      },
    ];
    return actions;
  },
};
