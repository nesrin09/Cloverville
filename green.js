fetch("green-data.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    var container = document.getElementById("greenTasks");

    data.tasks.forEach(function(task) {
      var box = document.createElement("div");
      box.classList.add("box");

      box.innerHTML =
        "<p><strong>" + task.title + "</strong></p>" +
        "<p>" + task.description + "</p>" +
        "<p>Points earned: " + task.points + "</p>";

      container.appendChild(box);
    });

  })
  .catch(function(error) {
    console.log("Error loading green tasks:", error);
  });
