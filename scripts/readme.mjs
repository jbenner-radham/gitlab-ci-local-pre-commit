import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import Mustache from 'mustache';
import pkg from '../package.json' with { type: 'json' };

const templatePath = path.join(import.meta.dirname, 'templates', 'readme.mustache');
const template = fs.readFileSync(templatePath).toString();
const readmePath = path.join(import.meta.dirname, '..', 'README.md');
const readme = fs.readFileSync(readmePath).toString();
const rendered = Mustache.render(template, { version: pkg.version });

if (readme === rendered) {
    process.exit(0);
}

fs.writeFileSync(readmePath, rendered);
console.error('README.md was incorrect. A new version has been written.');

process.exit(1);
