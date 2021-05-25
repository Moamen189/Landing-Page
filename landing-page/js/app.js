/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 *
*/
// Get all sections in html and put them in array
const sections = Array.from(document.querySelectorAll('section'));
// Get the unordered list in the nav
const navUl = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// function to create li appdended to navUl
function createLi(){
    // for loop to create list item according to number of sections
    for ( section of sections){

       let secNam = section.getAttribute('data-nav');

       let secLink = section.getAttribute('id');

        let listItem = document.createElement('li');

        // add the link in the item to scroll from nav
        listItem.innerHTML = `<a class="menu__link" href="#${secLink}">${secNam}</a>`;
        navUl.appendChild(listItem);
    }
}

//  determines if sections is in viewport
function activeSec(elem){
    
    let secPos = elem.getBoundingClientRect();
    return (secPos.top >= 0);
}

// gives a active section different appearance
function ToggleActiveClass(){
    
    for (section of sections){
        if (activeSec(section)){
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
            }
        }else {
            section.classList.remove('your-active-class');
        }
    }
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

createLi();

// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', ToggleActiveClass);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


