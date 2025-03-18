// importando a função que exibe as horas formatada e verifica se ele não é uma hora passada
import { hoursLoad } from "../form/hours-load";

// Seleciona o input de Data
const selectDate = document.getElementById("date");

export function schedulesDay() {
  // Obtém a data do input
  const date = selectDate.value;

  // Renderiza as horas disponíveis
  hoursLoad({ date });
}
