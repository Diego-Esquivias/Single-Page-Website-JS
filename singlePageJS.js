// Creating Header 
const navBarUl = document.createElement('ul')
const navBarLi1 = document.createElement('li')
const navBarA1 = document.createElement('a')
const navBarLi2 = document.createElement('li')
const navBarA2 = document.createElement('a')
const navBarLi3 = document.createElement('li')
const navBarA3 = document.createElement('a')

// Giving NavBar styling
navBarUl.style.listStyleType = 'none'
navBarUl.style.margin = 0
navBarUl.style.padding = 0
navBarUl.style.backgroundImage = 'url("./Images/repeating-triangles.svg")'
navBarUl.style.height = '100px'
navBarUl.style.display = 'flex'
navBarUl.style.borderRadius = '20px'
navBarUl.style.border = "2px solid white"
navBarUl.style.alignItems = 'center'

// Navbar a tags styling
navBarA1.innerHTML = "Home"
navBarA1.setAttribute('href', 'https://www.west-mec.edu/')
navBarA1.style.color = 'white'
navBarA1.style.fontSize = '30px'

navBarA2.innerHTML = "Info"
navBarA2.setAttribute('href', 'https://www.west-mec.edu/')
navBarA2.style.color = 'white'
navBarA2.style.fontSize = '30px'

navBarA3.innerHTML = "Gallery"
navBarA3.setAttribute('href', 'https://www.west-mec.edu/')
navBarA3.style.color = 'white'
navBarA3.style.fontSize = '30px'

// Navbar li tags styling
navBarLi1.style.display = 'inline'
navBarLi2.style.display = 'inline'
navBarLi3.style.display = 'inline'

navBarLi1.style.padding = '20px'
navBarLi2.style.padding = '20px'
navBarLi3.style.padding = '20px'

// Change the background color
document.body.style.background = "#292929"

// Add them to the HTML Page
document.body.appendChild(navBarUl)
navBarUl.appendChild(navBarLi1)
navBarUl.appendChild(navBarLi2)
navBarUl.appendChild(navBarLi3)
navBarLi1.appendChild(navBarA1)
navBarLi2.appendChild(navBarA2)
navBarLi3.appendChild(navBarA3)

// Creating stuff for the main content page
const mainDiv = document.createElement('div')
const mainH1Tag = document.createElement('h1')

mainH1Tag.innerHTML = "Marvel Characters"
mainH1Tag.style.textAlign = "center"
mainH1Tag.style.color = 'White'
mainDiv.id = 'main'

// Add the main div and h1 to the html
document.body.appendChild(mainDiv)
mainDiv.append(mainH1Tag)

// Create container for the image gallery
const galleryContainer = document.createElement('div')
galleryContainer.style.display = 'flex' // Apply flex display
galleryContainer.style.flexWrap = 'wrap' // Allow wrapping to new line
galleryContainer.style.justifyContent = 'center'
galleryContainer.id = 'gallery'

// Create image tags
const image1 = document.createElement('img')
const image2 = document.createElement('img')
const image3 = document.createElement('img')
const image4 = document.createElement('img')

// Set image sources
image1.src = './Images/spiderman.jpg'
image2.src = './Images/ironman.jpg'
image3.src = './Images/deadpool.jpg'
image4.src = './Images/moonknight.jpg'

// Set image styles
const imageStyle = 'width: 200px; height: 300px; margin: 10px; border-radius: 15px; border: 2px solid white' // Combine styles into a single string

// Apply styles to each image 
image1.style.cssText = imageStyle
image2.style.cssText = imageStyle
image3.style.cssText = imageStyle
image4.style.cssText = imageStyle

// Append images to the gallery container
galleryContainer.appendChild(image1)
galleryContainer.appendChild(image2)
galleryContainer.appendChild(image3)
galleryContainer.appendChild(image4)

// Append the gallery container to the html page
mainDiv.appendChild(galleryContainer)

galleryContainer.style.marginBottom = '20px'

// Define a variable to track the visibility of the gallery
let isGalleryVisible = true;

// Assign onclick event handlers to images
image1.onclick = function() { imageClick('./Images/spiderman.jpg'); }
image2.onclick = function() { imageClick('./Images/ironman.jpg'); }
image3.onclick = function() { imageClick('./Images/deadpool.jpg'); }
image4.onclick = function() { imageClick('./Images/moonknight.jpg'); }

function imageClick(imageSrc) {
    if (isGalleryVisible) {
        // Hide the gallery container when an image is first clicked
        galleryContainer.style.display = 'none';
        isGalleryVisible = false;
        
        // Create a new image element
        const newImage = document.createElement('img');
        newImage.src = imageSrc;
        
        // Apply the same CSS styles as the gallery images
        newImage.style.cssText = imageStyle;
        
        // Center the new image
        newImage.style.display = 'block';
        newImage.style.margin = '0 auto';
        
        // Create a container to center the image
        const imageContainer = document.createElement('div');
        imageContainer.style.textAlign = 'center';
        
        // Append the new image to the image container
        imageContainer.appendChild(newImage);
        
        // Append the image container to the main div
        mainDiv.appendChild(imageContainer);
        
        // Assign onclick event to the new image to show the gallery again when clicked
        newImage.onclick = function() {
            // Show the gallery container
            galleryContainer.style.display = 'flex';
            isGalleryVisible = true;
            
            // Remove the clicked image container
            mainDiv.removeChild(imageContainer);
        }
    }
}

// Creating footer
const footer = document.createElement('footer')
const footerContent1 = document.createElement('div')
const footerContent2 = document.createElement('div')
const footerContent3 = document.createElement('div')

// Giving footer styling
footer.style.backgroundImage = 'url("./Images/repeating-triangles.svg")'
footer.style.color = 'white'
footer.style.padding = '10px'
footer.style.textAlign = 'center'
footer.style.height = '100px'
footer.style.width = '100%'
footer.style.borderRadius = '20px'
footer.style.border = "2px solid white"

// Adding text to footer
footerContent1.textContent = 'Created by: Diego esquivias'
footerContent2.textContent = 'Email: desqui048@west-mec.org'
footerContent3.textContent = 'Phone Number: 602 580 5291'

// Applying styles to footer content
const footerContentStyle = 'padding: 10px;'
footerContent1.style.cssText = footerContentStyle
footerContent2.style.cssText = footerContentStyle
footerContent3.style.cssText = footerContentStyle

// Appending content to footer
footer.appendChild(footerContent1)
footer.appendChild(footerContent2)
footer.appendChild(footerContent3)

// Add the footer to the body
document.body.appendChild(footer)