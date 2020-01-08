import * as core from '@actions/core'
import * as github from '@actions/github'
import {Webhooks} from '@actions/github/lib/interfaces'

async function run(): Promise<void> {
  try {
    const payload = github.context.payload

    if ((payload as Webhooks.WebhookPayloadPush).head_commit) {
      core.info(
        `The head commit is: ${
          (payload as Webhooks.WebhookPayloadPush).head_commit
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
