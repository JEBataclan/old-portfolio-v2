import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" href="#">
            Home <span class="sr-only">(current)</span>
          </a>
          <a class="nav-link" href="#">
            About Me
          </a>
          <a class="nav-link" href="#">
            Works
          </a>
          <a class="nav-link" href="#">
            Pricing
          </a>
          <a class="nav-link" href="#">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
