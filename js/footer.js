const renderFooter = () => {
  const navigations = document.querySelector("footer.root .navigation-bar .navigations")
  const brand = document.querySelector("footer.root .navigation-bar .brand")
  const copyright = document.querySelector("footer.root .copyright")

  brand.setAttribute("href", "#")
  brand.innerHTML = profile.nickName

  for (const route of routes) {
    const link = document.createElement("a")
    link.setAttribute("href", route.route)
    link.classList.add("smooth-transition")
    link.innerHTML = route.title
    navigations.append(link)
  }

  copyright.innerHTML = footer.text
}