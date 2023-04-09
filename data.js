window.reviewData = [
    {
        name: "Emily Nguyen",
        date: "2023-03-28",
        rating: 4,
        review: "I absolutely loved playing Gloomhaven with my friends! The game mechanics are complex and challenging, but also very rewarding once you start to get the hang of it. The game world is rich and immersive, and I found myself getting really invested in the story and my character's progress. The only downside is that it can be a bit overwhelming at first, so make sure to plan your moves carefully and work together as a team."
    },
    {
        name: "Alex Rodriguez",
        date: "2023-03-29",
        rating: 5,
        review: "I've played a lot of board games in my time, but Gloomhaven is easily one of my favorites. The tactical gameplay is incredibly satisfying, and the game really rewards creative thinking and strategic planning. I also love how every character feels unique and has their own strengths and weaknesses. The game is definitely challenging, but it's also incredibly fun and engaging. If you're a fan of RPGs or tactical board games, I highly recommend giving Gloomhaven a try."
    },
    {
        name: "Jessica Chen",
        date: "2023-03-30",
        rating: 3,
        review: "Gloomhaven is definitely not for everyone. The game is complex and can be a bit overwhelming, especially if you're not used to tactical RPGs. I also found that the game can drag on a bit, especially if you're playing with a group that likes to take their time with every move. That being said, I do think the game has a lot of potential if you're willing to put in the time and effort to really master the mechanics. The world is rich and immersive, and the game offers a lot of replayability."
    },
    {
        name: "Andrew Kim",
        date: "2023-03-31",
        rating: 2,
        review: "I really wanted to like Gloomhaven, but unfortunately it just didn't click with me. The game is incredibly complex and can be really overwhelming, especially if you're not used to this kind of tactical gameplay. I also found that the game can be a bit tedious and slow-moving, and I didn't really feel invested in the story or my character's progress. That being said, I know that a lot of people really love this game, so it might just be a matter of personal taste."
    },
    {
        name: "Sarah Patel",
        date: "2023-04-01",
        rating: 5,
        review: "Gloomhaven is hands down one of the best board games I've ever played. The game mechanics are deep and challenging, but also incredibly rewarding once you start to get the hang of them. I love how every character feels unique and has their own strengths and weaknesses, and how the game really encourages you to work together as a team. The game can be a bit overwhelming at first, but if you stick with it, you'll find that it's incredibly fun and engaging."
    },
    {
        name: "Alice Lee",
        date: "2022-03-20",
        rating: 4,
        review: "I had a great time playing Gloomhaven with my friends last night! The scenarios were challenging but not impossible, and the combat mechanics were easy to understand. I particularly enjoyed how each character has a unique set of abilities, making team composition an important aspect of the game. Overall, I would definitely recommend Gloomhaven to anyone who enjoys cooperative board games."
    }
];


document.addEventListener('DOMContentLoaded', function() {
    createTable(reviewData);

    const form = document.querySelector('.review-form-input-area');
    form.addEventListener('submit', function(event) {
      // Prevent the default behavior of the form (i.e. reloading the page) when the form is submitted
      event.preventDefault();
  
      // Get the values entered by the user
      const name = document.querySelector('#name').value;
      const date = document.querySelector('#date').value;
      const rating = document.querySelector('input[name="rating"]:checked').value;
      const review = document.querySelector('#review').value;
  
      // Create a new object with the input data
      const newReview = { name, date, rating, review };
  
      // Add the new object to the reviewData array
      reviewData.push(newReview);
  
      // Clear the form
      form.reset();
  
      // Re-create the table with the updated data
      createTable(reviewData);
    });

  });

function createTable(reviews) {
    // Fetching the tbody element
    let table = document.querySelector("#reviews-table");
    let newRow, newCell, newText;
  
    // Iterating through the reviews and creating table
    reviews.forEach(function (review) {
      // creates a table row
      newRow = table.insertRow();
      newRow.className = "card";
  
      newCell = newRow.insertCell();
      newCell.className = "reviews-name";
      newCell.textContent = "Name: ";
      newText = document.createTextNode(review.name);
      newCell.appendChild(newText);
  
      newCell = newRow.insertCell();
      newCell.className = "reviews-date";
      newCell.textContent = "Date: ";
      newText = document.createTextNode(review.date);
      newCell.appendChild(newText);
  
      newCell = newRow.insertCell();
      newCell.className = "reviews-rating";
      newCell.textContent = "Rating: ";
      newText = document.createTextNode(getRatingStars(review.rating));
      newCell.appendChild(newText);
  
      newCell = newRow.insertCell();
      newCell.className = "reviews-review";
      newText = document.createTextNode(review.review);
      newCell.appendChild(newText);
    });
  }
  
  function getRatingStars(rating) {
    let starsHtml = '';
    for (let i = 0; i < rating; i++) {
      starsHtml += '★ ';
    }
    for (let i = rating; i < 5; i++) {
      starsHtml += '☆ ';
    }
    return starsHtml.trim();
  }