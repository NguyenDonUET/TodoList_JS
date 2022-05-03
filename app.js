const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const remove = list.querySelectorAll('.delete')
// console.log(remove)
const search = document.querySelector('.search input')



const generateTemplate = todo => {
    const newTodo = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`

    list.innerHTML += newTodo
    // console.log(typeof list.innerHTML) // string
}

// Them todo vao todo-list
addForm.addEventListener('submit', e => {
    e.preventDefault()

    // Lay input todo
    const todo = addForm.add.value.trim();

    // Neu todo khac xau "" thi moi them vao list
    if(todo.length){
        // Them vao list todo
        generateTemplate(todo)
    }

    // Clear input after add
    // C1 : clear all input tag value inside form
    addForm.reset()
    // C2 : addForm.add.value = "" 
    
})


// Xoa todo item
list.addEventListener('click',e => {
    // console.log(e.target.classList) // ds all class cua item dc click 

    // khi click  trash
    if(e.target.classList.contains('delete')){
        // xoa the li ben ngoai
        e.target.parentElement.remove()
    }
})


/** Tim kiem todo trong list 
 * Them class filtered vao li   ko co searchValue (an no di)
 * Xoa class filtered trong li  co chua searchValue
 * 
 * textContent lay tat ca text ben trong
 * */ 
const filterTodos = searchValue => {
    // An nhung todo ko co searchVal
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(searchValue))
    .forEach(todo => {
        todo.classList.add('filtered')
    });
    // Hien todo co searchVal (de update lien tuc chinh xac)
    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(searchValue))
    .forEach(todo => {
        todo.classList.remove('filtered')
    });
}

// Add event 
search.addEventListener('keyup', e => {
    e.preventDefault()
    const searchValue = search.value.trim().toLowerCase()
    filterTodos(searchValue)

})
