
import * as core from '@actions/core'

/* eslint-disable no-console */

async function run(): Promise<void> {
  core.exportVariable("new1", true)
  core.exportVariableOld("old1", true)
  core.exportVariable("new2", 5)
  core.exportVariableOld("old2", 5)
  core.exportVariable("new3", "string")
  core.exportVariableOld("old3", "string")
  var json = {a:5, b: "hello", c: ["1", "2", "3"]}
  core.exportVariable("new4", json)
  core.exportVariableOld("old4", json)
}

run()
