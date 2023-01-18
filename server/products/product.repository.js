const db = require("../db")

module.exports = {
    getProducts: async (limit,page) => {
        const offset=limit*(page-1)
    try {
      const result = await db.query(
        `SELECT
        p.id,
        p.name,
        p.description,
        p.price,
        pc.name AS "categoryName",
        pi.name AS "imageName",
        pi.description AS "imageDescription",
        pd.value AS "discountValue",
        dt.type AS "discountType"
      FROM product p
      LEFT JOIN product_category pc ON p.product_category_id = pc.id
      LEFT JOIN product_image pi ON p.product_image_id = pi.id
      Left Join product_discount pd ON pd.product_id=p.id
      Left Join discount_type dt ON dt.id=pd.discount_type_id
      ORDER BY
        p.id
        Limit $1
        Offset $2
        ` ,[limit,offset]
      );
      return result.rows;
    } catch (error) {
      throw Error(error);
    }
  },
  getTotalProducts: async () => {
    try {
      const result = await db.query(
        `SELECT
        p.id,
        p.name,
        p.description,
        p.price,
        pc.name AS "categoryName",
        pi.name AS "imageName",
        pi.description AS "imageDescription"

      FROM product p
      LEFT JOIN product_category pc ON p.product_category_id = pc.id
      LEFT JOIN product_image pi ON p.product_image_id = pi.id
      ORDER BY
        p.id
        `
      );
      return result.rows;
    } catch (error) {
      throw Error(error);
    }
  },

};
