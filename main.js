var projectIndex = 1;
showProjects(projectIndex);

// Next/previous controls
const plusProjects = (n) => {
  showProjects(projectIndex += n);
}

// Thumbnail image controls
const currentProject = (n) => {
  showProjects(projectIndex = n);
}

function showProjects(n) {
  let projects = document.querySelectorAll(".myProjects");
  let dots = document.querySelectorAll(".dot");
  if (n > projects.length) {projectIndex = 1}
  if (n < 1) {projectIndex = projects.length}
  for (let i = 0; i < projects.length; i++) {
    projects[i].style.display = "none";
  }
  for (let j = 0; j < dots.length; j++) {
      dots[j].className = dots[j].className.replace(" active", "");
  }
  projects[projectIndex-1].style.display = "flex";
  dots[projectIndex-1].className += " active";
}


// scrollButton
const scrollButton = document.querySelector("#scrollButton");

scrollButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});