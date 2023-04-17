// Particles
particlesJS.load('particles-js', 'particles.min.json', function() {
  console.log('particles.js loaded');
});

// Vytvoření elementu pro zobrazení poznámky
function createNoteElement(note) {
  const noteElement = document.createElement("div");
  noteElement.classList.add("note");
  const closeButton = document.createElement("button");
  closeButton.classList.add("close-button");
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click", () => {
    deleteNoteElement(noteElement);
    deleteNoteFromLocalStorage(note);
  });
  noteElement.appendChild(closeButton);
  const noteText = document.createElement("div");
  noteText.textContent = note;
  noteElement.appendChild(noteText);
  return noteElement;
}

// Zobrazení všech poznámek z localStorage
function displayNotes() {
  const notesContainer = document.querySelector(".notes");
  for (let i = 0; i < localStorage.length; i++) {
    const note = localStorage.getItem(localStorage.key(i));
    const noteElement = createNoteElement(note);
    notesContainer.appendChild(noteElement);
  }
}

// Přidání nové poznámky
function addNote() {
  const noteInput = document.querySelector("textarea");
  const note = noteInput.value;
  if (note) {
    localStorage.setItem(`note-${Date.now()}`, note);
    const noteElement = createNoteElement(note);
    const notesContainer = document.querySelector(".notes");
    notesContainer.appendChild(noteElement);
    noteInput.value = "";
  }
}

// Smazání poznámky
function deleteNoteElement(noteElement) {
  noteElement.remove();
}

function deleteNoteFromLocalStorage(note) {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (localStorage.getItem(key) === note) {
      localStorage.removeItem(key);
      break;
    }
  }
}

// Ovládací prvky pro import a export poznámek
const importButton = document.querySelector("#import-button");
const exportButton = document.querySelector("#export-button");

importButton.addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.addEventListener("change", () => {
    const file = input.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const notesJSON = reader.result;
      try {
        const notes = JSON.parse(notesJSON);
        notes.forEach((note) => {
          localStorage.setItem(`note-${Date.now()}`, note);
          const noteElement = createNoteElement(note);
          const notesContainer = document.querySelector(".notes");
          notesContainer.appendChild(noteElement);
        });
      } catch (error) {
        alert("Chyba při zpracování JSON.");
      }
    });
    reader.readAsText(file);
  });
  input.click();
});

exportButton.addEventListener("click", () => {
  const notes = [];
  for (let i = 0; i < localStorage.length; i++) {
    const note = localStorage.getItem(localStorage.key(i));
    notes.push(note);
  }
  const notesJSON = JSON.stringify(notes, null, 2);
  const downloadLink = document.createElement("a");
  downloadLink.href = `data:text/json;charset=utf-8,${encodeURIComponent(notesJSON)}`;
  downloadLink.download = "notes.json";
  downloadLink.click();
  });
  
  // Zobrazení poznámek při načtení stránky
  displayNotes();