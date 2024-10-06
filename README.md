# Counter Application

This React application provides a simple counter that allows users to increment and decrement a number. The current count is displayed using a separate `Count` component, which takes the count as a prop.

## Project Structure

```
- js/
  - MainContent.js
- styles/
  - Index.css
- index.js
```

## Getting Started

### Prerequisites

- Node.js
- React

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-folder>
```

2. Install dependencies:

```bash
npm install
```

### Running the App

To start the application, run the following command:

```bash
npm start
```

This will launch the app in your default browser at `http://localhost:3000`.

## Key Concepts

- **State Management**: The app uses the `useState` hook to manage the count.
- **Component Prop**: The `Count` component receives the current count as a prop to display it.
- **Event Handling**: The application handles click events to increment and decrement the count.
