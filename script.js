const API = "http://localhost:3000/students";

let editId = null; // track editing student

// LOAD STUDENTS

async function loadStudents() {
  const res = await fetch(API);
  const data = await res.json();

  const search = document.getElementById("search").value.toLowerCase();

  const list = document.getElementById("list");
  list.innerHTML = "";

  const filtered = data.filter((s) =>
    s.name.toLowerCase().includes(search)
  );

  filtered.forEach((s) => {
    list.innerHTML += `
      <li>
        ${s.name}
        <div>
          <button onclick="startEdit(${s.id}, '${s.name}')">Edit</button>
          <button onclick="deleteStudent(${s.id})">Delete</button>
        </div>
      </li>
    `;
  });
}

// ADD or UPDATE STUDENT
async function addStudent() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value;

  if (name === "") {
    alert("Enter name");
    return;
  }

  // UPDATE
  if (editId !== null) {
    await fetch(`${API}/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    });

    editId = null;
  } 
  // CREATE
  else {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    });
  }

  nameInput.value = "";
  loadStudents();
}

// START EDIT
function startEdit(id, name) {
  document.getElementById("name").value = name;
  editId = id;
}

// DELETE
async function deleteStudent(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  loadStudents();
}

// AUTO LOAD
loadStudents();