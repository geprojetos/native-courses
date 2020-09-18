'use strict';

module.exports = {
  descirption: 'Create component in react native',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Whats your name component?',
      default: 'Default',
    },
    {
      type: 'input',
      name: 'navigator',
      message: 'Whats your name navigator?',
      default: 'Default',
    },
    {
      type: 'input',
      name: 'screen',
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
        path: `../src/navigators/{{lowerCase navigator}}/screens/{{properCase screen}}/components/{{properCase name}}/index.tsx`,
        templateFile: `./components/function/index.js.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../src/navigators/{{lowerCase navigator}}/screens/{{properCase screen}}/components/{{properCase name}}/styles.ts`,
        templateFile: `./components/function/index.style.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../src/navigators/{{lowerCase navigator}}/screens/{{properCase screen}}/components/{{properCase name}}/{{lowerCase name}}.spec.tsx`,
        templateFile: `./components/function/index.spec.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../src/navigators/{{lowerCase navigator}}/screens/{{properCase screen}}/components/{{properCase name}}/{{lowerCase name}}.stories.tsx`,
        templateFile: `./components/function/index.stories.hbs`,
        abortOnFail: true,
      },
      {
        type: 'append',
        path: `../storybook/stories/index.js`,
        pattern: '// imports',
        template: `import '../../src/navigators/{{lowerCase navigator}}/screens/{{properCase screen}}/components/{{properCase name}}/{{lowerCase name}}.stories';`,
        abortOnFail: true,
      },
    ];
    return actions;
  },
};
