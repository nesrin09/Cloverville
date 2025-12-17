fetch("data.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    // Viser common points
    var pointsDiv = document.getElementById("commonPoints");
    pointsDiv.innerHTML = "<p>Common points: " + data.commonPoints + "</p>";

    // Viser rewards
    var rewardsDiv = document.getElementById("rewards");

    data.rewards.forEach(function(reward) {
      var box = document.createElement("div");
      box.classList.add("box");

      box.innerHTML =
        "<p><strong>" + reward.name + "</strong></p>" +
        "<p>" + reward.points + " points to unlock</p>";

      rewardsDiv.appendChild(box);
    });
  })
  .catch(function(error) {
    console.log("Noget gik galt:", error);
  });
