document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.form_input').forEach(function (input){
        input.addEventListener("input", function (){
            input.className = input.className.replace(/form_input_error ?/, '');
        })
    });
});