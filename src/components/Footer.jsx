const Footer = () => {
    return (
      <div
        className="footer-copyright blue lighten-4"
        style={{ padding: "20px 0" }}
      >
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className=" text-lighten-4 right"
            style={{ color: "black" }}
            href="#!"
          >
            Repositories
          </a>
        </div>
      </div>
    );
  };
  
  export { Footer };