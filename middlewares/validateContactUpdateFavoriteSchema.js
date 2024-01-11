import { contactUpdateFavoriteSchema } from "../schemas/contact-schemas.js";

const validateContactUpdateFavoriteSchema = (req, res, next) => {
	const { error } = contactUpdateFavoriteSchema.validate(req.body);
	if (error) {
		return next(HttpError(400, error.message));
	}
	next();
};

export default validateContactUpdateFavoriteSchema;