import {Joi} from 'joi'

const registerValidation = (request, response, next) => {
    const schema = Joi.object({
        FullName: Joi.string().min(3).max(30).required(),
        Email: Joi.string().email().required(),
        Password: Joi.string().min(6).required()
    });

    const {error} = schema.validate(request.body);
    if (error) {
        return response.status(400).send({message: error.details[0].message});
    }
    next();
}

const signinValidation = (request, response, next) => {
    const schema = Joi.object({
        Email: Joi.string().email().required(),
        Password: Joi.string().min(6).required()
    });

    const {error} = schema.validate(request.body);
    if (error) {
        return response.status(400).send({message: error.details[0].message});
    }
    next();
}

export default { signupValidation, loginValidation };