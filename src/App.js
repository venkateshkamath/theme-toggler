import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";
// localStorage
const localStorageTheme = () => {
  let theme = "light-theme"; // default value
  const currentState = localStorage.getItem("theme"); // getting the current value
  if (currentState) {
    theme = currentState;
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(localStorageTheme()); // set the local storage value

  const themeToggle = () => {
    if (theme === "light-theme") setTheme("dark-theme");
    else {
      setTheme("light-theme");
    }
  };
  useEffect(() => {
    //we set it to initial
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme); //setting up the theme{key} as our theme
  }, [theme]); //theme changes

  return (
    <main>
      <nav className="nav-center">
        <h1>Theme Toggler</h1>
        <h4>{theme}</h4>
        <button onClick={themeToggle} className="btn">
          Toggle
        </button>
      </nav>
      <section className="articles">
        {/* now we map things here, we spread the object */}
        {data.map((item) => (
          <Article key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
}

export default App;
