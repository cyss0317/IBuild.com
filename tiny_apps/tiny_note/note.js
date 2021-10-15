let notes = [];

const generateNotes = () => {
    const notebook = document.createElement("div");
    notebook.id = "notebook";
    notebook.style.border = `4px solid ${appList[0].color}`
    notebook.style.width = "500px";
    notebook.style.height = "500px";


const formatNote = note => {
    let formattedNote = document.createElement("div");
    formattedNote.id = note.id;
    formattedNote.innerHTML = note.text;
    formattedNote.className = "note";
    return formatedNote;
}


    const addNote = text => {
        const note = {
            text: text,
            id: Date.now()
        }
        notes.push(note);
        notebook.append(note.text);
    }

    const form =  document.createElement("form")
    const input =  document.createElement("input")
    input.type = "text";
    input.placeholder = "input goes here..."
    const button =  document.createElement("button")
    button.type = "submit";
    button.innerHTML = "Submit";

    form.addEventListener("submit", e => {
        e.preventDefault();
        const text = input.value.trim();
        addNote(formatNote(text));
        input.value =""
    })

    form.append(input);
    form.append(button);

    display.append(notebook);
    display.append(form);




}


generateNotes();