
import * as core from '@actions/core'

/* eslint-disable no-console */

async function run(): Promise<void> {
  core.exportVariable("NEW1", true)
  core.exportVariableOld("OLD1", true)
  core.exportVariable("NEW2", 5)
  core.exportVariableOld("OLD2", 5)
  core.exportVariable("NEW3", "string")
  core.exportVariableOld("OLD3", "string")
  var json = {a:5, b: "hello", c: ["1", "2", "3"]}
  core.exportVariable("NEW4", json)
  core.exportVariableOld("OLD4", json)
}

run()
