# MedCare (Medicine Inventory Management System)

## Overview

The Medicine Inventory Management System is a comprehensive web application designed to streamline the management of medicine inventory within a company. It provides role-based authentication to ensure that different users have access to relevant functionalities based on their roles within the organization.

## User Roles

### CEO

- **Responsibilities:**
  - Oversees all workers and inventory.
- **Features:**
  - Administrative dashboard displaying key metrics and reports with proper visualization graphs and well-structured data, providing insights into inventory performance, sales trends, and workforce efficiency.
  - Inventory overview to monitor stock levels, orders, and revenue, with interactive charts and tables for better analysis and decision-making.

### Store Manager

- **Responsibilities:**
  - Manages inventory based on orders and order statuses.
  - Handles inventory updates, order processing, and inventory tracking.
- **Features:**
  - Order processing tools to handle incoming orders, update order statuses, and manage deliveries, with real-time notifications for new orders and order updates.
  - Reporting functionality to track inventory movements, sales, and order fulfillment, including detailed reports on inventory turnover, order fulfillment rates, and revenue generation.

### User

- **Responsibilities:**
  - Can share their location for finding the nearest stores.
  - Can order medicines and track their order statuses with cool visualization of maps.
- **Features:**
  - Location sharing feature to find the nearest stores based on the user's current location, with integrated map functionalities for easy navigation and location identification.
  - User-friendly interface for browsing medicines and placing orders, with intuitive search and filtering options, as well as personalized recommendations based on past orders and preferences.
  - Order tracking system to monitor the status of orders from placement to delivery, with interactive order status updates and delivery tracking on the map.
  - Order history to view past orders, reorder medicines, and track spending, with detailed order summaries and purchase histories.

### Tech Used

#### Frontend

- **Framework:** [Next.js](https://nextjs.org/)
  - Next.js is a React framework that enables server-side rendering, static site generation, and other advanced features out of the box, providing a fast and responsive user experience.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
  - Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs quickly, allowing for flexible and customizable user interfaces.

#### Backend

- **Runtime Environment:** [Node.js](https://nodejs.org/)
  - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, enabling you to build scalable network applications, with asynchronous event-driven architecture for efficient handling of concurrent requests.
- **Web Framework:** [Express.js](https://expressjs.com/)
  - Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications, with middleware support for routing, request handling, and response processing.

#### Database

- **NoSQL Database:** [MongoDB](https://www.mongodb.com/)
  - MongoDB is a popular NoSQL database that provides flexibility and scalability for managing unstructured data, with support for document-oriented storage, high availability, and horizontal scaling.
- **Media Storage:** [Cloudinary](https://cloudinary.com/)
  - Cloudinary is a cloud-based image and video management platform that provides storage, optimization, and delivery solutions for media assets, with features for dynamic image resizing, image transformation, and CDN delivery.

#### Map Integration

- **Mapping Library:** [Maplibre/GLJS](https://maplibre.org/)
  - Maplibre/GLJS is a modern open-source JavaScript library for displaying maps based on Mapbox GL, providing interactive map functionalities for visualizing geographical data, routing, and location-based services.
- **Geocoding Service:** [Trueway Geocoding](https://www.trueway.co/)
  - Trueway Geocoding is a geocoding API service that converts addresses into geographic coordinates (latitude and longitude) for mapping and location-based functionalities, enabling location-based search, routing, and distance calculation.

#### Additional Integrations

- **Email Generation:** [Node Mailer](https://www.nodemailer.com/)
  - Node Mailer is used for generating and sending emails programmatically, enabling automated email notifications and communication features, with support for SMTP, IMAP, and POP3 protocols.
- **Messaging Services:** [Twilio](https://www.twilio.com/en-us)
  - Twilio is integrated for messaging services, enabling the application to send SMS messages and other communication channels like WhatsApp for notifications and alerts, with APIs for message sending, receiving, and tracking.
- **Payment Gateway:** [Stripe](https://stripe.com/in)
  - Stripe is integrated for secure payment processing, allowing users to make payments securely using various methods such as credit/debit cards, Apple Pay, or Google Pay, with support for recurring payments, subscriptions, and payment authentication.

## Features

- Role-based authentication system ensuring secure access to functionalities based on user roles.
- Intuitive user interfaces tailored to the specific needs of CEOs, Store Managers, and Users, with responsive design and cross-platform compatibility.
- Real-time inventory tracking and management to ensure accurate stock levels and timely order processing, with automatic notifications and alerts for low stock levels and pending orders.
- Location-based services for Users to find nearby stores and facilitate efficient order fulfillment, with integrated mapping and geocoding functionalities for accurate location identification and routing.
- Comprehensive reporting and analytics tools to provide insights into inventory performance, sales trends, and order fulfillment metrics, with customizable dashboards and visualizations for data-driven decision-making.

## Usage

1. Clone the repository to your local machine.
2. Install dependencies using `npm` or `yarn`.
3. Configure environment variables for necessary API keys and settings.
4. Run the application using the appropriate npm or yarn scripts.

```
Backend(in backend directory)-

npm run dev


Frontend(in frontend directory)-

npm run dev
```

6. Access the application via the provided URL.

## Requirements

- Node.js and npm/yarn installed on your system.
- Internet connectivity for accessing the application.

## Contributing

Contributions to this project are welcome! Feel free to fork the repository, make changes, and submit pull requests. Make sure to follow the contribution guidelines and maintain code quality and consistency.
