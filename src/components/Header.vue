<template>
  <header>
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary border-bottom fixed-top"
    >
      <div class="container">
        <router-link to="/home" class="navbar-brand">
          <img
            src="../assets/logo-nav.png"
            alt="Logo"
            width="130"
            height="36"
            class="d-inline-block align-text-top"
          />
        </router-link>
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
                <a
                  class="nav-link"
                  :class="{ active: activeSection === 'home' }"
                  href="#home"
                  @click.prevent="setActiveSection('home', $event)"
                  >Home</a
                >
              </li>
              <li class="nav-item me-3">
                <a
                  class="nav-link"
                  :class="{ active: activeSection === 'popular' }"
                  href="#popular"
                  @click.prevent="setActiveSection('popular', $event)"
                  >Popular</a
                >
              </li>
              <li class="nav-item me-3">
                <a
                  class="nav-link"
                  :class="{ active: activeSection === 'listings' }"
                  href="#listings"
                  @click.prevent="setActiveSection('listings', $event)"
                  >Listings</a
                >
              </li>
              <li class="nav-item me-3">
                <a
                  class="nav-link"
                  href="#about"
                  @click.prevent="setActiveSection('about')"
                  >About</a
                >
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
  props: {
    currentSection: {
      type: String,
      default: "home",
    },
  },
  data() {
    return {
      activeSection: this.currentSection, // Default active section
    };
  },
  watch: {
    currentSection(newSection) {
      this.activeSection = newSection;
    },
  },
  methods: {
    setActiveSection(section, event) {
      if (event) event.preventDefault();
      this.activeSection = section;
      this.$emit("section-changed", section);
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    },
    handleScroll() {
      // Define your sections IDs here
      const sections = ["home", "popular", "listings"]; // Example section IDs
      let currentSection = this.activeSection;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const bounding = element.getBoundingClientRect();
          if (bounding.top >= 0 && bounding.top <= window.innerHeight / 2) {
            currentSection = section;
            break; // Stop the loop once the current section is found
          }
        }
      }

      if (this.activeSection !== currentSection) {
        this.activeSection = currentSection;
        this.$emit("section-changed", currentSection);
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
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

.nav-link.active {
  font-weight: bolder;
  color: #dfad03 !important;
}

.nav-link:hover {
  color: #dfad03;
}

.nav-item {
  align-items: center;
}

.navbar-nav {
  align-items: center;
}

@media (max-width: 991px) {
  .offcanvas-body .navbar-nav {
    align-items: flex-start;
  }
}
</style>
