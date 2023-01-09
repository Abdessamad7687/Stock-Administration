
const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
    input.addEventListener('click', function(e){
        this.style.color = 'green'
        e.preventDefault()
    })
}) 

let alert = document.querySelector('.alert')

let create = document.getElementById('create')
console.log(create)
create.addEventListener('click', function(){
    alert.classList.add('alert-flex')
})
let close = document.getElementById('close')
close.addEventListener('click', function(){
    alert.classList.remove('alert-flex')
})