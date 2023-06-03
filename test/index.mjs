import path from 'path';
import wantedApi from '../dist/main.esm.mjs';
const __dirname = path.resolve();
wantedApi([
  {
    url: 'http://10.200.100.14:8294/v2/api-docs?group=proxy',
    outDir: path.join(__dirname, './a'),
    templatePath: {
      api: path.join(__dirname, './apis.eta'),
      interface: path.join(__dirname, './interface.eta'),
    }
  },
  {
    url: 'http://10.200.100.14:8294/v2/api-docs?group=proxy',
    outDir: path.join(__dirname, './b'),
    templatePath: {
      api: path.join(__dirname, './apis.eta'),
      interface: path.join(__dirname, './interface.eta'),
    }
  }
])