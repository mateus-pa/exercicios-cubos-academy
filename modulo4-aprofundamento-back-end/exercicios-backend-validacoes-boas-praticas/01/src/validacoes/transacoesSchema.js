const joi = require('joi')

const transacoesSchema = joi.object({
	descricao: joi.string().required().messages({
		'any.required': 'O campo descricao é obrigatório.',
		'string.empty': 'O campo descricao é obrigatório.'
	}),
	valor: joi.number().integer().required().messages({
		'any.required': 'O campo valor é obrigatório.',
		'number.base': 'O campo valor necessita ser um número inteiro',
		'number.integer': 'O campo valor necessita ser um número inteiro'
	}),
	data: joi.date().required().messages({
		'any.required': 'O campo data é obrigatório.',
		'date.base': 'O campo data necessita ser do tipo date',
		'date.strict': 'O campo data necessita ser do tipo date'
	}),
	categoria_id: joi.number().integer().required().messages({
		'any.required': 'O campo categoria_id é obrigatório.',
		'number.base': 'O campo categoria_id necessita ser um número inteiro',
		'number.integer': 'O campo categoria_id necessita ser um número inteiro'
	}),
	tipo: joi.string().valid('entrada', 'saida').required().messages({
		'any.required': 'O campo tipo é obrigatório.',
		'string.empty': 'O campo tipo é obrigatório.',
		'any.only': 'O tipo de transação necessita ser entrada ou saida.'
	})
});

module.exports = transacoesSchema;