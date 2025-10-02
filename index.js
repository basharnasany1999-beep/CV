let notes = []
let indexaolode = null
function storeatser(){
    const getstore =  localStorage.getItem('Quick Notes')
    return getstore ? JSON.parse(getstore) : []
}
function renderNotes(){
    const container  = document.getElementById('notesContainer')
    if(notes.length === 0){
        container.innerHTML = `
            <div class="empty-state">
        <h2>No notes yet</h2>
        <p>Create your first note to get started!</p>
        <button class="add-note-btn" onclick="openNoteDialog()">+ Add Your First Note</button>
      </div>
        `
        return
    } 
   container.innerHTML = notes.map(note =>(
    `    <div class="note-card">
      <h3 class="note-title">${note.title}</h3>
      <p class="note-content">${note.content}</p>
      <div class="note-actions">
        <button class="edit-btn" onclick="openNoteDialog('${note.id}')" title="Edit Note">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
          </svg>
        </button>
        <button class="delete-btn" onclick="deleteNote('${note.id}')" title="Delete Note">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
          </svg>
        </button>
      </div>

    </div>
    `
   ) ).join()
}
function deleteNote(noteid){
notes = notes.filter(note => note.id != noteid)
renderNotes()
saveNotes()
}



function saveNote(event){
   event.preventDefault()
   const titleValue =  document.getElementById('noteTitle').value.trim()
   const textValue =  document.getElementById('noteContent').value.trim()
if(indexaolode){
    const still = notes.findIndex(note => note.id === indexaolode)
    notes[still] = {
        ...notes[still],
        title : titleValue,
        content : textValue

    }
   
}
else{
    
notes.unshift({
    id: digital(),
    title: titleValue,
    content:textValue

})

}


saveNotes()
renderNotes()
closeNoteDialog()

}
function digital(){
    return  new Date().toString()
}
function openNoteDialog(noteId = null){
    const dialog = document.getElementById('noteDialog')
    const noteContent = document.getElementById('noteContent')
    const noteTitle = document.getElementById('noteTitle')


    if(noteId){
        const idvalue = notes.find(note => note.id === noteId )
        indexaolode = noteId;
        document.getElementById('dialogTitle').textContent = 'Edite Note'
        noteTitle.value = idvalue.title;
        noteContent.value = idvalue.content;

    }
    else{
        indexaolode = null;
        document.getElementById('dialogTitle').textContent = 'Add new Note'
        noteContent.value = ''
        noteTitle.value = ''
    }

    dialog.showModal()
    noteTitle.focus()

}
function saveNotes(){
    localStorage.setItem(`Quick Notes` , JSON.stringify(notes))
}
function closeNoteDialog(){
   document.getElementById('noteDialog').close()
}
function changecolor(){
    const isDark = document.body.classList.toggle('dark-theme')
    localStorage.setItem('theme' , isDark ? 'black' : 'light')
    document.getElementById('themeToggleBtn').textContent = isDark ? '☀️' : '🌙'
}
function store(){
    if(localStorage.getItem('theme') == 'black'){
        document.body.classList.add('dark-theme')
         document.getElementById('themeToggleBtn').textContent = "☀️"
    }
}
document.addEventListener('DOMContentLoaded' ,function(){
    store()
notes = storeatser()
renderNotes()

    document.getElementById('noteForm').addEventListener('submit' , saveNote)
    document.getElementById('themeToggleBtn').addEventListener('click' , changecolor)
    document.getElementById('noteDialog').addEventListener('click' , (event)=>{
        if(event.target === this){
            closeNoteDialog()
        }
    })

})