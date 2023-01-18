const express = require("express");
const Joi = require("joi");
const router = express.Router();
const db = require("../db");
const queryParamValidationMiddleware = require("../middleware/queryParamValidationMiddleware");
const {getProducts,getTotalProducts}=require("./product.repository");

const queryParamsSchema = Joi.object().keys({
  page: Joi.number().integer().min(1),
  limit: Joi.number().integer().min(1),
});


router.get(
  "/",
  queryParamValidationMiddleware(queryParamsSchema),
  async (req, res, next) => {
    const page=parseInt(req.query.page)||1;
    const limit=parseInt(req.query.limit)||10;
    
    try {
      const totalProducts=await getTotalProducts();
      const products = await getProducts(limit,page);

      const responseResults = {
        products,
        currentPage:page,
        itemsPerPage: limit,
        totalPages: Math.ceil(parseInt(totalProducts.length) / limit),
        totalItems:totalProducts.length
      };
      return res.json(responseResults);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
