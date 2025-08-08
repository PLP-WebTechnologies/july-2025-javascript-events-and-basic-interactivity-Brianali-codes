//function 1: This showcases how i used event listeners with the click value to change the font sizes of the text.


    let button1x = document.getElementById('btn1x');
    let button2x = document.getElementById('btn3x');
    let button3x = document.getElementById('btn5x');

    let textElement = document.getElementById('textElement');
    button1x.addEventListener('click', function() {        
        textElement.style.fontSize = '20px'; 
        console.log('Font size changed to 10px');})
    
    button2x.addEventListener('click', function() {        
        textElement.style.fontSize = '25px'; // Change font size to 10px
        console.log('Font size changed to 10px'); 
    })
    button3x.addEventListener('click',function() {        
        textElement.style.fontSize = '30px'; // Change font size to 10px
        console.log('Font size changed to 10px'); })
    

let spinner = document.getElementById('Spinner');

spinner.addEventListener('mouseenter', function() {
    spinner.style.animation = 'changeColor 2s linear ';
    console.log('Spinner clicked and toggled spin class');

spinner.addEventListener('mouseleave', function() {
    spinner.style.animation = 'none'; 
    console.log('Spinner clicked and toggled spin class');
}
)
});
const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const errorMsg = document.getElementById('error-msg');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop normal submit
    errorMsg.textContent = ''; // Clear old errors

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Name check
    if (name === '') {
      errorMsg.textContent = 'Please enter your name.';
      nameInput.focus();
      return;
    }

    // Email check (simple pattern)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMsg.textContent = 'Please enter a valid email.';
      emailInput.focus();
      return;
    }

    // If everything is valid
    alert('Form submitted successfully!');
    form.reset();
  });