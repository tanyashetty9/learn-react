//clean code, separate variable to store mapped results
export const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: 999,
    },
    { id: 2, name: 'Phone', price: 699 },
    { id: 3, name: 'Tablet', price: 449 },
  ];

  //additional filtering before mapping
  //this gives some key warning in the dev console

  const productElements = products
    .filter((product) => {
      return product.price > 500;
    })
    .map((product) => {
      return (
        <div>
          {' '}
          {/*for key warning in dev console.. add <div key ={product.id}></div> */}
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
        </div>
      );
    });

  // const productElements = products.map((product) => {
  //   return (
  //     <div>
  //       <h3>{product.name}</h3>
  //       <p>Price: {product.price}</p>
  //     </div>
  //   );
  // })
  return (
    <div>
      <h2>Our Products</h2>
      {productElements}
    </div>
  );
};

//Inline mapping

// export const ProductList = () => {
//   const products = [
//     {
//       id: 1,
//       name: 'Laptop',
//       price: 999,
//     },
//     { id: 2, name: 'Phone', price: 699 },
//     { id: 3, name: 'Tablet', price: 449 },
//   ];
//
//   return (
//     <div>
//       <h2>Our Products</h2>
//       {products.map((product) => {
//         return (                               // note, there is another "return" here
//           <div>
//             <h3>{product.name}</h3>
//             <p>Price: {product.price}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export const ProductList = () => {
//     return(
//         <div>
//             <h2>Our Products</h2>
//             <div>
//                 <h3>Laptop</h3>
//                 <p>Price: 999</p>
//             </div>
//             <div>
//                 <h3>Phone</h3>
//                 <p>Price: 699</p>
//             </div>
//             <div>
//                 <h3>Tablet</h3>
//                 <p>Price: 449</p>
//             </div>
//         </div>
//     )
// }
