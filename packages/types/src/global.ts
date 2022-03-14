// Copyright 2020-2022 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {ApiPromise, Keyring} from '@polkadot/api';
import {ApiDecoration} from '@polkadot/api/types';
import Pino from 'pino';
import {Store, DynamicDatasourceCreator} from './interfaces';

type ApiAt = ApiDecoration<'promise'> & {rpc: ApiPromise['rpc']};

let store: Store;
let api: ApiPromise;
let patchedApi: ApiPromise;
let logger: Pino.Logger;
let keyring: Keyring;

function setGlobal(vars: {
  logger: Pino.Logger;
  api: ApiPromise;
  patchedApi: ApiPromise;
  store: Store;
  keyring: Keyring;
}) {
  store = vars.store;
  api = vars.api;
  patchedApi = vars.patchedApi;
  logger = vars.logger;
  keyring = vars.keyring;
}

export {store, api, patchedApi, logger, keyring, setGlobal};
