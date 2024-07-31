// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

$(document).ready(function(){
    var counter = 0
    $(".book-select-check").on('click',function(){
        if ($(this).prop('checked')){
            counter += 1
            $('#delete-books').css('display','block')
        }else
        {
            counter -= 1
            if (counter<=0){
                $("#delete-books").css('display','none')
            }
        }
        
    })
})

