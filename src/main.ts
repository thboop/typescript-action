import {getOctokit, context} from '@actions/github'
import {getInput} from '@actions/core'

/* eslint-disable no-console */

async function run(): Promise<void> {
  try {
    console.log("comment is" + JSON.stringify(context.payload.comment?.id))
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
