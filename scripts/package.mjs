import process from 'node:process';
import pkg from '../package.json' with { type: 'json' };

const pkgVersion = pkg.version;
const gitlabCiLocalVersion = pkg.dependencies['gitlab-ci-local'];

if (pkgVersion === gitlabCiLocalVersion) {
    process.exit(0);
}

console.error('Package version does not match gitlab-ci-local version.');

process.exit(1);
