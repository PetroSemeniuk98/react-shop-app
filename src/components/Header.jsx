const Header = () => {
    return (
      <nav className="blue darken-3">
        <div className="nav-wrapper">
          <a href="https://github.com/PetroSemeniuk98/react-shop-app" className="brand-logo">
            Goods
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="https://github.com/PetroSemeniuk98/react-shop-app">Reposetories</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export { Header };