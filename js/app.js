

// * Define Global Variables
const sections = document.querySelectorAll("section");
const newul    = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();
//  End Global Variables


//  Begin Helper Functions
function addactivlink(activeSection){
    alllinks= document.querySelectorAll("a");
    actsec= activeSection.getAttribute("data-nav");
    alllinks.forEach((link)=>{
        link.classList.remove("active");
    })
    alllinks.forEach((link=>{
        if(link.textContent == actsec){
            link.classList.add("active");
        }
    }))
}
// End Helper Functions

// build Nav Menu

// loop all sections
sections.forEach((section)=>{
  
    // creat Li
    let newli = document.createElement("li");
      // console.log(newli);
   
    //Set Li Class Name
    newli.className = ("menu__link");
    
    //Creat a
    newlink = document.createElement("a");
      // console.log(newlink);
    
    //Get Section Attribute
    newText = section.getAttribute("data-nav");
      // console.log(newText);
    
      //Set Link Text by active section Data Nav value
    linkText = document.createTextNode(newText);
        //console.log(linkText);
    
    //Add Event Lestener To The Link
    newlink.addEventListener("click", function(){
    
        //To set the transition animation & link go to section
        section.scrollIntoView({behavior:"smooth"});
    });
 // add text to the link
newlink.appendChild(linkText);

// add link to li element
newli.appendChild(newlink);

//  use fragment for better performance
fragment.appendChild(newli);
})
//  add all elements that we make with fragment to the Ul
newul.appendChild(fragment);

// add scroll event lestner & add style to active section 
window.addEventListener("scroll",function(){
    //loop  all sections
    sections.forEach((section)=>{

        //remove active class from all sections 
        section.classList.remove("your-active-class");

        //loop all sections & apply getBoundingClientRect for each section
        sections.forEach((section)=>{
            section.getBoundingClientRect();

            //creat a variable to hold getBoundingClientRect value
            let react= section.getBoundingClientRect();

            //creat a variable to hold react.top value
                x= react.top;

            //make a condition to check the right section
            if( x >= 0 && x < 500){
                // if the condition is true add activ class to the active section
                section.classList.add("your-active-class");
                // apply addactivelink function to active section

                addactivlink(section);
            }
        })
    })
})
