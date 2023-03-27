import Joi from "joi";

export default class ValidateTime {
  private schema: Joi.ObjectSchema<Object> | undefined;

  validateCreateTime(data: object): Joi.ValidationResult {
    this.schema = Joi.object({
      nome: Joi.string().required().min(4).max(45),
    });

    return this.schema.validate(data);
  }

  validateEditTime(data: object): Joi.ValidationResult {
    this.schema = Joi.object({
      id: Joi.string().required().min(1),
      nome: Joi.string().required().min(4).max(45),
    });

    return this.schema.validate(data);
  }

  validateDeleteTime(data: object): Joi.ValidationResult {
    this.schema = Joi.object({
      id: Joi.string().required().min(1),
    });

    return this.schema.validate(data);
  }

  validateGetTime(data: object): Joi.ValidationResult {
    this.schema = Joi.object({
      nome: Joi.string().required().min(1).max(45),
    });

    return this.schema.validate(data);
  }
}
