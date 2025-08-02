# ALX Listing App 🏡

A modern, scalable Airbnb clone listing page built with **Next.js**, **TypeScript**, **TailwindCSS**, and **ESLint**. This project sets a solid foundation for building modular and reusable components while maintaining clean code practices.

---

## 🚀 Project Overview

The **ALX Listing App** is a property listing interface inspired by Airbnb. It is designed to demonstrate clean architecture, reusable component design, and proper use of modern frontend tools and frameworks.

This is the **Milestone 0** setup, which includes:

- Next.js app scaffold with TypeScript, ESLint, and TailwindCSS
- Proper folder structure for scalability
- Basic reusable components
- Type-safe TypeScript interfaces
- Organized assets for UI design
- Basic project documentation
 
 STRUCTURE
 components/common/
Contains reusable UI components:

Card.tsx: A component to display property listings.

Button.tsx: A general-purpose button component.

interfaces/
Stores all TypeScript interfaces:

index.ts: Defines props for components like CardProps and ButtonProps.

constants/
Holds reusable configuration or text values:

index.ts: Central file for storing constants used across the app.

pages/
Contains page-level components:

index.tsx: The main home/listing page of the application.

public/assets/
Stores static files such as images and icons:

Example: placeholder.jpg, logos, or other visuals.

styles/
Contains global styles:

globals.css: Includes TailwindCSS base, components, and utilities.

Root Files:

tailwind.config.js: TailwindCSS configuration.

.eslintrc.json: ESLint rules.

tsconfig.json: TypeScript settings.

package.json: Lists dependencies and scripts.

README.md: Project documentation.