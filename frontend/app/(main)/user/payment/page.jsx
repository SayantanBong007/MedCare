// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PaymentPage = () => {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState('');
//   const [cardDetails, setCardDetails] = useState({
//     cardNumber: '',
//     expiryDate: '',
//     cvv: ''
//   });
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('/api/products');
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   const handleProductSelect = (productId) => {
//     setSelectedProduct(productId);
//   };

//   const handleCardInputChange = (e) => {
//     const { name, value } = e.target;
//     setCardDetails({ ...cardDetails, [name]: value });
//   };

//   const handlePayment = async () => {
//     try {
//       const stripeResponse = await axios.post('/api/checkout', {
//         productId: selectedProduct,
//         token: token
//       });
//       console.log(stripeResponse.data);
//       // Handle payment success message
//     } catch (error) {
//       console.error('Error processing payment:', error);
//       // Handle payment failure message
//     }
//   };

//   return (
//     <div>
//       <h1>Payment Page</h1>
//       <div>
//         <h2>Available Products</h2>
//         <ul>
//           {products.map(product => (
//             <li key={product._id} onClick={() => handleProductSelect(product._id)}>
//               {product.name} - ${product.price}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h2>Card Details</h2>
//         <input type="text" name="cardNumber" placeholder="Card Number" onChange={handleCardInputChange} />
//         <input type="text" name="expiryDate" placeholder="Expiry Date" onChange={handleCardInputChange} />
//         <input type="text" name="cvv" placeholder="CVV" onChange={handleCardInputChange} />
//       </div>
//       <button onClick={handlePayment}>Pay Now</button>
//     </div>
//   );
// };

// export default PaymentPage;
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import axios from 'axios'
import { ActionButton } from "../../../../components/actionbutton";

const PaymentPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const product = { _id: 1, name: 'Dolo 250', price: 10, quantity: 2 }; // Define the single product

  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cvv: ''
  });
  const [user, setUser] = useState({
    to: "jainaviral2002@gmail.com",
    subject: "Invoice for your purchase at MedCare",
    description: ""
  });

  const { to, subject, description} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handlePayment = async (e) => {
    if (cardDetails.cardNumber.length !== 9 || cardDetails.cvv.length !== 3) {
      console.log('Invalid card number or CVV');
     
      return; // Exit the function early if validation fails
    }
    // Simulate payment processing
    console.log('Simulating payment processing...');
    console.log('Selected Product:', product.name);
    console.log('Quantity:', product.quantity);
    console.log('Card Details:', cardDetails);
    // Handle payment success or failure
    const paymentSuccess = 1;
    if (paymentSuccess) {
      console.log('Payment successful');
      setUser({ ...user,description:`You have successfully purchased ${product.name} for ₹${product.price * product.quantity}`});
      
      e.preventDefault();
      await axios.post("http://localhost:3000/api/v1/receipt",user)
     .then(response => setMsg(response.data.respMesg));
      
      router.push('http://localhost:3000/user/profile');
    } else {
      console.log('Payment failed');
    }
  };

  return (
    
    // <div>
    //   <h1>Payment Page</h1>
    //   <div>
    //     <h2>Product Details</h2>
    //     <p>{product.name} - ₹{product.price}</p>
    //   </div>
    //   <div>
    //     <h2>Quantity</h2>
    //     <p>{product.quantity}</p>
    //   </div>
    //   <div>
    //     <h2>Total Price</h2>
    //     <p>₹{product.price * product.quantity}</p>
    //   </div>
    //   <div>
    //     <h2>Card Details</h2>
    //     <input type="text" name="cardNumber" placeholder="Card Number" onChange={handleCardInputChange} pattern=".{9}" required/>
    //     <input type="text" name="cvv" placeholder="CVV" onChange={handleCardInputChange} pattern=".{3}" required/>
    //   </div>
    //   <button onClick={handlePayment}>Pay Now</button>
    // </div>

    <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-blue-100">
    <div className="absolute left-6 top-4 flex items-center ">
    <div className="flex flex-row  gap-3">
     
       <h1 className="text-blue-600 text-xl">MedCare</h1>
      </div>
    </div>

    <div className="bg-white rounded-sm w-[40%] h-fit p-8 flex flex-col justify-center align-items">
      <div className="flex justify-center items-center mt-5 pt-10">
      <h2 className="text-6xl mb-[3.5rem] font-bold">
        {loading ? "Loading..." : "GPay"}
        </h2>
        
        </div>

      <div className="flex flex-col w-[100%] justify-center items-center ">
        <div className=" flex flex-col gap-4 text-xl  pt-[2.5rem] ">
          <div className="flex flex-col gap-4">
          <div style={{ display: 'flex', alignItems: 'center' }}>
  <div>
    {/* <p>Product Details -</p> */}

    <Image src="/pana.png" width="250" height="250"/>
    
  </div>
  <div style={{ marginLeft: '20px' }}>
  <p>{product.name} - ₹{product.price}</p>
    <p  style={{ marginBottom: '20px' }}>Quantity - {product.quantity}</p>
    <p  style={{ marginBottom: '40px' }}>Final Price - </p>
    <p><b style={{ fontSize: '2.4em' }}>₹{product.price * product.quantity}</b></p>
  </div>
</div>
            <input className="bg-transparent w-[25vw] broder-solid border-2 border-gray-300 hover:border-gray-400 focus:border-gray-400 px-6 py-4 bg-gray-200 " type="text" name="cardNumber" placeholder="Card Number" onChange={handleCardInputChange} pattern=".{9}" required/>
        <input className="bg-transparent w-[25vw] broder-solid border-2 border-gray-300 hover:border-gray-400 focus:border-gray-400 px-6 py-4 bg-gray-200 " type="text" name="cvv" placeholder="CVV" onChange={handleCardInputChange} pattern=".{3}" required/>
          </div>
          <div className="mt-[1rem] m-auto">
            <ActionButton
              className=" font-bold uppercase text-xl w-[25vw]"
              onClick={handlePayment}
              disabled={loading}
            >
              Pay
            </ActionButton>
            <br></br>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PaymentPage;

