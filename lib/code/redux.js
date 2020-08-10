String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

function types(value) {
  const code = `export interface ${value.capitalize()}Data {
campo_a: string | null;
campo_b: boolean;
}

export interface ${value.capitalize()}State {
data: ${value.capitalize()}Data;
}

export enum Types {
SET_DATA = "${value.toLowerCase()}/SET_DATA",
GET_DATA = "${value.toLowerCase()}/GET_DATA",
}

interface SetDataAction {
type: typeof Types.SET_DATA;
payload: ${value.capitalize()}Data;
}

interface GetDataAction {
type: typeof Types.GET_DATA;
}

export type ${value.capitalize()}ActionTypes = SetDataAction | GetDataAction;`;

  return code;
}

function reducer(value) {
  const code = `import { Types, ${value.capitalize()}ActionTypes, ${value.capitalize()}State, ${value.capitalize()}Data } from "./types";

const initialState: ${value.capitalize()}State = {
data: {
    campo_a: null,
    campo_b: false,
},
};

export function ${value.toLowerCase()}Reducer(
state = initialState,
action: ${value.capitalize()}ActionTypes
): ${value.capitalize()}State {
switch (action.type) {
    case Types.SET_DATA:
    return {
        data: action.payload,
    };
    case Types.GET_DATA:
    return state;
    default:
    return state;
}
}
  `;

  return code;
}

function actions(value) {
  const code = `import { ${value.capitalize()}ActionTypes, ${value.capitalize()}Data, Types } from "./types";

function setData(data: ${value.capitalize()}Data): ${value.capitalize()}ActionTypes {
return {
    type: Types.SET_DATA,
    payload: data,
};
}

function getData(): ${value.capitalize()}ActionTypes {
return {
    type: Types.GET_DATA,
};
}

export const Actions${value.capitalize()} = {
setData: setData,
getData: getData,
};`;

  return code;
}

module.exports = { types, reducer, actions };
