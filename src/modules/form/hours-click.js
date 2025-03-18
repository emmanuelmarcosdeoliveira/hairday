export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");
  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      // Estamos percorrendo a lista e removendo a classe de selecionada
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });
      // Adiciono a classe na li clicada
      selected.target.classList.add("hour-selected");
    });
  });
}
