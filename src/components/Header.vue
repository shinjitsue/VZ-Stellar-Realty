<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="../assets/logo-nav.png"
            alt="Logo"
            width="130"
            height="38"
            class="d-inline-block align-text-top"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header border-bottom">
            <img
              src="../assets/logo-nav.png"
              alt="Logo"
              width="130"
              height="38"
              class="d-inline-block align-text-top"
            />
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item me-3">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link" href="#">Popular</a>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link" href="#">Listings</a>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link" href="#">About</a>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle no-arrow"
                  href="#"
                  id="navbarDropdownProfile"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <!-- Image visible on larger screens, hidden on smaller screens -->
                  <img
                    src="../assets/Account.png"
                    alt="Profile"
                    class="d-none d-lg-block rounded-circle"
                    style="width: 30px; height: 30px"
                  />
                  <!-- "Account" text visible on smaller screens, hidden on larger screens -->
                  <span class="d-lg-none">Account</span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownProfile"
                >
                  <li><a class="dropdown-item" href="#">Profile</a></li>
                  <li><a class="dropdown-item" href="#">Settings</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.dropdown-menu-bottom-left {
  position: absolute;
  transform: translate3d(
    -70%,
    0,
    0
  ) !important; /* Adjusted from -100% to -5% */
  top: 100%;
  left: 0;
}

.no-arrow::after {
  display: none;
}

/* Active navbar item styles */
.nav-link.active {
  font-weight: bolder;
  color: #dfad03 !important; /* Change the color */
}

.nav-link:hover {
  color: #dfad03;
}
</style>
