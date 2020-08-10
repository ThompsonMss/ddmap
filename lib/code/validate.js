function validate(value) {
  const code = `
import * as yup from "yup";
import initLocale from "../_Schemas/initLocale";

/**
 * Inicializando meu Schema Locale - Yup
 */

initLocale();

export interface ArgsGet${value} {
  CAMPO_X: string;
}

async function get(args: ArgsGet${value}): Promise<any> {
  let erro = false;

  let schema = yup.object().shape({
    CAMPO_X: yup.string().required("Você precisa informar um CAMPO_X."),
  });

  await schema.validate(args).catch((err) => {
    erro = err;
  });

  return erro;
}

export interface ArgsPost${value} {
  CAMPO_Y: string;
}

async function post(args: ArgsPost${value}): Promise<any> {
  let erro = false;

  let schema = yup.object().shape({
    CAMPO_Y: yup.number().min(6),
  });

  await schema.validate(args).catch((err) => {
    erro = err;
  });

  return erro;
}

const Validate${value} = {
  get: get,
  post: post,
};

export default Validate${value};`;

  return code;
}

module.exports = validate;
