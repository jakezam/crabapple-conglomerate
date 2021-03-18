import { Api } from '../services/api';

export class Environment {
  constructor() {
    this.api = new Api();
  }

  api: Api;
}

export const env = new Environment();
