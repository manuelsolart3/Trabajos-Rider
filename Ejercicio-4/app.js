const students = [];

let editingIndex = -1;

function calculateAverage(notas) {
  const total = notas.reduce((acc, nota) => acc + nota, 0);
  return (total / notas.length).toFixed(2);
}

function addOrEditStudent(nombre, nota1, nota2, nota3) {
  const average = calculateAverage([nota1, nota2, nota3]);
  return new Promise((resolve, reject) => {
    if (editingIndex === -1) {
      students.push({ nombre, nota1, nota2, nota3, average });
    } else {
      students[editingIndex] = { nombre, nota1, nota2, nota3, average };
      editingIndex = -1;
    }
    resolve();
  });
}

function displayStudents() {
  const studentList = document.getElementById("studentList");
  studentList.innerHTML = "";

  students.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
 <td>${student.nombre}</td>
 <td>${student.nota1}</td>
 <td>${student.nota2}</td>
 <td>${student.nota3}</td>
 <td>${student.average}</td>
 <td>
 <button class="edit-button" onclick="editStudent(${index})">Editar</button>
 <button class="delete-button" onclick="deleteStudent(${index})">Eliminar</button>
 </td>
 `;
    studentList.appendChild(row);
  });
}

// Función para editar un estudiante
function editStudent(index) {
  const student = students[index];
  document.getElementById("editarIndex").value = index;
  document.getElementById("editarNombre").value = student.nombre;
  document.getElementById("editarnota1").value = student.nota1;
  document.getElementById("editarnota2").value = student.nota2;
  document.getElementById("editarnota3").value = student.nota3;
  document.getElementById("editarModal").style.display = "block";
  editingIndex = index;
}

document.getElementById("addBtn").addEventListener("click", async () => {
  const nombre = document.getElementById("nombreInput").value;
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);

  if (nombre && !isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
    await addOrEditStudent(nombre, nota1, nota2, nota3);
    displayStudents();
    clearInputFields();
    modal.style.display = "none";
  } else {
    alert("Por favor, ingresa un nombre y tres notas válidas.");
  }
});

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}

function clearInputFields() {
  document.getElementById("nombreInput").value = "";
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("nota3").value = "";
}

displayStudents();
const abrirModalBtn = document.getElementById("abrirModal");
const modal = document.getElementById("miModal");
const cerrarModalBtn = document.getElementById("cerrarModal");

abrirModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

cerrarModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

document.getElementById("cerrarEditarModal").addEventListener("click", () => {
  document.getElementById("editarModal").style.display = "none";
});

document
  .getElementById("guardarEdicionBtn")
  .addEventListener("click", async () => {
    const index = parseInt(document.getElementById("editarIndex").value);
    const nombre = document.getElementById("editarNombre").value;
    const nota1 = parseFloat(document.getElementById("editarnota1").value);
    const nota2 = parseFloat(document.getElementById("editarnota2").value);
    const nota3 = parseFloat(document.getElementById("editarnota3").value);

    if (nombre && !isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
      await addOrEditStudent(nombre, nota1, nota2, nota3);
      displayStudents();
      clearInputFields();
      document.getElementById("editarModal").style.display = "none";
    } else {
      alert("Por favor, ingresa un nombre y tres notas válidas.");
    }
  });
