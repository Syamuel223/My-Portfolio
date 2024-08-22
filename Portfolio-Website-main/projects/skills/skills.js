function getProjects() {
  return fetch("skills.json")
      .then(response => response.json())
      .then(data => {
        return data
      });
}
