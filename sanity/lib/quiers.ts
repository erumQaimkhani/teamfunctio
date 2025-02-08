import { defineQuery } from "next-sanity";



export const allproducts = defineQuery(`
    *[_type == "product"]{
      _id,
      name,
      description,
      price,
      discountPercentage,
      priceWithoutDiscount,
      rating,
      ratingCount,
      tags,
      sizes,
      image {
        asset -> {
          _id,
          url
        }
      }
    }
  `);


  
export const  fourproducts = defineQuery(`
    *[_type == "product"]{
      _id,
      name,
      description,
      price,
      discountPercentage,
      priceWithoutDiscount,
      rating,
      ratingCount,
      tags,
      sizes,
      image {
        asset -> {
          _id,
          url
        }
      }
    }
  `)
