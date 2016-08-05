window.onload = function(){ 
   
    console.log("start")
    postCount = 1
    $("#newpost").click(function(){
    console.log("click!ee")
});


function bindUpVote(){
    console.log("click! vote");
    index = $(this).attr('data-index');
    score = parseInt($("#score-"+index).text());
        console.log(score);
    score += 1;
            console.log(score);
    $("#score-"+index).text(score);
    debugger
    
}

$(".upvote").click(bindUpVote);


$("#newpost").click(function(){
    postCount+=1;
    count_string = postCount.toString()
    longstring = ` <div id=firstpanel class="panel panel-default">
  <div class="panel-body">
    <span class='score' id='score-`+count_string+`'>0</span>
    <div class="btn-group-vertical" role="group" aria-label="...">
  <button type="button" class="btn btn-default upvote" data-index="`+count_string+`"><span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span></button>
  <button type="button" class="btn btn-default vote" data-index="`+count_string+`"><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button>
</div>
    Test post
  </div>
</div>`;
    $(longstring).insertAfter("#firstpanel").find(".upvote").click(bindUpVote);
    
    console.log(longstring)
});
};  
