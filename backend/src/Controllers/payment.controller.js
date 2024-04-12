import { createTransport } from "nodemailer";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Payment } from "../model/payment.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const sendRecipt = asyncHandler(async (req, res) => {
  console.log("Sending Email");
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: "medcare.ltd.llc@gmail.com",
      pass: "med@care123",
    },
  });

  const mailOptions = {
    from: "your_email@gmail.com",
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
        `,
  };

  const data = await transporter.sendMail(mailOptions);
  if (!data) {
    throw new ApiError(400, "email not sent, something went wrong");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, data, "Email Sent Successfully"));
});

export { sendRecipt };
