import twilio from 'twilio';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from "../utils/ApiResponse.js";

const accountSid = process.env.ACCOUNT_SSID_NO
const authToken = process.env.TWILLI_AUTH_TOKEN

const twilioClient  = new twilio(accountSid, authToken);

const sendmessage = asyncHandler(async(req,res)=>{
    console.log("hello");
    const {phonenumber , time , orderId} = req.body;
    console.log(phonenumber);

    try {
        if (!phonenumber || !time || !orderId) {
            console.log(phonenumber);
            console.log(time);
            console.log(orderId);
            return res.status(400).json(
                new ApiResponse(400, "Missing required parameters")
            );
        }

        await twilioClient.messages.create({
            body: `🎉 MedCare Update! 🎉\n\n🚚 Order Confirmed! 🚚\n📦 Transaction #: ${orderId}\n🕒 Est. Delivery Time: ${time} mins\n\n👩‍⚕️ Sit tight! Your meds are on the way. Questions? Call +123456789.\n\nThank you for choosing MedCare!`,
            from: '+13344234345', // Replace with your Twilio phone number
            to: phonenumber,
        });

        return res.status(201).json(
            new ApiResponse(200,  "Message sent successfully")
        );
    } catch (error) {
        console.error('Error sending message:', error);
        return res.status(500).json(
            new ApiResponse(500, "Error sending message")
        );
    }
});

export {sendmessage}
