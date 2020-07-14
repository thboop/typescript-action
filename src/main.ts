import * as tc from '@actions/tool-cache'

/* eslint-disable no-console */

async function run(): Promise<void> {
  try {
    const node12Path = await tc.downloadTool('https://nodejs.org/dist/v12.7.0/node-v12.7.0.pkg');
    const node12ExtractedFolder = await tc.extractXar(node12Path, 'path/to/extract/to');

  } catch (e) {
    console.error(e)
  }
}

run()
