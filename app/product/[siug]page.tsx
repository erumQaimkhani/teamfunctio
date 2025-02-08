
import { urlFor } from "@/sanity/lib/image";
import {Client} from "@/lib/client"
import { groq } from "next-sanity";
import Image from "next/image";


interface ProductPageProps {
  productImage: string; 
  params: {
    slug: string;
  };
}


async function getProduct(slug: string): Promise<ProductPageProps & { title: string; price: number; description?: string; discountPercentage?: number; tag?: string; isNew?: boolean }> {
  return Client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      title,
      productImage,
      price,
      discountPercentage,
      description,
      tag,
      isNew
    }`,
    { slug }
  );
}


export default async function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = await getProduct(slug);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {product.productImage && (
          <Image
            src={urlFor(product.productImage).url()} 
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg shadow-md"
          />
        )}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-lg text-blue-600">${product.price}</p>
          {product.discountPercentage && (
            <p className="text-green-600">
              {product.discountPercentage} off
            </p>
          )}
          <p className="text-gray-700">{product.description}</p>
          {product.isNew && <span className="text-sm text-blue-500">New Arrival</span>}
          {product.tag && (
            <p className="text-sm text-gray-500">Tags: {product.tag}</p>
          )}
        </div>
       
      </div>
    </div>
  );
}
// import { urlFor } from "@/sanity/lib/image";
// import { Client } from "@/lib/client";
// import { groq } from "next-sanity";
// import Image from "next/image";

// interface ProductPageProps {
//   productImage: string;
//   params: {
//     slug: string;
//   };
// }

// async function getProduct(slug: string): Promise<ProductPageProps & { title: string; price: number; description?: string; discountPercentage?: number; tag?: string; isNew?: boolean }> {
//   try {
//     const product = await Client.fetch(
//       groq`*[_type == "product" && slug.current == $slug][0]{
//         _id,
//         title,
//         productImage,
//         price,
//         discountPercentage,
//         description,
//         tag,
//         isNew
//       }`,
//       { slug }
//     );

//     if (!product) {
//       throw new Error("Product not found");
//     }

//     return product;
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     throw new Error("Failed to fetch product data");
//   }
// }

// export default async function ProductPage({ params }: { params: { slug: string } }) {
//   const { slug } = params;
//   let product;

//   try {
//     product = await getProduct(slug);
//   } catch (error) {
//     return (
//       <div className="text-center text-red-500">
//         <p>Error loading product. Please try again later.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {product.productImage && (
//           <Image
//             src={urlFor(product.productImage).url()}
//             alt={product.title}
//             width={500}
//             height={500}
//             className="rounded-lg shadow-md"
//           />
//         )}
//         <div className="space-y-4">
//           <h1 className="text-3xl font-bold">{product.title}</h1>
//           <p className="text-lg text-blue-600">${product.price}</p>
//           {product.discountPercentage && (
//             <p className="text-green-600">
//               {product.discountPercentage}% off
//             </p>
//           )}
//           <p className="text-gray-700">{product.description}</p>
//           {product.isNew && <span className="text-sm text-blue-500">New Arrival</span>}
//           {product.tag && (
//             <p className="text-sm text-gray-500">Tags: {product.tag}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
// export default async function ProductPage({ params }: { params: { slug: string } }) {
//   const { slug } = params;
//   let product;

//   try {
//     product = await getProduct(slug);
//   } catch (error) {
//     console.error("Error loading product:", error);
//     return (
//       <div className="text-center text-red-500">
//         <p>Error loading product. Please try again later.</p>
//         <p className="text-sm">{error instanceof Error ? error.message : "Unknown error"}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {product.productImage && (
//           <Image
//             src={urlFor(product.productImage).url()}
//             alt={product.title}
//             width={500}
//             height={500}
//             className="rounded-lg shadow-md"
//           />
//         )}
//         <div className="space-y-4">
//           <h1 className="text-3xl font-bold">{product.title}</h1>
//           <p className="text-lg text-blue-600">${product.price}</p>
//           {product.discountPercentage && (
//             <p className="text-green-600">
//               {product.discountPercentage}% off
//             </p>
//           )}
//           <p className="text-gray-700">{product.description}</p>
//           {product.isNew && <span className="text-sm text-blue-500">New Arrival</span>}
//           {product.tag && (
//             <p className="text-sm text-gray-500">Tags: {product.tag}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }