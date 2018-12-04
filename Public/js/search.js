function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    tabs = document.getElementsByTagName("li");
    tabContent = document.getElementsByClassName("tab-pane");
    body = document.body.getElementsByTagName("*");
    var inputCheck = $.trim($("#myInput").val());

    container = document.getElementsByClassName("container");
    //looking to traverse through dom
    //run conditionals on both tabs and tabContent
    //need to figure a way to assign to THIS tab, THIS tabContent
    for(i=0; i < container.length; i++) {
      tabReview = container[0].children[2].innerHTML.toUpperCase().indexOf(filter);
      tabs = container[0].children[2];
      //console.log('tabs', this.tabs);
      /**tabReview = tabs[i].innerHTML.toUpperCase().indexOf(filter);
      if(tabReview > 0){
        tabs[i].classList.add('active');
      }
      else if(inputCheck.length === 0) {
        tabs[i].classList.remove('active');
        document.getElementById("firstTab").classList.add('active');
      }
      else{
        tabs[i].classList.remove('active');
      }**/

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