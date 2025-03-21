import { scheduleCancel } from "../../services/schedule-cancel";
import { schedulesDay } from "./load";
const periods = document.querySelectorAll(".period");

async function eventClick(event) {
  if (event.target.classList.contains("cancel-icon")) {
    // obter a li pai do elemento clicado
    const item = event.target.closest("li");
    // Pega o id do agendamento para remover
    const { id } = item.dataset;

    // confirma se o id foi selecionado

    if (id) {
      // Confirma se o usuário que remover
      const isConfirm = confirm(
        "Tem certeza que deseja cancelar o agendamento ?"
      );

      if (isConfirm) {
        // Cancela o agendamento
        await scheduleCancel({ id });
        // Recarrega a página
        schedulesDay();
      }
    }
  }
}

periods.forEach((period) => {
  // Capturar o evento de click na lista
  period.addEventListener("click", eventClick);
});
