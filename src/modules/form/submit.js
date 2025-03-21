// importações
import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

// Capturando o input do nome
const clientName = document.getElementById("client");

// Capturando o formulário
const form = document.querySelector("form");
// Selecionado o input
const selectedDate = document.getElementById("date");
// Data atual para o input e data minima
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carregando a data atual dentro do calendário
selectedDate.value = inputToday;
// Definir que não pode ser inserido datas ja passadas
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  // prevenindo o evento de refresh do formulário
  event.preventDefault();
  try {
    // Recuperando o nome do cliente
    const name = clientName.value.trim();
    if (!name) {
      return alert("Digite o seu nome");
    }
    // Recuperar o horário selecionado
    const hourSelected = document.querySelector(".hour-selected");
    // REcuperando o nosso horário selecionado
    if (!hourSelected) {
      return alert("Selecione um Horário");
    }
    // Recuperar somente a hora
    const [hour] = hourSelected.innerText.split(":");

    // Vamos inserir a hora na data

    const when = dayjs(selectedDate.value).add(hour, "hour");

    // Gerar um ID
    const id = new Date().getTime();

    // Faz o agendamento

    await scheduleNew({
      id,
      name,
      when,
    });

    // Vamos recarregar a página
    await schedulesDay();
    // limpa o input de nome do cliente
    clientName.value = "";
  } catch (error) {
    alert("Não foi possível realizar o agendamento");
    console.log(error);
  }
};
