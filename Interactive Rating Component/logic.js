// getting some elements
const RatingButtons = document.querySelectorAll('.rating-Numbers div');
const SubmitBtn = document.querySelector('button');
const cardContent = document.querySelector('.card-content')




// getting the rating button element and choose it and removing it
RatingButtons.forEach((e) => {
    e.addEventListener('click', (e) => {
        RatingButtons.forEach((element) => {
            element.classList.remove('RatingBtn');
        })
        e.target.classList.add('RatingBtn');
        // after one btn is clicked the disabled is false and cursor pointer
        SubmitBtn.disabled = false
        SubmitBtn.style.cursor = 'pointer'
    });
});



// intializing that the submit button is disabled and has no-drop cursor until a ratingBtn is clicked
SubmitBtn.disabled = true
SubmitBtn.style.cursor = 'no-drop'


// excuting the onclick on the submit button and creating the next page 
SubmitBtn.addEventListener('click', () => {

    // Making an array of the Rating Buttons to calculate the length and get the buttons
    let ArrayOfRatingButtons = Array.from(RatingButtons);
    let RatedElement = ArrayOfRatingButtons.find((ele) => {
        return ele.classList.contains('RatingBtn')
    });



    // changing the content of the first page to the second page
    cardContent.innerHTML = `
    <img id="submitImg" src="interactive-rating-component-main/interactive-rating-component-main/images/illustration-thank-you.svg">
    <p class='submitedRating'> You Selected ${RatedElement.textContent} out of ${ArrayOfRatingButtons.length}  </p>
    <div class='submitThank'>
    <h2>Thank you!</h2>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
    </div>
    `
});







