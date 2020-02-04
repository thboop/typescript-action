import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    core.exportVariable('LD_LIBRARY_PATH', 'test')
    core.info('Ran the action')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
