$(document).ready( function (){
    // get the input
    $('#inputForm').on('submit', function (e){
        e.preventDefault();
        var item = $('#add-items').val();
        var taskBlock= "<div class='task todo'>"
                  + "  <button type='button'>"
                  + "    <img class='todo'  alt=''>"
                  + "  </button>"
                  + item 
                  + "</div>"
                  + "</div>";
    // reset the input field
        this.reset();
    // prepend the list item to the list
        $("#task-box").prepend(taskBlock);
    });
    // change class from todo to done when div's button is pushed
    $('.todo button').live('click', function(e) {
        $(this).parent().removeClass('todo');
        $(this).parent().addClass('done');
    });
    // change class from done to deleted when div's button is pushed
    $('.done button').live('click', function(e) {
        //e.preventDefault();
        $(this).parent().removeClass('done');
        $(this).parent().addClass('deleted');
    });
});







