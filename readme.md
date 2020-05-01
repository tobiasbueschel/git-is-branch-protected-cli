# git-is-branch-protected-cli

[![Build Status](https://img.shields.io/travis/tobiasbueschel/git-is-branch-protected-cli/master.svg?style=flat-square)](https://travis-ci.com/tobiasbueschel/git-is-branch-protected-cli)
[![version](https://img.shields.io/npm/v/git-is-branch-protected-cli.svg?style=flat-square)](http://npm.im/git-is-branch-protected-cli)
[![downloads](https://img.shields.io/npm/dm/git-is-branch-protected-cli.svg?style=flat-square)](http://npm-stat.com/charts.html?package=git-is-branch-protected-cli)
[![codecov](https://img.shields.io/codecov/c/github/tobiasbueschel/git-is-branch-protected-cli.svg?style=flat-square)](https://codecov.io/gh/tobiasbueschel/git-is-branch-protected-cli?branch=master)

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

## Why use this tool?

It's easy to forget setting up branch protection on GitHub, GitLab or any other Git hosting service, and before you know it, you've pushed to `master` during your late night coding session. Or perhaps you have scripted automatic updates that will push and create pull requests to several repositories at once and want to ensure you're not pushing to the wrong branch?

This tool comes to the rescue and through [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) and [husky](https://github.com/typicode/husky), prevents you from accidentally pushing to your remote `master` or `develop` branch. All you need to do is install `husky` and `git-is-branch-protected-cli` to your project:

```bash
npm install husky --save-dev
```

and add the following to your `package.json`:

```json
{
  "husky": {
    "hooks": {
      "pre-push": "gibp",
      "...": "..."
    }
  }
}
```

After this setup, the `pre-push` hook will fail if you are on a protected branch as `gibp` returns exit code `1`, thereby preventing you from accidentally pushing to the wrong remote branch.

## Related

- [git-is-branch-protected](https://github.com/tobiasbueschel/git-is-branch-protected) - API for this CLI.
- [git-push-pr](https://github.com/tobiasbueschel/git-push-pr) - Push and open pull request in your default browser.

## License

MIT © [Tobias Büschel](https://github.com/tobiasbueschel)
