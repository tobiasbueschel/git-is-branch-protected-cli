const gitIsBranchProtectedCli = require('.')
let branch = require('git-branch')
jest.mock('git-branch')

let options = {}

beforeEach(() => {
  // mock global functions
  process.exit = jest.fn()
  global.console.error = jest.fn()

  options = {
    branches: 'master, develop',
    silent: true
  }
})

it('should throw if "branches" is not a string', async () => {
  options.branches = 123
  await expect(gitIsBranchProtectedCli(options)).rejects.toThrow()
  options.branches = []
  await expect(gitIsBranchProtectedCli(options)).rejects.toThrow()
  options.branches = false
  await expect(gitIsBranchProtectedCli(options)).rejects.toThrow()
})

it('should exit with 1 if currently on "master" and no branches are passed in', async () => {
  branch.mockReturnValue(Promise.resolve('master'))

  await gitIsBranchProtectedCli(options)
  expect(process.exit).toHaveBeenCalledWith(1)
})

it('should exit with 1 if currently on "develop" and no branches are passed in', async () => {
  branch.mockReturnValue(Promise.resolve('develop'))

  await gitIsBranchProtectedCli(options)
  expect(process.exit).toHaveBeenCalledWith(1)
})

it('should exit with 0 if currently on "feature" and no branches are passed in', async () => {
  branch.mockReturnValue(Promise.resolve('feature'))

  await gitIsBranchProtectedCli(options)
  expect(process.exit).toHaveBeenCalledWith(0)
})

it('should exit with 0 if currently on "develop" and only "master" is protected', async () => {
  options.branches = 'master'
  branch.mockReturnValue(Promise.resolve('develop'))

  await gitIsBranchProtectedCli(options)
  expect(process.exit).toHaveBeenCalledWith(0)
})

it('should exit with 0 if currently on "master" no branches are protected', async () => {
  options.branches = ''
  branch.mockReturnValue(Promise.resolve('master'))

  await gitIsBranchProtectedCli(options)
  expect(process.exit).toHaveBeenCalledWith(0)
})

it('should log when "silent" mode is disabled', async () => {
  options.silent = false
  branch.mockReturnValue(Promise.resolve('master'))

  await gitIsBranchProtectedCli(options)
  expect(global.console.error).toHaveBeenCalledWith('Branch is protected')
})

it('should NOT log when "silent" mode is active', async () => {
  branch.mockReturnValue(Promise.resolve('master'))

  await gitIsBranchProtectedCli(options)
  expect(global.console.error).not.toHaveBeenCalled()
})
