import {GitHub} from '@actions/github'
import {env} from 'process'
import {getInput} from '@actions/core'

/* eslint-disable no-console */

async function run(): Promise<void> {
  try {

    var baseUrl = env['GITHUB_API_URL'] || "";
    console.log("baseurl is " + baseUrl)
    var mykit = new GitHub({
      baseUrl,
      auth: 'token ' + getInput('token')
    })

    const repo = await mykit.repos.getBranch({
      owner: getInput('owner'),
      repo: getInput('repo'),
      branch: 'master'
    })
    console.log("v3 got the response is" + JSON.stringify(repo))
    const repository = await mykit.graphql(
      '{repository(owner:"' + getInput('owner') + '", name:"' + getInput("repo") + '"){name}}'
    )
    console.log("graphql got the response is" + JSON.stringify(repository))
  } catch (e) {
    console.error(e)
  }
}

run()
