const renderHeader = () => {
  const brand = document.querySelector("header.root .brand")
  const navigations = document.querySelector("header.root .navigations")
  const floatingNav = document.querySelector("header.root .float-nav")
  const floatingNavList = document.querySelector("header.root .float-nav .navigations")

  const floatingNavBtnWrapper = document.querySelector("header.root .hamburger")
  const closeFloatingNavBtn = document.querySelector("header.root .hamburger .close-hamburger-icon")
  const hamburgerFloatingNavBtn = document.querySelector("header.root .hamburger .hamburger-icon")

  brand.innerHTML = profile.nickName

  for (const route of routes) {
    const link = document.createElement("a")
    link.setAttribute("href", route.route)
    link.classList.add("smooth-transition")
    link.innerHTML = route.title
    navigations.append(link)
  }

  for (const route of routes) {
    const link = document.createElement("a")
    link.setAttribute("href", route.route)
    link.classList.add("smooth-transition")
    link.innerHTML = route.title
    floatingNavList.append(link)
  }

  // HAMBURGER FUNCTION
  floatingNavBtnWrapper.addEventListener("click", () => {
    hamburgerFloatingNavBtn.classList.toggle("hidden")
    closeFloatingNavBtn.classList.toggle("hidden")
    floatingNav.classList.toggle("hide-floatNav")
  })
}
