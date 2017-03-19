$(document).ready(function(){
  $(".likeBtn").click(function(){
    $(this).toggleClass("review__btn--outline-only");
  });

/* Adding a review by clicking Leave a review button*/
  $("#addReviewBtn").click(function(){
    var review = document.getElementById("addReviewTxt").value;
    if(review != "") {
      $("#addReview").append("<div class='review'>\
      <span class='review__title'>Marko</span>\
      <span class='review__time-duration'>Today</span>\
       <div class='review__bubble'>"+review+"</div>\
       <button type='button' class='review__btn likeBtn'>Like</button>\
       </div>");

       $("#addReviewTxt").val('');
    }

  });
});
