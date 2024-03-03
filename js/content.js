const renderContent = () => {

  // Hero
  const heroProfileHeadline = document.querySelector("main.root .hero .profile .headline")
  const heroProfileSubHeadline = document.querySelector("main.root .hero .profile .sub-headline")

  heroProfileHeadline.innerHTML = profile.hero.headline
  heroProfileSubHeadline.innerHTML = profile.hero.description


  // About
  const aboutHeader = document.querySelector("main.root .about .about-header h1")
  const aboutContent = document.querySelector("main.root .about .about-content")

  aboutHeader.innerHTML = profile.about.title

  for (const about of profile.about.aboutContent) {
    const p = document.createElement("p")
    p.innerHTML = about
    aboutContent.append(p)
  }

  // Portfolio
  const portfolioHeaderH1 = document.querySelector("main.root .portfolio .portfolio-header h1")
  const portfolioHeaderP = document.querySelector("main.root .portfolio .portfolio-header p")
  const portfolioContent = document.querySelector("main.root .portfolio .portfolio-content")

  portfolioHeaderH1.innerHTML = profile.portfolio.title
  portfolioHeaderP.innerHTML = profile.portfolio.subtitle

  for (const portfolio of profile.portfolio.portfolioContent) {
    const icon = document.createElement("img")
    const category = document.createElement("h5")
    const title = document.createElement("h4")
    const description = document.createElement("p")
    const card = document.createElement("article")

    icon.setAttribute("src", portfolio.logo)
    category.innerHTML = portfolio.category
    title.innerHTML = portfolio.title
    description.innerHTML = portfolio.description
    card.append(icon, category, title, description)
    portfolioContent.append(card)
  }
}