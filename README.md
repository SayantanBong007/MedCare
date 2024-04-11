# MedCare

## Architecture 
### Medcare

- **Frontend:** Next.js
- **Backend:** Node.js HTTP API server for REST APIs, handling auth and consumer
- **Databse:** MongoDb used for saving the data , cloudinary used to generate image URL
- This project utilizes various technologies to provide functionalities related to mail generation, messaging, payment processing, and map integration. It employs Node.js for backend development and incorporates the following technologies:

Node Mailer: Used for generating and sending emails programmatically. It allows seamless integration of email functionality into the application, enabling automated email notifications, confirmations, and other communication features.

Twilio: Integrated for messaging services, Twilio facilitates the sending and receiving of SMS messages, as well as other communication channels like WhatsApp. This enables the application to send notifications, alerts, and reminders via text messages.

Stripe Payment Gateway: For secure payment processing, the project integrates with Stripe, a widely used payment gateway. With Stripe, users can make payments securely using various methods such as credit/debit cards, Apple Pay, or Google Pay, ensuring a smooth and reliable transaction experience.

Map API - Maplibre/GL and Trueway: The project incorporates map functionality using Maplibre/GL, an open-source mapping library, and Trueway for geocoding to obtain user location from latitude and longitude data. This allows the application to display maps, mark locations, provide directions, and perform geolocation-based tasks.

Usage:

Clone the repository to your local machine.
Install dependencies using npm or yarn.
Configure environment variables for necessary API keys and settings.
Run the application using the appropriate npm or yarn scripts.
Access the application via the provided URL.

Requirements:

Node.js and npm/yarn installed on your system.
API keys and credentials for services like Twilio, Stripe, and Map API.
Internet connectivity for sending emails, messages, and processing payments.
Compatible web browser for accessing the application.


Contributing:
Contributions to this project are welcome! Feel free to fork the repository, make changes, and submit pull requests. Make sure to follow the contribution guidelines and maintain code quality and consistency.
## SetUp Guide 
- 1)- Run npm install
