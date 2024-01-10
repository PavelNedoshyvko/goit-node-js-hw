import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import { isEmptyBody, isEmptyBodyStatus, isValidId } from '../../middlewares/index.js';


const contactsRouter = express.Router();


contactsRouter.get('/', contactsController.getAll);

contactsRouter.get('/:contactId', isValidId, contactsController.getById);

contactsRouter.post('/', isEmptyBody, contactsController.add);

contactsRouter.delete('/:contactId', isValidId, contactsController.deleteById);

contactsRouter.put('/:contactId', isEmptyBody, isValidId, contactsController.updateById);

contactsRouter.patch('/:contactId/favorite', isEmptyBodyStatus, isValidId, contactsController.updateStatusContact);


export default contactsRouter;
