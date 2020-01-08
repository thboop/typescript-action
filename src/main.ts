import * as core from '@actions/core'
import * as github from '@actions/github'
import {Webhooks} from '@actions/github/lib/interfaces'

async function run(): Promise<void> {
  try {
    const payload = github.context.payload
    core.info('running the action')
    if ((payload as Webhooks.WebhookPayloadPush).head_commit) {
      core.info(
        `The head commit is: ${
          (payload as Webhooks.WebhookPayloadPush).head_commit
        }`
      )
    }

    if (
      (payload as Webhooks.WebhookPayloadPullRequestReview).pull_request.number
    ) {
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
