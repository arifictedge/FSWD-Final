const validateProduct = (req, res, next) => {
  const { name, price, description, imageUrl, category } = req.body;
  if (!name || !price || !description || !imageUrl || !category) {
    return res.status(400).send({
      success: false,
      message: "All fields are required"
    });
  }
  next();
};

module.exports = {
  validateProduct
};
