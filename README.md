Christoffel P2 - Christoffel App with Barsita Bliss Menu
Project Overview
Barista Bliss is a React Native mobile application for managing a restuarant menu system. Built with TypeScript and React Navigation, the app allows users to browse menu items, add new items, filter selections, and view category averages.


React Native
TypeScript
React Navigation (Native Stack Navigator)
Node.js filesystem operations

Application Structure
Navigation Flow
The application uses a stack-based navigation pattern with four main screens:

Welcome Screen (Entry point)
Home Screen (Main menu display)
Add Item Screen (Create new menu items)
Filter Screen (Search and filter functionality)

Screen Components
Welcome Screen

Initial landing page
Provides introduction to the application
Navigation entry point to Home Screen

Home Screen

Displays complete menu catalog
Shows three categories: Beverages, Main Meals, Desserts
Calculates and displays average prices per category
Remove item functionality
Navigation to Add Item and Filter screens

Add Item Screen

Form-based interface for creating new menu items
Input fields: Item Name, Description, Price, Image URL
Picker component for Category selection (Beverage, Main Meal, Dessert)
Picker component for Intensity selection (Mild, Balanced, Strong)
Image preview functionality
Save and Cancel options
Adds items to main menu list

Filter Screen

Advanced filtering capabilities
Search by category
Search by intensity level
Filter by price range
Displays filtered results from menu

Data Structure
CafeItem Type
typescript{
  id: string
  itemName: string
  description: string
  category: "Beverage" | "Main Meal" | "Dessert"
  price: number
  intensity: "Mild" | "Balanced" | "Strong"
  image: string (URL)
  ingredients: string[]
}
Course Type
Used for category filtering: "Beverage", "Main Meal", "Dessert"
Predefined Menu Items
The application comes with 10 predefined menu items:
Beverages

Peach Ice Tea (R18)
Citrus Mango (R42)
Raspberry Milkshake (R45)

Main Meals

Double Crunch Mutton Burger (R74)
Large Crispy Chips (R42)
Chicken Brochette (R80)
Vegetarian Pasta (R62)

Desserts

Berry Cheesecake (R64)
Pineapple Dream Cookie (R60)
Chocolate Cake (R55)

Key Features
State Management

Centralized state handling in App.tsx
Dynamic menu updates
Real-time average calculations
Add and remove item operations

Menu Operations
Add Item: Adds new cafe items to the menu with complete details including ingredients
Remove Item: Filters out items by ID from the menu list
Calculate Average: Computes average price per category based on current menu items
Form Components
The Add Item screen utilizes Picker components for:

Category selection dropdown
Intensity level selection dropdown
Provides structured data entry
Validates user input before submission

Navigation Props
Screens receive navigation and route props from React Navigation stack, enabling seamless transitions between views and parameter passing.
Color Scheme
Header: Dark brown (#1b1513)
Header Text: Cream (#f5e9d7)
Primary Accent: Coral/Red (#f3604f)
Code Attribution
This project references documentation from:

GeeksforGeeks TypeScript Tutorial
TypeScript Official Documentation
W3Schools TypeScript Styling
Node.js Filesystem Documentation





Persistent data storage
Image upload functionality
Order management system
Customer reviews and ratings
Multi-language support
