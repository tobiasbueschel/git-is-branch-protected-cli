'use strict'

const gitIsBranchProtected = require('git-is-branch-protected')

module.exports = async ({ branches, silent }) => {
  if (typeof branches !== 'string') {
    throw new TypeError(`Expected a comma-separated list for "branches", got ${typeof branches}`)
  }

  // 1. Check allowed branches
  let allowedBranches = []
  if (branches) {
    // create an Array of Strings from comma-separated list and remove any whitespaces
    allowedBranches = branches.split(',').map(b => b.trim())
  }

  // 2. Check whether branch is protected
  // We let "gitIsBranchProtected" check which branch we are on, hence, passing "undefined"
  const isProtected = await gitIsBranchProtected(undefined, allowedBranches)

  if (isProtected) {
    if (!silent) {
      console.error('Branch is protected')
    }
    process.exit(1)
  } else {
    process.exit(0)
  }
}
