// function calcularSalario() {
//     // Declaración de variables
//     const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
//     const n = dias.length;
//     const horaEntrada = [];
//     const horaSalida = [];
//     const horasTrabajadas = [];
//     const minutosTrabajados = [];
//     const presente = [];
  
//     // Solicitar tarifa por hora
//     const tarifaPorHora = parseFloat(prompt("Ingrese la tarifa por hora:"));
  
//     // Ciclo para ingresar los horarios y presencia de cada día
//     for (let i = 0; i < n; i++) {
//       horaEntrada[i] = parseFloat(prompt(`Ingrese la hora entrada del ${dias[i]}:`));
//       horaSalida[i] = parseFloat(prompt(`Ingrese la hora de salida del ${dias[i]}:`));
//       horasTrabajadas[i] = parseFloat(prompt(`Ingrese horas trabajadas ${dias[i]}:`));
//       minutosTrabajados[i] = parseFloat(prompt(`Ingrese los minutos trabajados ${dias[i]}:`));
//       // ... (resto del cálculo de horas y minutos)
  
//       // Preguntar si el empleado estuvo presente
//       const respuesta = prompt(`¿Estuvo presente el ${dias[i]}? (Si/No)`).toLowerCase();
//       presente[i] = respuesta === "si";
//     }
  
//     // ... (resto del cálculo del salario)
  
//     // Mostrar resumen
//     console.log("Resumen semanal:");
//     // ... (mostrar el resumen en la consola)
//   }
  
//   calcularSalario();