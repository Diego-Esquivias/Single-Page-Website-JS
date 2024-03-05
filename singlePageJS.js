// Creating Header 

const navBarUl = document.createElement('ul')
const navBarLi1 = document.createElement('li')
const navBarA1 = document.createElement('a')
const navBarLi2 = document.createElement('li')
const navBarA2 = document.createElement('a')
const navBarLi3 = document.createElement('li')
const navBarA3 = document.createElement('a')

// Giving NavBar Stuff
navBarUl.style.listStyleType = 'none'
navBarUl.style.margin = 0
navBarUl.style.padding = 0
navBarUl.style.backgroundColor = 'crimson'
navBarUl.style.height = '50px'
navBarUl.style.display = 'flex'
navBarUl.style.alignItems = 'center'

// Navbar a tags
navBarA1.innerHTML = "Home"
navBarA1.setAttribute('href', 'https://www.west-mec.edu/')
navBarA1.style.color = 'white'

navBarA2.innerHTML = "Info"
navBarA2.setAttribute('href', 'https://www.west-mec.edu/')
navBarA2.style.color = 'white'

navBarA3.innerHTML = "Gallery"
navBarA3.setAttribute('href', 'https://www.west-mec.edu/')
navBarA3.style.color = 'white'

// Navbar li tags
navBarLi1.style.display = 'inline'
navBarLi2.style.display = 'inline'
navBarLi3.style.display = 'inline'

navBarLi1.style.padding = '20px'
navBarLi2.style.padding = '20px'
navBarLi3.style.padding = '20px'

document.body.appendChild(navBarUl)
navBarUl.appendChild(navBarLi1)
navBarUl.appendChild(navBarLi2)
navBarUl.appendChild(navBarLi3)
navBarLi1.appendChild(navBarA1)
navBarLi2.appendChild(navBarA2)
navBarLi3.appendChild(navBarA3)