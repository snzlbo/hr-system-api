import Joi from 'joi';

export async function reviewCreationValidators(data: any) {
  try {
    const schema = Joi.object({
      content: Joi
        .string()
        .min(3)
        .max(1024)
        .required(),
      
      user: Joi
        .string()
        .required(),
    })

    return await schema.validateAsync(data);
  } catch (error: any) {
    throw new Error(`${error.name}: ${error.message}`);
  }
}

export async function reviewUpdateValidators(data: any) {
  try {
    const schema = Joi.object({
      content: Joi
        .string()
        .min(3)
        .max(1024),
    })

    return await schema.validateAsync(data);
  } catch (error: any) {
    throw new Error(`${error.name}: ${error.message}`);
  }
}