/* eslint-disable */

const path = require('path');
const markdownMagic = require('markdown-magic');
const fs = require('fs');

/**
 * Extract NPM, NAMESPACE and NAME from package.json
 */
function nameExtraction() {
  const packageJson = fs.readFileSync('package.json', 'utf8', function(err, data) {
    if (err) {
      console.log('ERROR: Unable to read package.json file', err);
    }
  })

  pName = JSON.parse(packageJson).name;

  let npmStart = pName.indexOf('@');
  let namespaceStart = pName.indexOf('/');
  let nameStart = pName.indexOf('-');

  let result = {
    'npm': pName.substring(npmStart, namespaceStart),
    'namespace': pName.substring(namespaceStart + 1, nameStart),
    'namespaceCap': pName.substring(namespaceStart + 1)[0].toUpperCase() + pName.substring(namespaceStart + 2, nameStart),
    'name': pName.substring(nameStart + 1),
    'nameCap': pName.substring(nameStart + 1)[0].toUpperCase() + pName.substring(nameStart + 2)
  };

  return result;
};

/**
 * Replace all instances of [npm], [name], [Name], [namespace] and [Namespace] accordingly
 */
function formatTemplateFileContents(content, destination) {
  let nameExtractionData = nameExtraction();
  let result = content;

  /**
   * Replace placeholder strings
   */
  result = result.replace(/\[npm]/g, nameExtractionData.npm);
  result = result.replace(/\[name]/g, nameExtractionData.name);
  result = result.replace(/\[Name]/g, nameExtractionData.nameCap);
  result = result.replace(/\[namespace]/g, nameExtractionData.namespace);
  result = result.replace(/\[Namespace]/g, nameExtractionData.namespaceCap);

  /**
   * Cleanup line breaks.
   */
  result = result.replace(/(\r\n|\r|\n)[\s]+(\r\n|\r|\n)/g, '\r\n\r\n'); // Replace lines containing only whitespace with a carriage return.
  result = result.replace(/>(\r\n|\r|\n){2,}/g, '>\r\n'); // Remove empty lines directly after a closing html tag.
  result = result.replace(/>(\r\n|\r|\n)```/g, '>\r\n\r\n```'); // Ensure an empty line before code samples.
  result = result.replace(/>(\r\n|\r|\n){2,}```(\r\n|\r|\n)/g, '>\r\n```\r\n'); // Ensure no empty lines before close of code sample.
  result = result.replace(/([^(\r\n|\r|\n)])(\r\n|\r|\n)+#/g, "$1\r\n\r\n#"); // Ensure empty line before header sections.

  /**
   * Write the result to the destination file.
   */
  fs.writeFileSync(destination, result, { encoding: 'utf8'});
};

function formatApiTableContents(content, destination) {
  const nameExtractionData = nameExtraction();
  const wcName = nameExtractionData.namespace + '-' + nameExtractionData.name;

  let result = content;

  result = result
    .replace(/\r\n|\r|\n####\s`([a-zA-Z]*)`/g, `\r\n#### <a name="$1"></a>\`$1\`<a href="#${wcName}" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>`)
    .replace(/\r\n|\r|\n\|\s`([a-zA-Z]*)`/g, '\r\n| [$1](#$1)')
    .replace(/\| \[\]\(#\)/g, "");

  fs.writeFileSync(destination, result, { encoding: 'utf8'});

  fs.readFile('./demo/api.md', 'utf8', function(err, data) {
    formatTemplateFileContents(data, './demo/api.md');
  });
}


/**
 * Compiles `./docs/partials/index.md` -> `./demo/index.md`
 */
function processPartials() {
  const configDemo = {
    matchWord: 'AURO-GENERATED-CONTENT'
  };

  const markdownPath = path.join(__dirname, '../docs/partials/usingValidation.md');

  markdownMagic(markdownPath, configDemo);
}

/**
 * Compiles `./docs/partials/index.md` -> `./demo/index.md`
 */
function processDemo() {
  const callback = function(updatedContent, outputConfig) {
    if (fs.existsSync('./demo/index.md')) {
      fs.readFile('./demo/index.md', 'utf8', function(err, data) {
        formatTemplateFileContents(data, './demo/index.md');
      });
    } else {
      console.log('ERROR: ./demo/index.md file is missing');
    }
  };

  const configDemo = {
    matchWord: 'AURO-GENERATED-CONTENT',
    outputDir: './demo'
  };

  const markdownPath = path.join(__dirname, '../docs/partials/index.md');

  markdownMagic(markdownPath, configDemo, callback);
}

processPartials();
processDemo();
