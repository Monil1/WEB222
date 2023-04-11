// Get the review container element
const reviewContainer = document.getElementById("review-container");

// Function to generate a single review card
function generateReviewCard(review) {
  // Create card container element
  const card = document.createElement("div");
  card.classList.add("review-card");

  // Create name element
  const name = document.createElement("h3");
  name.textContent = review.name;
  card.appendChild(name);

  // Create date element
  const date = document.createElement("p");
  date.textContent = new Date(review.date).toLocaleDateString();
  card.appendChild(date);

  // Create rating element
  const rating = document.createElement("div");
  rating.classList.add("rating");
  for (let i = 0; i < review.rating; i++) {
    const star = document.createElement("span");
    star.textContent = "★";
    rating.appendChild(star);
  }
  for (let i = review.rating; i < 5; i++) {
    const star = document.createElement("span");
    star.textContent = "☆";
    rating.appendChild(star);
  }
  card.appendChild(rating);

  // Create review text element
  const text = document.createElement("p");
  text.textContent = review.text;
  card.appendChild(text);

  return card;
}

// Function to generate all review cards
function generateReviewCards() {
  // Clear the current review container contents
  reviewContainer.innerHTML = "";

  // Loop through all reviews and generate a card for each
  reviewData.forEach((review) => {
    const card = generateReviewCard(review);
    reviewContainer.appendChild(card);
  });
}

// Call the generateReviewCards function once initially to display all reviews
generateReviewCards();

// Get the form element
const reviewForm = document.getElementById("review-form");

// Add a submit event listener to the form
reviewForm.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the form fields
  const name = reviewForm.elements["name"].value;
  const date = new Date();
  const rating = parseInt(reviewForm.elements["rating"].value);
  const text = reviewForm.elements["text"].value;

  // Create a new review object and add it to the reviewData array
  const newReview = { name, date, rating, text };
  reviewData.push(newReview);

  // Regenerate all the review cards to include the new review
  generateReviewCards();

  // Reset the form fields
  reviewForm.reset();
});
