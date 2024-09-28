# Product Store

## Overview

Product Store is a React application that allows users to browse, search, and filter products fetched from the [DummyJSON API](https://dummyjson.com). This project incorporates various features such as dynamic category selection, pagination, real-time search, and infinite scrolling to provide a seamless user experience.

## Features

- **Dynamic Category Selection**: Users can view and select product categories. Once a category is selected, only the products from that category will be displayed. If no category is selected, all products are shown.
  
- **Infinite Scrolling with Pagination**: The app fetches products in batches of 10, optimizing load performance by fetching more products only as needed while scrolling.
  
- **Real-Time Search**: The search functionality filters products in real time based on user input, providing immediate feedback and results.

- **Responsive Design**: Built using Tailwind CSS, the app is mobile-friendly and ensures a consistent, visually appealing user interface across devices.

- **Redux for State Management**: The application uses Redux to manage the global state of product and category data, ensuring easy scalability and maintainability.

- **Persistent Query Parameters**: Selected categories and search queries are stored as query parameters, allowing users to share URLs that retain their filters.

## Functional Requirements

1. **Product and Category Fetching**:
   - Fetches products and categories from the DummyJSON API.
   - Products are fetched in batches of 10 using pagination parameters (`skip` and `limit`).

2. **Category Selection**:
   - Displays a list of categories fetched from the API.
   - Allows users to filter products based on a selected category, or view all products if no category is selected.

3. **Pagination and Infinite Scrolling**:
   - Products are fetched and displayed incrementally (e.g., 1-10, then 11-20, and so on), reducing the initial load time and improving performance.

4. **Search Functionality**:
   - Provides real-time search, allowing users to search for products based on input keywords. The product list updates dynamically as the user types.

5. **Limitations**:
   - Any known limitations, such as API rate limits or UI responsiveness issues, are noted in `App.js` as comments.

## Technical Requirements

1. **React Functional Components**:
   - The application is built entirely using functional components, adhering to modern React best practices and hooks.

2. **Redux for Global State Management**:
   - Redux is used to store product and category data, facilitating efficient and scalable state management across the app.

3. **Query Parameter Management**:
   - Selected categories and search inputs are saved as query parameters, enabling users to share or bookmark URLs with their filters applied.

4. **User Interface and Experience (UI/UX)**:
   - The design is clean and responsive, utilizing Tailwind CSS to ensure a consistent look across various screen sizes and devices.

## Getting Started

### Prerequisites

Before running the project, ensure you have the following installed on your machine:
- Node.js (v14 or above)
- npm (v6 or above)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RyomenDev/Assignment_1.git
   cd client
   npm install
   npm run dev
   ```
