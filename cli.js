#!/usr/bin/env node
'use strict'

const meow = require('meow')
const gitIsBranchProtectedCli = require('./')

const cli = meow(
  `
	Usage
	  gibp [options]

	Options
    --protected-branches, -b Specify protected branches [Default: master, develop]
    --silent, -s Do not show any error messages

	Examples
	  $ gibp -b "master, develop"
	  $ gibp -b master
`,
  {
    flags: {
      branches: {
        type: 'string',
        alias: 'b',
        default: 'master, develop'
      },
      silent: {
        type: 'boolean',
        default: false,
        alias: 's'
      }
    }
  }
)

gitIsBranchProtectedCli(cli.flags)
