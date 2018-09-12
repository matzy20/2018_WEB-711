function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    tabs = document.getElementsByTagName("li");
    tabContent = document.getElementsByClassName("tab-pane");
    container = document.getElementsByClassName("container");
    var inputCheck = $.trim($("#myInput").val());

    for(i=0; i < tabs.length; i++) {
      tabReview = tabs[i].innerHTML.toUpperCase().indexOf(filter);
      if(tabReview > 0){
        tabs[i].classList.add('active');
      }
      else if(inputCheck.length === 0) {
        tabs[i].classList.remove('active');
        document.getElementById("firstTab").classList.add('active');
      }
      else{
        tabs[i].classList.remove('active');
      }
    }
    for (i=0; i < tabContent.length; i++){
      tabContentReview = tabContent[i].innerHTML.toUpperCase().indexOf(filter);
      if(tabContentReview > 0){
        tabContent[i].classList.add('active');
        thisTabID = tabContent[i].getAttribute('id');

        console.log($("#"+thisTabID)[0].innerText.css({backgroundColor: "yellow"}));
      }
      else if(inputCheck.length === 0){
        tabContent[i].classList.remove('active');
        document.getElementById("kitchenAppliances").classList.add('active');
      }
      else{
        tabContent[i].classList.remove('active');
      }

    }
}
/**
TO DO'S:
1. Search is working for tabs' content
2. Search through tab content and css found word
3. Found word, the affiliate tab should be active too
4. Think we'll eventually have to refactor where we're searching through entire container and running conditionals for tabs and tabContent
5. Start working on accordions
**/