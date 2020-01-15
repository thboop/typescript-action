import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    core.info('running the action')
    core.info(`The issue number is: ${github.context.issue.number}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
