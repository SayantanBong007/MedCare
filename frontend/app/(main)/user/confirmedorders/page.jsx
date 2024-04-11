// Import React and other necessary dependencies
import React from 'react';

// Address component
const Address = ({ name, street, city, state, zip, country }) => (
  <div>
    <strong>{name}</strong>
    <br />
    {street}
    <br />
    {city}, {state} {zip}
    <br />
    {country}
  </div>
);

// OrderConfirmation component
const OrderConfirmation = ({ orderNumber, shippingAddress, billingAddress, trackingNumber, progress }) => (
  <div className="order-confirmation">
    <h1 className="order-confirmation__title">Your order is confirmed</h1>
    <p className="order-confirmation__order-number">Order Number: {orderNumber}</p>
    <div className="order-confirmation__addresses">
      <div className="order-confirmation__address">
        <h3 className="order-confirmation__address-title">Shipping Address</h3>
        <Address {...shippingAddress} />
      </div>
      <div className="order-confirmation__address">
        <h3 className="order-confirmation__address-title">Billing Address</h3>
        <Address {...billingAddress} />
      </div>
    </div>
    <div className="order-confirmation__tracking">
      <h3 className="order-confirmation__tracking-title">Tracking Information</h3>
      <p className="order-confirmation__tracking-number">Tracking Number: {trackingNumber}</p>
      <div className="order-confirmation__progress">
        <div className={`order-confirmation__progress-bar order-confirmation__progress-bar--${progress}`}></div>
      </div>
    </div>
  </div>
);

// OrderConfirmationPage component
const OrderConfirmationPage = () => {
  const orderData = {
    orderNumber: '1004',
    shippingAddress: {
      name: 'Awesome Alex',
      street: '123 Real Street',
      city: 'San Francisco',
      state: 'CA',
      zip: '94104',
      country: 'United States',
    },
    billingAddress: {
      name: 'Awesome Alex',
      street: '123 Real Street',
      city: 'San Francisco',
      state: 'CA',
      zip: '94104',
      country: 'United States',
    },
    trackingNumber: '937486990350652526909',
    progress: 'in-progress', // Can be 'in-progress', 'delivered', 'delayed', etc.
  };

  return (
    <div className="order-confirmation-page">
      <OrderConfirmation
        orderNumber={orderData.orderNumber}
        shippingAddress={orderData.shippingAddress}
        billingAddress={orderData.billingAddress}
        trackingNumber={orderData.trackingNumber}
        progress={orderData.progress}
      />
    </div>
  );
};

export default OrderConfirmationPage;