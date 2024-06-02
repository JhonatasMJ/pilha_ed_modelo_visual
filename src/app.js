class Stack {
  constructor() {
    this.pilha = [];
  }

  pop() {
    return this.pilha.pop();
  }

  push(value) {
    this.pilha.push(value);
  }

  peek() {
    return this.pilha[this.pilha.length - 1];
  }

  qualeoPrimeiro() {
    return this.pilha[0];
  }

  size() {
    return this.pilha.length;
  }

  isEmpty() {
    return this.pilha.length === 0;
  }
}

const stackInstance = new Stack();

function showPopup(message) {
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popup-message");

  popupMessage.textContent = message;
  popup.classList.remove("hidden");

  setTimeout(() => {
    popup.classList.add("hidden");
  }, 2000); // Popup will be visible for 2 seconds
}

function adicionarNaPilha() {
  let value = document.getElementById("valorInput").value;

  if (value === "" || value === null) {
    showPopup("Por favor, insira um valor");
    return;
  }

  if (stackInstance.size() < 10) {
    stackInstance.push(value);
    atualizarTabela();
    showPopup("Valor inserido com sucesso");
  } else {
    showPopup("Lista cheia");
  }

  document.getElementById("valorInput").value = "";
  document.getElementById("valorInput").focus();
}

function removerDaPilha() {
  if (!stackInstance.isEmpty()) {
    stackInstance.pop();
    atualizarTabela();
    showPopup("Valor removido com sucesso");
  } else {
    showPopup("A pilha está vazia");
  }
}

function atualizarTabela() {
  for (let i = 1; i <= 10; i++) {
    let elementoId = `elemento${i}`;
    let elemento = document.getElementById(elementoId);
    elemento.textContent = stackInstance.pilha[i - 1] || "";
  }
}

document.addEventListener("DOMContentLoaded", atualizarTabela);
