# git-is-branch-protected-cli

[![Build Status](https://img.shields.io/travis/tobiasbueschel/git-is-branch-protected-cli/master.svg?style=flat-square)](https://travis-ci.com/tobiasbueschel/git-is-branch-protected-cli)
[![version](https://img.shields.io/npm/v/git-is-branch-protected-cli.svg?style=flat-square)](http://npm.im/git-is-branch-protected-cli)
[![downloads](https://img.shields.io/npm/dm/git-is-branch-protected-cli.svg?style=flat-square)](http://npm-stat.com/charts.html?package=git-is-branch-protected-cli)
[![codecov](https://img.shields.io/codecov/c/github/tobiasbueschel/git-is-branch-protected-cli.svg?style=flat-square)](https://codecov.io/gh/tobiasbueschel/git-is-branch-protected-cli?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/tobiasbueschel/git-is-branch-protected-cli.svg?style=flat-square)](https://greenkeeper.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![MIT License](https://img.shields.io/npm/l/git-is-branch-protected-cli.svg?style=flat-square)](http://opensource.org/licenses/MIT)

> CLI to check whether current Git branch is protected

## Install

```
$ npm install --global git-is-branch-protected-cli
```

## Usage

```
$ gibp --help

  Usage
    gibp [options]

  Options
    --protected-branches, -b Specify protected branches [Default: master, develop]
    --silent, -s Do not show any error messages

  Examples
    $ gibp -b "master, develop"
    $ gibp -b master
```

## Related

- [git-is-branch-protected](https://github.com/tobiasbueschel/git-is-branch-protected) - API for this CLI.
- [git-push-pr](https://github.com/tobiasbueschel/git-push-pr) - Push and open pull request in your default browser.

## License

MIT © [Tobias Büschel](https://github.com/tobiasbueschel)
