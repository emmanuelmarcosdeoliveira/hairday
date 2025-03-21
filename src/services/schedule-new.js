import { apiConfig } from "./api-config";

export async function scheduleNew({ id, name, when }) {
  try {
    // Faz uma requisição para enviar os dados de agendamento
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });
    // mensagem de sucesso
    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar, tente novamente mais tarde!");
  }
}
