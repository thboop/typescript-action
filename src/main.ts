import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    core.info(`Issue number is: ${JSON.stringify(github.context.issue.number)}`)
    core.info(
      `PR number is is: ${JSON.stringify(
        github.context.payload.pull_request?.number
      )}`
    )
    core.info(`Action is: ${JSON.stringify(github.context.payload.action)}`)
    core.info(
      `pull_request is: ${JSON.stringify(
        github.context.payload.pull_request?.number
      )}`
    )
    core.info(
      `pullRequest is: ${JSON.stringify(
        github.context.payload.pullRequest?.number
      )}`
    )
    core.info(
      `issue is: ${JSON.stringify(github.context.payload.issue?.number)}`
    )
    core.info(`root is: ${JSON.stringify(github.context.payload.number)}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
