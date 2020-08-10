function remote(value) {
  const code = `
import { tratedException } from "../index";

import API from "../../services/api";

export interface Args${value}Find {
    id: number;
}

export interface Args${value}sStore {
    name: string;
}

export interface Args${value}Update {
    id: number;
    name: string;
}

export interface Args${value}Destroy {
    id: number;
}

async function find(args: Args${value}Find) {
    const response = await API.get(\`/SUA-ROTA/$\{args.id}\`);
    return tratedException(response);
}

async function findAll() {
    const response = await API.get(\`/SUA-ROTA\`);
    return tratedException(response);
}

async function store(args: Args${value}sStore) {
    const response = await API.post(\`/SUA-ROTA/$\{args}\`);
    return tratedException(response);
}

async function update(args: Args${value}Update) {
    const response = await API.put(\`/SUA-ROTA/$\{args.id}\`, args);
    return tratedException(response);
}

async function destroy(args: Args${value}Destroy) {
    const response = await API.del(\`/SUA-ROTA/$\{args.id}\`);
    return tratedException(response);
}

const Remote${value} = {
    find: find,
    findAll: findAll,
    store: store,
    update: update,
    destroy: destroy,
};

export default Remote${value};
    `;

  return code;
}

module.exports = remote;
