// Create category
const createCategoryHandler = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: 'category created',
        });
    } catch (error) {
        res.json(error.message)
    }
};

// Get a category
const getCategoryHandler = async (req, res) => {
    try {
    } catch (error) {
        res.json(error.message)
    }
}

// Get all categories
const getAllCategoriesHandler = async (req, res) => {
    try {
        res.json({

        })
    } catch (error) {
        res.json(error.message)
    }
}

// Delete a cateogry
const deleteCategoryHandler = async (req, res) => {
    try {
        res.json({
            status: "success",
            data: "delete category",
        });
    } catch (error) {
        res.json(error.message)
    }
}

// UpdateCategory
const updateCategoryHandler = async (req, res) => {
    try {
        res.json({
            
        });
    } catch (error) {
        res.json(error.message)
    }
}

module.exports = {
    createCategoryHandler,
    getCategoryHandler,
    getAllCategoriesHandler,
    deleteCategoryHandler,
    updateCategoryHandler
}