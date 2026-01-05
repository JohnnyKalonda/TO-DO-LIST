// Sélection des éléments
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// Écoute de l'envoi du formulaire
form.addEventListener("submit", function (event) {
  event.preventDefault(); // empêche le rechargement
  const taskText = input.value.trim();
  // Sécurité : empêcher les tâches vides
  if (taskText === "") {
    return;
  }
  // Création des éléments
  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Supprimer";
  deleteButton.type = "button";
  // Suppression de la tâche
  deleteButton.addEventListener("click", function () {
    li.remove();
  });
  // Assemblage
  li.appendChild(deleteButton);
  ul.appendChild(li);
  // Réinitialisation du champ
  input.value = "";
});
