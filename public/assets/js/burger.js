$(function() {
    $(".change-devoured").on("click", function(event) {
        let id = $(this).data("id");
        let newDevoured = $(this).data("devoured");
        newDevoured = newDevoured ? false : true;
        let devouredState = {
          devoured: newDevoured
        };
        // let updatable_list = $("#updatable-list")
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: devouredState
        }).then( () => {
            console.log("changed devoured to ", newDevoured);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    
      $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        let newBurger = {
          name: $("#burger_txt").val().trim(),
          devoured: false
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });


});