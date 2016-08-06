$(document).ready(function(){ 
   
    console.log("start")
    postCount = 0
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
}

function bindDownVote(){
    console.log("click! vote");
    index = $(this).attr('data-index');
    score = parseInt($("#score-"+index).text());
        console.log(score);
    score -= 1;
            console.log(score);
    $("#score-"+index).text(score);
}

$(".upvote").click(bindUpVote);
$(".downvote").click(bindDownVote);


$("#newpost").click(function(){
    postCount+=1;
    longstring = ` <div id="panel-`+postCount+`" class="panel panel-default">
  <div class="panel-body">
    <span class='score' id='score-`+postCount+`'>0</span>
    <div class="btn-group-vertical" role="group" aria-label="...">
  <button type="button" class="btn btn-default upvote" data-index="`+postCount+`"><span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span></button>
  <button type="button" class="btn btn-default downvote" data-index="`+postCount+`"><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button>
</div>
    Test post
  </div>
</div>`;
    newdiv = $(longstring).insertAfter("#panel-"+(postCount-1))
    debugger
    newdiv.find(".upvote").click(bindUpVote);
    newdiv.find(".downvote").click(bindDownVote);
    
    console.log(longstring)
});
});  
