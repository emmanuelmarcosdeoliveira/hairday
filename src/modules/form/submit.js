// importações
import dayjs from "dayjs";

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

form.onsubmit = (event) => {
  // prevenindo o evento de refresh do formulário
  event.preventDefault();
  console.log("enviado");
};
