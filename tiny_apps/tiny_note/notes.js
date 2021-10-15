const notes = [];

const generateNotes = () => {
    const canvas = document.createElement("div");
    canvas.id = "notebook";
    canvas.style.width = "500px";
    canvas.style.height = "500px";
    canvas.style.border = `3px solid ${appList[0].color}`;
    const formatNote = note => {
        const formattedNote = document.createElement("div");
        formattedNote.id = note.id;
        formattedNote.innerHTML = note.text;
        formattedNote.className = "note";
        return formattedNote;
    }

    const addNote = text => {
        const note = {
            text: text,
            id: Date.now()
        }
        notes.push(note);
        let formattedNote = formatNote(note);
        canvas.append(formattedNote);
    }


    const form = document.createElement("form");
    form.addEventListener("submit", e  => {
        e.preventDefault();
        const text = input.value.trim();
        addNote(text);
        input.value = ""
    })

    const input = document.createElement("input");
    input.type = "text";

    const button = document.createElement("button");
    button.type = "submit";
    button.innerHTML = "Submit";

    form.append(input);
    form.append(button);
    display.append(canvas);
    display.append(form);
}
