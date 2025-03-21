// importando a função que exibe as horas formatada e verifica se ele não é uma hora passada
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load";
import { schedulesShow } from "../schedules/show.js";
// Seleciona o input de Data
const selectDate = document.getElementById("date");

export async function schedulesDay() {
  // Obtém a data do input
  const date = selectDate.value;

  // Busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });

  // Exibe os agendamentos
  schedulesShow({ dailySchedules });

  // Renderiza as horas disponíveis
  hoursLoad({ date, dailySchedules });
}
