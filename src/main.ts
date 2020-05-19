import {Octokit} from '@octokit/rest'
import {env} from 'process'
import {getInput} from '@actions/core'

/* eslint-disable no-console */

async function run(): Promise<void> {
  try {
    var mykit = new Octokit({
      baseUrl: env['GITHUB_API_URL'],
      auth: 'token ' + getInput('token')
    })
    console.log(
      mykit.repos.getBranch({
        owner: 'ghe-admin',
        repo: 'asdf',
        branch: 'master'
      })
    )
    const repository = await mykit.graphql(
      '{repository(owner:"ghe-admin", name:"asdf"){name}}'
    )
    console.log(repository)
  } catch (e) {
    console.error(e)
  }
}

run()
