function atualizarRelogio() {
  const display = document.getElementById("relogio");
  const agora = new Date();

  // Formatação oficial de Brasília
  const horarioBrasilia = agora.toLocaleTimeString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  display.innerText = horarioBrasilia;
}

// Atualiza a cada 1 segundo
setInterval(atualizarRelogio, 1000);
atualizarRelogio(); // Executa ao abrir a página
