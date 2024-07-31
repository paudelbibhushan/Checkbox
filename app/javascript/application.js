// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
import { data } from "autoprefixer";

$// app/javascript/application.js
$(document).ready(function() {
    var counter = 0;
    $(".book-select-check").on("click", function() {
      if ($(this).prop("checked")) {
        counter += 1;
        $("#delete-books").show();
      } else {
        counter -= 1;
        if (counter <= 0) {
          $("#delete-books").hide();
        }
      }
    });
    $("#delete-books").on("click", function() {
      var bookIds = [];
      $(".book-select-check").each(function(){
        if ($(this).prop('checked')){
          bookIds.push($(this).data('book-id'))
        }
      })
      $.ajax({
        url: 'books/bulk_delete_books',
        type : 'DELETE',
        data :{book_ids : bookIds}

      })
    });
  });