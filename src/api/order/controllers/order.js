
("use strict");
// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_KEY, 
//   {
//     apiVersion: "2023-08-16"
//   });


/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order");