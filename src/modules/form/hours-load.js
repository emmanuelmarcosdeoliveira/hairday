// Importação da lib de datas
import dayjs from "dayjs";

// importação dos horários de abertura e fechamento
import { openingHours } from "../../utils/opening-hours";
import { hoursClick } from "./hours-click";

// Importando a nossa lista de horas
const hours = document.getElementById("hours");

export function hoursLoad({ date, dailySchedules }) {
  // Limpa a lista de horários
  hours.innerHTML = "";
  // Obtém a lista de todos os horários ocupados
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  const opening = openingHours.map((hour) => {
    // Recuperar a hora e formatando para exibir somente a hora sem os minutos
    const [scheduleHours] = hour.split(":");

    // Vamos adicionar a hora e verificar se está no passado
    const isHourPast = dayjs(date)
      .add(scheduleHours, "hours")
      .isBefore(dayjs());

    const available = !unavailableHours.includes(hour) && !isHourPast;
    // Define se o horário está disponível
    return {
      hour,
      available,
    };
  });
  // Renderizar os horários
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");
    li.textContent = hour;
    if (hour === "9:00") {
      hourHeadAdd("Manhã");
    } else if (hour === "13:00") {
      hourHeadAdd("Tarde");
    } else if (hour === "18:00") {
      hourHeadAdd("Noite");
    }
    hours.append(li);
  });
  // Adiciona o evento de click nos horários disponíveis
  hoursClick();
}

function hourHeadAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;
  hours.append(header);
}
