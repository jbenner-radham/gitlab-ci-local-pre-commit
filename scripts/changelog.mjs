import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import pkg from '../package.json' with { type: 'json' };

const changelogPath = path.join(import.meta.dirname, '..', 'CHANGELOG.md');
const changelog = fs.readFileSync(changelogPath).toString();
const [major, minor, patch] = pkg.version.split('.');
const headerPattern = new RegExp(String.raw`^\[${major}\.${minor}\.${patch}] - \d{4}-\d{2}-\d{2}$`, 'm');
const referencePattern = new RegExp(
    String.raw`^\[${major}\.${minor}\.${patch}]: https://github.com/jbenner-radham/gitlab-ci-local-pre-commit/compare/v\d+.\d+.\d+\.\.\.v${major}\.${minor}\.${patch}$`,
    'm',
);

if (headerPattern.test(changelog) && referencePattern.test(changelog)) {
    process.exit(0);
}

console.error('Release header and/or reference link not found in changelog.');

process.exit(1);
