import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    core.info(`Issue context is: ${JSON.stringify(github.context.issue)}`)
    core.info(
      `PR number is is: ${JSON.stringify(
        github.context.payload.pull_request?.number
      )}`
    )
    core.info(`Action is: ${JSON.stringify(github.context.payload.action)}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
