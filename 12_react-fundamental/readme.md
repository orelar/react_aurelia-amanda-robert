# React Fundamentals 🚀

In this new React material, we will learn about fundamental of React. 🎉 In this material, we'll also learn about how to make essential building blocks of web development, spiced up with a touch of creativity and fun in React.  🎨✨

## Here's my summary of React Fundamental material :sparkles:

### 1. JSX Magic ✨

At first, I was a little bit confused with this concept where HTML are on the same JSX file. So based from what I learned, JSX (JavaScript XML) is the enchanting heart of React, merging the worlds of HTML and JavaScript into a single, powerful syntax. This transformative language can fuses HTML and JavaScript, enhances readability, component rendering where we define how components should look and behave by composing JSX elements.

![React Meme](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*gBhX2KjnmYa-Q-c583cCcw.png) 

### 2. React Component Mastery 🧩

React Components serve as the bedrock of modern web development, offering a modular, reactivity-driven approach to building user interfaces. These versatile building blocks enable the breakdown of UIs into reusable and self-contained units, simplifying maintenance and enhancing efficiency. With a hierarchical structure and customizable properties, components create an organized and adaptable UI ecosystem. Developers wield control over component lifecycles, manage dynamic data with local state, and extend React's core components to craft bespoke elements. Powered by the Virtual DOM, React Components optimize performance, ensuring responsive and visually appealing user interfaces that redefine web development excellence.

### 3. React Lifecycle Adventures 🌱🚀

I learned some React lifecycle that commonly used as a React developer
![React Lifecycle](https://i0.wp.com/reactjsguru.com/wp-content/uploads/2022/06/Screenshot-360.webp?w=1440&ssl=1)

### 4. Conditional Sorcery 🧙‍♂️✨

Here some code that I have learned for conditional in React

First code:
```jsx
if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
} else {
      button = <LoginButton onClick={this.handleLoginClick} />;
}
```

Second code:
```jsx
return (
    <div>
      {isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      }
    </div>
  );
```

## References
- [React Lifecycle](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [React JS — The Confusing Parts](https://levelup.gitconnected.com/react-js-the-confusing-parts-4e9aea20c94c)
- [React Component Life Cycle with Diagram](https://reactjsguru.com/react-component-life-cycle-with-diagram/)

