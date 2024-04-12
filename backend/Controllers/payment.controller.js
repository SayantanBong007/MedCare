import { createTransport } from 'nodemailer';
import { asyncHandler } from '../utils/asyncHandler.js'; // Assuming this is used for error handling middleware
import { Payment } from '../model/payment.js';
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const sendReceipt = asyncHandler(async (req, res) => {
  console.log("Sending Email");
  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: 'a_jain@ce.iitr.ac.in',
      pass: 'mail@iitr'
    }
  });

  const mailOptions = {
    from: 'your_email@gmail.com',
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.description,
    html: `
      <div style="padding:10px;border-style: ridge">
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
          <li>Email: ${req.body.to}</li>
          <li>Subject: ${req.body.subject}</li>
          <li>Message: ${req.body.description}</li>
        </ul>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
  res.json({ status: true, respMesg: 'Email Sent Successfully' });
});

const spay = async (req, res) => {
  console.log(req.body.token);

  // Destructuring assignment
  const { token, amount } = req.body;

  // Generate idempotency key
  const idempotenctKey = uuidv4();

  try {
    // Create a Stripe customer
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    // Create a Stripe charge
    const charge = await stripe.charges.create({
      amount,
      currency: 'inr',
      customer: customer.id,
      receipt_email: token.email,
    }, {
      idempotenctKey, // Add idempotency key for retry safety
    });

    // Send successful response with charge details
    res.status(200).json(charge);
  } catch (err) {
    console.error(err); // Log error for debugging
    // Handle errors appropriately, e.g., return appropriate error code to client
  }
};

export { spay, sendReceipt }; // Assuming sendReceipt is a typo
