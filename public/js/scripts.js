// API's

(async function fetchProjetos() {
  try {
    const response = await fetch(
      "https://apiportifolio.devgustavo.com.br/api/projetos"
    );
    if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

    const data = await response.json();
    console.log("Dados recebidos:", data);
  } catch (error) {
    console.error("Erro ao buscar projetos:", error);
  }
})();

(async function fetchRecados() {
  try {
    const response = await fetch(
      "https://apiportifolio.devgustavo.com.br/api/recados"
    );
    if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

    const data = await response.json();
    console.log("Dados recebidos:", data);
  } catch (error) {
    console.error("Erro ao buscar projetos:", error);
  }
})();

(async function fetchRecados() {
  try {
    const response = await fetch(
      "https://apiportifolio.devgustavo.com.br/api/feed"
    );
    if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

    const data = await response.json();
    console.log("Dados recebidos:", data);
  } catch (error) {
    console.error("Erro ao buscar projetos:", error);
  }
})();

// Contador de visualizações

document.addEventListener("DOMContentLoaded", function () {
  function countViewers() {
    const val = document.getElementById("count");
    if (val) {
      let total = Number(val.textContent) + 1;
      document.getElementById("count").innerText = total;
      console.log(total);
    } else {
      console.error("Elemento 'count' não encontrado!");
    }
  }

  countViewers();
});
