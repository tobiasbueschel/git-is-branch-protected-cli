#!/usr/bin/env node
'use strict'

const meow = require('meow')
const gitIsBranchProtectedCli = require('./')

const cli = meow(
  `
	Usage
	  gibp [options]

	Options
    --protected-branches, -b Specify protected branches [Default: master, main, develop]
    --silent, -s Do not show any error messages

	Examples
	  gibp -b "master, main, develop"
	  gibp -b master
`,
  {
    flags: {
      branches: {
        type: 'string',
        alias: 'b',
        default: 'master, main, develop'
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
