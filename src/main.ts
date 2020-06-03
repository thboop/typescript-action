import {getOctokit, context} from '@actions/github'
import { GitHub, getOctokitOptions } from '@actions/github/lib/utils'
import { enterpriseServer220Admin } from '@octokit/plugin-enterprise-server'
import {env} from 'process'
import {getInput} from '@actions/core'
import * as exec from '@actions/exec'

/* eslint-disable no-console */

async function run(): Promise<void> {
  try {
    console.log("comment is" + JSON.stringify(context.payload.comment?.id))

    var baseUrl = env['GITHUB_API_URL'] || "";
    //var mykit = getOctokit(getInput('token'), { baseUrl})
    var test = GitHub.plugin(enterpriseServer220Admin)
    var mykit = new test(getOctokitOptions(getInput('token')))

    const response = await mykit.enterpriseAdmin.createUser({
      login: "octocat1",
      email: "thomasboop+1@gmail.com",
    });
    console.log("status is " + JSON.stringify(response))


  } catch (e) {
    console.error(e)
  }
}

run()
