# Week 1 reflection
 
1. What is the difference between building a UI imperatively (plain DOM code) and 
declaratively (React)?
  - imperative UI building (plain DOM code) requires you to specify how to achieve a result step-by-step,
    whereas declarative UI building (React) lets you specify what the UI should look like based on your current state.
 
2. Why must a component name start with a capital letter?
  - A component name must start with a capital letter so that React can differentiate the component with a HTML tag.
 
3. What does a fragment <>...</> do, and why not just use a <div>?
  -  Fragment <>...</> lets you group multiple elements without adding an extra DOM element to the page.
  -  <div> creates unnecessary DOM nodes that break CSS layouts.
 
4. Name one benefit of splitting the UI into small components.
   - One benefit is the reusability, small components can be used in different parts of the application.
