let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener("submit", formHandler)
let alertDOM = document.querySelector("#alert")

const alertFunction= (title, message, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> `

function formHandler(event){
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")

    if (USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value, SCORE.value) //gönderdikten sonra sıfırladık input valueleri
        USER_NAME.value= "" 
        SCORE.value= ""

    }else {
        alertDOM.innerHTML = alertFunction(
            "Başlık Bilgisi Eksik:",
            " Eksik Bilgi Girdiniz.",
            "danger"
            )
    }

}
/*
<li class="list-group-item d-flex justify-content-between align-items-center">
A list item
<span class="badge bg-primary rounded-pill">14</span>
</li>
*/
let userListDOM = document.querySelector("#userList")

const addItem = (userName, score) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML =  `   
   ${userName} 
  <span class="badge bg-primary rounded-pill">${score}</span>
     `
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
        )
    userListDOM.append(liDOM)

}