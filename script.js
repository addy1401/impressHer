document
  .getElementById("proceed-button")
  .addEventListener("click", function () {
    window.location.href = "wishPage.html";
  });

document
  .getElementById("no-button")
  .addEventListener("click", function (event) {
    // Get the button element
    const button = event.target;

    // Generate random offsets
    const offsetX = Math.floor(Math.random() * 200); // Random number between -100 and 100
    const offsetY = Math.floor(Math.random() * 200) - 100; // Random number between -100 and 100

    // Apply the offsets
    button.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

    // Change the text
    document.querySelector(".question").textContent =
      "Aapko yes dabana hi padega cutie 🤭";
  });
