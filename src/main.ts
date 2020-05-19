import {Octokit} from '@octokit/rest'
import {env} from 'process'
import {getInput} from '@actions/core'

/* eslint-disable no-console */

async function run(): Promise<void> {
  try {

    var baseUrl = env['GITHUB_API_URL'] || "";
    baseUrl = baseUrl.substring(0, baseUrl.length - 7);
    console.log("baseurl is " + baseUrl)
    var mykit = new Octokit({
      baseUrl,
      auth: 'token ' + getInput('token')
    })

    const repo = await mykit.repos.getBranch({
      owner: 'ghe-admin',
      repo: 'asdf',
      branch: 'master'
    })
    console.log("v3 got the response is" + JSON.stringify(repo))
    const repository = await mykit.graphql(
      '{repository(owner:"ghe-admin", name:"asdf"){name}}'
    )
    console.log("graphql got the response is" + JSON.stringify(repository))
  } catch (e) {
    console.error(e)
  }
}

run()
