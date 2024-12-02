# omegle-clone

An interactive platform to chat and video call with random users. Built with a modern tech stack, this project offers real-time communication with a smooth and user-friendly interface.

Features
Random Chat: Connect with strangers for text-based conversations.
Video Calling: Seamlessly transition to video calls for a more interactive experience.
Secure Connections: User data is protected using encryption techniques like bcryptjs.
Responsive Design: Styled with Tailwind CSS for a modern and responsive layout.


Memory updated
Here’s a detailed README for your Omegle Clone project:

Omegle Clone
An interactive platform to chat and video call with random users. Built with a modern tech stack, this project offers real-time communication with a smooth and user-friendly interface.

Features
Random Chat: Connect with strangers for text-based conversations.
Video Calling: Seamlessly transition to video calls for a more interactive experience.
Secure Connections: User data is protected using encryption techniques like bcryptjs.
Responsive Design: Styled with Tailwind CSS for a modern and responsive layout.
Installation and Setup
Follow these steps to set up and run the project locally:

Prerequisites
Ensure you have the following installed:

Node.js
npm
MongoDB

Step 1: Clone the Repository

git clone https://github.com/Shreshtasingh/omegle-clone.git
cd omegle-clone

Step 2: Install Dependencies

Install the required packages:

npm install express nodemon mongodb socket.io ejs tailwindcss bcryptjs
npm init -y

Step 3: Set Up Folder Structure

Create the necessary folder structure:

omegle-clone/
├── public/        # Static assets like CSS, JS, and images
├── views/         # EJS templates
├── routes/        # Define application routes
├── models/        # MongoDB schemas
├── controllers/   # Handle business logic
├── server.js      # Entry point of the application


Step 4: Database Setup
Start MongoDB locally:

Create and configure a .env file to store your MongoDB connection string and other sensitive information:
MONGO_URI=mongodb://localhost:27017/omegle-clone

Step 5: Start the Server
Run the application:
nodemon server.js
The application will be available at http://localhost:3000.

Step 6: Port Forwarding
To allow others to access the project, forward the local port using tools like ngrok:

add port in your terminal with 3000 copy the link turn the public view onn
Share the provided public URL for external access.

Technologies Used
Backend: Node.js, Express.js
Frontend: EJS, Tailwind CSS
Real-time Communication: Socket.IO
Database: MongoDB
Security: bcryptjs
Contributing
Contributions are welcome! Please fork the repository and submit a pull request.![Screenshot (19)](https://github.com/user-attachments/assets/b0cebc1a-d768-4f1e-92d3-a4a187a44191)
![Screenshot (21)](https://github.com/user-attachments/assets/869026ad-a7c8-460a-8d2f-d9fb74fd0442)
![Screenshot (22)](https://github.com/user-attachments/assets/1d7d0fb3-fb02-4907-9dde-4032213bdd35)
![WhatsApp Image 2024-12-02 at 22 39 49_c102862a](https://github.com/user-attachments/assets/138d82c5-4596-4c1f-88b2-56bcbada699e)
