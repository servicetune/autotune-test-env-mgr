#!/usr/bin/env node

/**
 * This is a sample HTTP server.
 * Replace this with your implementation.
 */

import 'dotenv/config'
import { createServer, IncomingMessage, ServerResponse } from 'http'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { Config } from './config.js'

import { iApiAccess, ApiAccess } from './apiAccess';

const nodePath = resolve(process.argv[1])
const modulePath = resolve(fileURLToPath(import.meta.url))
const isCLI = nodePath === modulePath

var apiAccess:iApiAccess = new ApiAccess();

import helm from 'helm-ts';
import { Release,GlobalFlags,Repo,RepoListFlags,RepoAddFlags,InstallFlags,ListFlags } from 'helm-ts/dist/types.js'

const releases: Release[] = await helm.list();

(async () => {
  const releases = await helm.list({ namespace: 'openfaas' }); // list releases in openfaas namespace
  console.log(releases);
  /**
   * [
   *   {
   *     name: 'openfaas',
   *     namespace: 'openfaas',
   *     revision: '1',
   *     updated: '2020-10-25 22:02:45.325836 -0400 EDT',
   *     status: 'deployed',
   *     chart: 'openfaas-6.0.4',
   *     'app_version': ''
   *   }
   * ]
   */
})();


export default async function main(port: number = Config.port) {
  // apiAccess.getNamespace('default')
  // .then(namespace => {
  //   console.log(namespace.body.items[0]);
  // });

    
  

  if (isCLI) {
    // eslint-disable-next-line no-console
  }

  return 
}

if (isCLI) {
  main()
}
