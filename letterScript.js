document
  .getElementById("change-image-button")
  .addEventListener("click", function () {
    // Example of changing the image source
    let image = document.getElementById("letter-image");
    if (image.src.endsWith("letter.jpg")) {
      image.src = "another_letter.jpg"; // Change to the new image URL
    } else {
      image.src = "letter.jpg"; // Change back to the original image URL
    }
  });
