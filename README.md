
# Vite React Warehouse Management App

This is a Vite and React-based web application for managing and displaying a list of warehouses in the most optimal and modular way possible. The app provides two main pages: a listing page for warehouses and a details page for individual warehouses.

## Page 1: Warehouse Listing

The warehouse listing page is designed to efficiently display a list of warehouses with various features, including:

### Features:

- **Search**: Users can search for warehouses by their names. This feature enables quick and easy filtering based on warehouse names.
- **Filtering**: The app allows users to filter warehouses based on the following criteria:
  - City: Users can select a specific city to narrow down the list of warehouses.
  - Cluster: Users can filter warehouses based on clusters or groups.
  - Space Availability Limit: This filter helps users find warehouses with available storage space within a certain limit.

### Data Source:

The app uses a JSON data file (`warehouses.json`) provided by the team to populate the warehouse listings. 

## Page 2: Warehouse Details

When a user clicks on a warehouse from the listing, they are redirected to the warehouse details page. Here, users can view detailed information about the selected warehouse.

## State Management

Redux is used for state management within the application. It provides a centralized store to manage the application's data, making it easier to share and update data between different components.

## Getting Started

To run this Vite React app, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run the following commands:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`. You can access the warehouse listing and details pages from there.

## Dependencies

The project depends on various packages, including React, Redux, and Vite. These dependencies are listed in the `package.json` file. Make sure to have them installed to run the application successfully.

