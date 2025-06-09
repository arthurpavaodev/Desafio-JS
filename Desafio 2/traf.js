function adicionarTarefa() {
const input = document.getElementById('tarefaInput');
const valor = input.value.trim();
    if (valor !== "") {
        const ul = document.getElementById('listaTarefas');
        const li = document.createElement('li');
        li.textContent = valor;
        ul.appendChild(li);
        input.value = "";
        input.focus();
    }
}

document.getElementById('tarefaInput').addEventListener('keydown', function(e) {
     if (e.key === 'Enter') adicionarTarefa();
});