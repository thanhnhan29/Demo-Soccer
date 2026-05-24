const fs = require('fs');

function createMockElement(name = 'div') {
  return {
    tagName: name.toUpperCase(),
    innerHTML: '',
    textContent: '',
    style: {},
    classList: {
      toggle: () => {},
      add: () => {},
      remove: () => {}
    },
    dataset: {},
    content: {
      cloneNode: () => createMockElement('div')
    },
    querySelector: (sel) => createMockElement(),
    querySelectorAll: (sel) => [createMockElement()],
    replaceChildren: () => {},
    setAttribute: () => {},
    removeAttribute: () => {},
    addEventListener: () => {},
    remove: () => {}
  };
}

// Mock browser globals
global.window = {
  location: {
    hash: ''
  },
  addEventListener: () => {}
};
global.document = {
  querySelector: (selector) => {
    if (selector === '.lang-button') return null;
    return createMockElement();
  },
  querySelectorAll: (selector) => {
    return [];
  },
  documentElement: {
    lang: ''
  }
};
global.localStorage = {
  getItem: () => null,
  setItem: () => {}
};
global.sessionStorage = {
  getItem: () => null,
  setItem: () => {}
};

// Return the actual dataset/matches.json content
const matchesData = JSON.parse(fs.readFileSync('dataset/matches.json', 'utf8'));
global.fetch = () => Promise.resolve({
  ok: true,
  json: () => Promise.resolve(matchesData)
});

global.navigator = {
  language: 'vi'
};

try {
  const code = fs.readFileSync('app.js', 'utf8');
  eval(code);
  console.log('app.js executed successfully with matches.json dataset!');
} catch (e) {
  console.error('Error executing app.js:', e);
}
