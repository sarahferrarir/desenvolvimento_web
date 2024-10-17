const readlineSync = require('readline-sync'); // Importa a biblioteca readline-sync

let tasks = []; // Array vazio para armazenar as tarefas

// Função para exibir o menu de opções
function showMenu() {
    console.log("\nGerenciador de Tarefas");
    console.log("1. Adicionar uma nova tarefa");
    console.log("2. Remover uma tarefa");
    console.log("3. Listar todas as tarefas");
    console.log("4. Sair");
}

// Função para adicionar uma nova tarefa
function addTask() {
    const newTask = readlineSync.question("Digite a nova tarefa: "); // Captura a entrada do usuário
    if (newTask) {
        tasks.push(newTask); // Adiciona a nova tarefa ao array
        console.log(`Tarefa "${newTask}" adicionada com sucesso!`);
    } else {
        console.log("Tarefa inválida!");
    }
}

// Função para remover uma tarefa específica
function removeTask() {
    if (tasks.length === 0) {
        console.log("Nenhuma tarefa para remover.");
        return;
    }

    const taskIndex = parseInt(readlineSync.question("Digite o número da tarefa que deseja remover: ")) - 1; // Captura o índice da tarefa
    
    if (taskIndex >= 0 && taskIndex < tasks.length) {
        const removedTask = tasks.splice(taskIndex, 1); // Remove a tarefa específica
        console.log(`Tarefa "${removedTask}" removida com sucesso!`);
    } else {
        console.log("Número de tarefa inválido!");
    }
}

// Função para listar todas as tarefas
function listTasks() {
    if (tasks.length === 0) {
        console.log("Nenhuma tarefa disponível.");
    } else {
        console.log("\nLista de Tarefas:");
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
}

// Função principal para gerenciar o loop de execução
function manageTasks() {
    let running = true;

    while (running) {
        showMenu(); // Exibe o menu para o usuário
        const choice = parseInt(readlineSync.question("Escolha uma opção: ")); // Captura a escolha do usuário

        switch (choice) {
            case 1:
                addTask();
                break;
            case 2:
                removeTask();
                break;
            case 3:
                listTasks();
                break;
            case 4:
                running = false; // Sai do loop e encerra o programa
                console.log("Saindo do programa...");
                break;
            default:
                console.log("Opção inválida! Por favor, escolha uma opção válida.");
        }
    }
}

// Iniciar o gerenciador de tarefas
manageTasks();
