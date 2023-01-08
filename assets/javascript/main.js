
const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
    input.addEventListener('click', function(e){
        this.style.color = 'green'
        e.preventDefault()
    })
}) 
