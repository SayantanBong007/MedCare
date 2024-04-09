const nodemailer = require('nodemailer');

exports.sendReceipt = async (req, res) => {
    try {
        const transporter = nodemailer.createTransport({
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
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ status: false, respMesg: 'Failed to send email' });
    }
};