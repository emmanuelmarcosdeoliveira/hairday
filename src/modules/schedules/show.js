import dayjs from "dayjs";

// Selecionar as seções manha , tarde, noite
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
  try {
    //Abaixo estamos  Estamos limpando o conteúdo da li
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    // Renderizando os agendamentos por período
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");

      // Adicionando o ID do agendamento
      item.setAttribute("data-id", schedule.id);
      time.textContent = dayjs(schedule.when).format("HH:mm");
      name.textContent = schedule.name;

      // Criando o ícone de cancelar o agendamento

      const cancelIcon = document.createElement("img");
      cancelIcon.classList.add("cancel-icon");
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
      cancelIcon.setAttribute("alt", "cancelar agendamento");

      // Adicionando o tempo e nome e ícone
      item.append(time, name, cancelIcon);

      // obtendo somente a hora
      const hour = dayjs(schedule.when).hour();
      // Renderizar o agendamento de forma condiciona (manhã, tarde, noite)
      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    });
  } catch (error) {
    alert("Não foi possível exibir os agendamentos!");
    console.log(error);
  }
}
