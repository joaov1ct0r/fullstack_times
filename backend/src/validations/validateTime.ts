import Joi from "joi";

export default class ValidateTime {
  validateCreateTime(data: object): Joi.ValidationResult {
    const schema: Joi.ObjectSchema<Object> = Joi.object({
      nome: Joi.string().required().min(4).max(45),
    });

    return schema.validate(data);
  }

  validateEditTime(data: object): Joi.ValidationResult {
    const schema: Joi.ObjectSchema<Object> = Joi.object({
      id: Joi.string().required().min(1),
      nome: Joi.string().required().min(4).max(45),
    });

    return schema.validate(data);
  }

  validateDeleteTime(data: object): Joi.ValidationResult {
    const schema: Joi.ObjectSchema<Object> = Joi.object({
      id: Joi.string().required().min(1),
    });

    return schema.validate(data);
  }

  validateGetTime(data: object): Joi.ValidationResult {
    const schema: Joi.ObjectSchema<Object> = Joi.object({
      nome: Joi.string().required().min(1).max(45),
    });

    return schema.validate(data);
  }
}
