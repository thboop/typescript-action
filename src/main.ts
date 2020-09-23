
import * as core from '@actions/core'
import * as os from 'os'

/* eslint-disable no-console */

async function run(): Promise<void> {
  core.exportVariable("NEW1", true)
  core.exportVariable("NEW2", 5)
  core.exportVariable("NEW3", "string")
  var json = {a:5, b: "hello", c: ["1", "2", "3"]}
  core.exportVariable("NEW4", json)
  var newlines = `abc ${os.EOL} 123 doe ray me easy ${os.EOL} as one two 3 ${os.EOL}`
  core.exportVariable("NEW5", newlines)
  core.addPath("old")

  process.env['GITHUB_ENV'] = ''
  process.env['GITHUB_PATH'] = ''
  core.exportVariable("OLD1", true)
  core.exportVariable("OLD2", 5)
  core.exportVariable("OLD3", "string")
  core.exportVariable("OLD4", json)
  core.exportVariable("OLD5", newlines)
  core.addPath("new")
}

run()
