import {getOctokit, context} from '@actions/github'
import {getInput} from '@actions/core'

/* eslint-disable no-console */

async function run(): Promise<void> {
  try {
    console.log("run id is" + JSON.stringify(context.runId))
    console.log("run number is" + JSON.stringify(context.runNumber))
    const octokit = getOctokit(getInput("token"))
    const data = await octokit.pulls.get({
      owner: 'actions',
      repo: 'toolkit',
      pull_number: 489,
      mediaType: {
        format: 'diff'
      }
  });
  console.log("data is" + JSON.stringify(data))


  } catch (e) {
    console.error(e)
  }
}

run()
