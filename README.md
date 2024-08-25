Here’s a brief overview of the project structure:

src/: This directory contains the main source code for the React application.
components/: All React components (like Dashboard, Widget, AddWidgetModal, etc.) are stored here.
App.js: The main entry point for the React application.
App.css: Contains global styles for the application.
public/: Contains the index.html file, which is the single HTML file that hosts the React app.


Dynamic Dashboard: Users can customize the dashboard by adding or removing widgets.
Responsive Design: The dashboard adjusts its layout according to the screen size for optimal usability.
Modular Components: The application uses reusable React components, which helps in maintaining and scaling the application.

These are key features.

The application allows users to add widgets dynamically. The AddWidgetModal component handles this functionality, presenting a modal window where users can select widgets to add to their dashboard.


The BarGraphWidget and Widget components utilize libraries like Chart.js to render different types of charts. These components are designed to be flexible and can accept different types of data to render the corresponding charts.

The project includes custom CSS files like BarGraphWidget.css and App.css to style the components. These styles ensure that the widgets are visually appealing and consistent with the overall design of the dashboard.

This project is a dynamic dashboard application built with ReactJS. It allows users to personalize their dashboards by adding various widgets, such as doughnut charts, bar graphs, and more.