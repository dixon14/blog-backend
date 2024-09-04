const express = require('express');
const { updateCategoryHandler, deleteCategoryHandler, getAllCategoriesHandler, getCategoryHandler, createCategoryHandler } = require('../../controllers/categories/category_controller');

const categoryRouter = express.Router();

categoryRouter.post('', createCategoryHandler)
categoryRouter.get('/:id', getCategoryHandler)
categoryRouter.get('', getAllCategoriesHandler)
categoryRouter.delete('/:id', deleteCategoryHandler)
categoryRouter.put('/:id', updateCategoryHandler)

module.exports = categoryRouter;