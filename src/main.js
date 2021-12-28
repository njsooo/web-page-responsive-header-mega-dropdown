const liDropdown = document.querySelector(".dropdown");
const ulDropdownContent = liDropdown.querySelector(".dropdown .dropdown-content");
initHoverEventCollapse(liDropdown, ulDropdownContent);
initClickEventCollapse(liDropdown.querySelector("a"), ulDropdownContent);

const liMegaMenu = document.querySelector(".mega-menu");
const divDropdownContent = liMegaMenu.querySelector(".mega-menu-content");
initHoverEventCollapse(liMegaMenu, divDropdownContent);
initClickEventCollapse(liMegaMenu.querySelector("a"), divDropdownContent);

function expand(el) {
  el.style.maxHeight = `${el.scrollHeight}px`;
}

function hide(el) {
  el.style.maxHeight = null;
}

function initHoverEventCollapse(btn, content) {
  btn.addEventListener("mouseover", () => {
    if (window.matchMedia("(min-width: 961px)").matches) {
      expand(content);
    }
  });

  btn.addEventListener("focusin", () => {
    if (window.matchMedia("(min-width: 961px)").matches) {
      expand(content);
    }
  });

  btn.addEventListener("mouseleave", () => {
    if (window.matchMedia("(min-width: 961px)").matches) {
      hide(content);
    }
  });

  btn.addEventListener("focusout", () => {
    if (window.matchMedia("(min-width: 961px)").matches) {
      hide(content);
    }
  });
}

function initClickEventCollapse(btn, content) {
  btn.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 960px)").matches) {
      if (content.style.maxHeight) {
        hide(content);
      } else {
        expand(content);
      }
    }
  });
}

(function initResizeEventCloseMenus() {
  let timer;
  const btnCloseNav = document.querySelector(".btn-close-mobile-nav");
  window.addEventListener("resize", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (window.innerWidth > 960) {
        ulDropdownContent.style.maxHeight = null;
        divDropdownContent.style.maxHeight = null;
        btnCloseNav.click();
      }
    }, 0);
  });
})();

(function initClickEventOpenSideNav() {
  const btnOpenNav = document.querySelector(".btn-open-mobile-nav");
  const elNav = document.querySelector("nav");
  btnOpenNav.addEventListener("click", () => {
    if (!elNav.style.left) {
      elNav.style.left = 0;
      document.body.classList.add("side-nav-open");
    }
  });
})();

(function initClickEventOpenSideNav() {
  const btnCloseNav = document.querySelector(".btn-close-mobile-nav");
  const elNav = document.querySelector("nav");
  btnCloseNav.addEventListener("click", () => {
    if (elNav.style.left) {
      elNav.style.left = null;
      document.body.classList.remove("side-nav-open");
    }
  });
})();
