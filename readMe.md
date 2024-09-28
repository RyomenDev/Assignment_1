# Product Store

## Overview

Product Store is a React application that allows users to browse and search products fetched from the [DummyJSON API](https://dummyjson.com). This project implements various features like category selection, infinite scrolling, and real-time search functionality, providing a seamless user experience.

## Features

- **Dynamic Category Selection**: Users can view and select product categories. When a category is selected, only products from that category will be displayed.
- **Infinite Scrolling**: The application fetches products in batches (10 at a time), enhancing loading performance and user experience by reducing initial load time.
- **Search Functionality**: Users can search for products in real-time, with results updated instantly based on the input.
- **Responsive Design**: Built with Tailwind CSS, the app is designed to be mobile-friendly and visually appealing.
- **Redux State Management**: Utilizes Redux for managing product and category data, making it easy to scale and maintain state across the application.
- **Query Parameter Management**: The app stores the selected category and search input as query parameters, allowing users to share links that retain their filters.

## Functional Requirements

1. **Product and Category Fetching**:
   - Uses the DummyJSON API to fetch products and categories.
   - Products are fetched in batches of 10 using pagination parameters.

2. **Category Selection**:
   - Displays all categories fetched from the API.
   - Users can select a single category; the app displays products for that category or all categories if none is selected.

3. **Batch Fetching**:
   - Products are loaded in increments (e.g., first 1-10, then 11-20) and displayed dynamically.

4. **Search Functionality**:
   - Implements a search feature to filter products based on user input.

5. **Limitations**:
   - Note any limitations in `App.js` as comments (e.g., API rate limits, search constraints, or UI responsiveness issues).

## Technical Requirements

1. **Functional Components**:
   - The app is built using only functional components, adhering to modern React best practices.

2. **Redux State Management**:
   - Redux is used to store and retrieve product and category data, managing global state effectively.

3. **Query Parameters**:
   - The selected category and search input are stored as query parameters for easy sharing and bookmarking of search results.

4. **UI/UX**:
   - The application features a clean and responsive design using Tailwind CSS for styling.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RyomenDev/Assignment_1.git
   cd client
   npm install
   npm run dev
   ```
