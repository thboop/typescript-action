import {getOctokit, context} from '@actions/github'
import { GitHub, getOctokitOptions } from '@actions/github/lib/utils'
import { enterpriseServer220Admin } from '@octokit/plugin-enterprise-server'
import {env} from 'process'
import {getInput} from '@actions/core'
import * as exec from '@actions/exec'

/* eslint-disable no-console */

async function run(): Promise<void> {
  try {
    console.log("comment is" + JSON.stringify(context.payload.comment))

    var baseUrl = env['GITHUB_API_URL'] || "";
    //var mykit = getOctokit(getInput('token'), { baseUrl})
    var test = GitHub.plugin(enterpriseServer220Admin)
    var mykit = new test(getOctokitOptions(getInput('token')))
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

    const tokens = await mykit.enterpriseAdmin.listPersonalAccessTokens()
    console.log("tokens " + JSON.stringify(tokens))


  } catch (e) {
    console.error(e)
  }
}

run()
