import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    core.info(`Issue context is: ${JSON.stringify(github.context.issue)}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
