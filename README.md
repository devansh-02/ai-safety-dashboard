# AI Safety Incident Dashboard

🚀 *Live Demo*: [https://mellifluous-sorbet-ff9f7b.netlify.app)  

## 📋 Overview

The *AI Safety Incident Dashboard* is a web application designed to log and monitor AI safety incidents. It allows users to:

- View a list of reported AI safety incidents.
- Filter incidents based on severity levels.
- Sort incidents by the reported date.
- View detailed descriptions of each incident.
- Report new incidents through a user-friendly form.

This project aligns with HumanChain's mission to build a safer, more trustworthy, and human-centric digital world.

## 🛠 Tech Stack

- *Language*: TypeScript
- *Framework*: React
- *Build Tool*: Vite
- *Styling*: CSS (Flexbox/Grid)
- *Deployment*: Netlify

## 🚀 Features

- *Incident Listing*: Displays a list of AI safety incidents with Title, Severity, and Reported Date.
- *Filtering*: Filter incidents by severity levels: All, Low, Medium, High.
- *Sorting*: Sort incidents by Reported Date: Newest First or Oldest First.
- *View Details*: Toggle to view full descriptions of incidents.
- *Report Incident*: Submit new incidents with Title, Description, and Severity.
- *Responsive Design*: Ensures usability across various devices.
- *Input Validation*: Basic validation to ensure non-empty fields during incident reporting.

## 📦 Installation and Setup

Follow these steps to run the project locally:

1. *Clone the Repository*

   bash
   git clone https://github.com/devansh-02/ai-safety-dashboard.git
   cd ai-safety-dashboard
   

2. *Install Dependencies*

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the project dependencies:

   bash
   npm install
   

3. *Run the Development Server*

   Start the development server:

   bash
   npm run dev
   

   The application will be available at http://localhost:5173/ by default.

4. *Build for Production*

   To create an optimized production build:

   bash
   npm run build
   

## 📁 Project Structure


ai-safety-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── IncidentList.tsx
│   │   ├── IncidentForm.tsx
│   │   └── IncidentDetails.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
└── vite.config.ts


## 🎨 Design Decisions

- *State Management*: Utilized React's useState and useEffect hooks for local state management, considering the application's simplicity.
- *Component Structure*: Broke down the UI into reusable components for better maintainability and readability.
- *Styling*: Employed CSS Flexbox and Grid for responsive layouts, ensuring compatibility across devices.
- *Form Validation*: Implemented basic validation to ensure that users provide necessary information when reporting incidents.

## 🧠 Challenges Faced

- *State Synchronization*: Ensuring that the incident list updates correctly upon adding new incidents required careful state management.
- *Responsive Design*: Designing a layout that remains user-friendly across various screen sizes posed some challenges, which were addressed using CSS media queries and flexible layouts.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to contribute to this project by submitting issues or pull requests. Your feedback and contributions are welcome!
