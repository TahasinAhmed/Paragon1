import {Joi} from 'joi'

const signupValidation = (request, response, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    });

    const {error} = schema.validate(request.body);
    if (error) {
        return response.status(400).send({message: error.details[0].message});
    }
    next();
}

const loginValidation = (request, response, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    });

    const {error} = schema.validate(request.body);
    if (error) {
        return response.status(400).send({message: error.details[0].message});
    }
    next();
}

export default { signupValidation, loginValidation };