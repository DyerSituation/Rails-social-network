window.onload = function(){ 
   
    console.log("start")
    $("#newpost").click(function(){
    console.log("click!ee")
});

$("#newpost").click(function(){
    
    longstring = ` <div id=firstpanel class="panel panel-default">
  <div class="panel-body">
    
    <div class="btn-group-vertical" role="group" aria-label="...">
  <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span></button>
  <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button>
</div>
    Test post
  </div>
</div>`
    $(longstring).insertAfter("#firstpanel");
    console.log("click!")
});
};  
