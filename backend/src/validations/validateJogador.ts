import Joi from "joi";

export default class ValidateJogador {
  validateCreateJogador(data: object): Joi.ValidationResult {
    const schema: Joi.ObjectSchema<Object> = Joi.object({
      nome: Joi.string().required().min(4).max(45),
      idade: Joi.string().required().min(1),
      time_id: Joi.string().required().min(1),
    });

    return schema.validate(data);
  }

  validateEditJogador(data: object): Joi.ValidationResult {
    const schema: Joi.ObjectSchema<Object> = Joi.object({
      id: Joi.string().required().min(1),
      nome: Joi.string().required().min(4).max(45),
      idade: Joi.string().required().min(1),
      time_id: Joi.string().required().min(1),
    });

    return schema.validate(data);
  }

  validateDeleteJogador(data: object): Joi.ValidationResult {
    const schema: Joi.ObjectSchema<Object> = Joi.object({
      time_id: Joi.string().required().min(1),
    });

    return schema.validate(data);
  }
}
