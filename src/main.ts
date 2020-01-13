import * as core from '@actions/core'
import * as github from '@actions/github'
import * as Webhooks from '@octokit/webhooks'

async function run(): Promise<void> {
  try {
    const payload = github.context.payload
    core.info('running the action')
    if (github.context.eventName === 'push') {
      const pushPayload = github.context.payload as Webhooks.WebhookPayloadPush
      core.info(`The head commit is: ${pushPayload.head_commit}`)
    }

    if (github.context.eventName === 'pull_request_review') {
      core.info(
        `The pr number is: ${
          (payload as Webhooks.WebhookPayloadPullRequest).pull_request.number
        }`
      )
    }

    if (payload && 'issue' in payload) {
      core.info(`The issue is: ${JSON.stringify(payload.issue.number)}`)
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
