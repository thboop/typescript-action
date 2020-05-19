import {Octokit} from '@octokit/rest'
import {env} from 'process'
import {getInput} from '@actions/core'

/* eslint-disable no-console */

async function run(): Promise<void> {
  try {

    var baseUrl = env['GITHUB_API_URL'];
    var mykit = new Octokit({
      baseUrl: env['GITHUB_API_URL'],
      auth: 'token ' + getInput('token')
    })

    const repo = await mykit.repos.getBranch({
      owner: 'ghe-admin',
      repo: 'asdf',
      branch: 'master'
    })
    console.log("first repo is" + repo)
    const repository = await mykit.graphql(
      '{repository(owner:"ghe-admin", name:"asdf"){name}}'
    )
    console.log("second repo is" + repository)
  } catch (e) {
    console.error(e)
  }
}

run()
