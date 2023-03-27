import Joi from "joi";

export default class ValidateJogador {
  private schema: Joi.ObjectSchema<Object> | undefined;

  validateCreateJogador(data: object): Joi.ValidationResult {
    this.schema = Joi.object({
      nome: Joi.string().required().min(4).max(45),
      idade: Joi.string().required().min(1),
      time_id: Joi.string().required().min(1),
    });

    return this.schema.validate(data);
  }

  validateEditJogador(data: object): Joi.ValidationResult {
    this.schema = Joi.object({
      id: Joi.string().required().min(1),
      nome: Joi.string().required().min(4).max(45),
      idade: Joi.string().required().min(1),
      time_id: Joi.string().required().min(1),
    });

    return this.schema.validate(data);
  }

  validateDeleteJogador(data: object): Joi.ValidationResult {
    this.schema = Joi.object({
      id: Joi.string().required().min(1),
    });

    return this.schema.validate(data);
  }
}
