
import * as core from '@actions/core'
import * as os from 'os'

/* eslint-disable no-console */

async function run(): Promise<void> {
  console.log(core.getInput("test"))
}

run()
