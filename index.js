fetch("index-data.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    var aboutSection = document.getElementById("aboutText");

    var html = "<h2>" + data.title + "</h2>";

    data.paragraphs.forEach(function(text) {
      html += "<p>" + text + "</p>";
    });

    aboutSection.innerHTML = html;
  })
  .catch(function(error) {
    console.log("Error loading about text:", error);
  });
