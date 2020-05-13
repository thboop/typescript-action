import * as tc from '@actions/tool-cache'
/* eslint-disable no-console */

async function run(): Promise<void> {
  try {
    const node12Path = await tc.downloadTool(
      'https://nodejs.org/dist/v12.7.0/node-v12.7.0.pkg'
    )
    const path = await tc.extractXar(node12Path, 'test/test2')
    console.log(path)
  } catch (e) {
    console.error(e)
  }
}

run()
