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
      //TO DO: search through tab's textContent
      //var tabTextReview = container[0].textContent.toUpperCase().indexOf(filter);
      if(tabReview > 0){
        tabs[i].classList.add('active');
      }
      //TO DO: if empty input, make kitchen tab active
      else if(inputCheck.length === 0) {
        console.log(tabs[0].add('active'));
        //document.getElementById("firstTab").classList.add('active');

      }
      else{
        tabs[i].classList.remove('active');
      }
    }
}
/**
TO DO'S:
1. Search is working for tabs' content
1.b. Need to also find a way to also search through 'tabs' and
1.c. iterate over container?
2. Once phrase or letters inputted, enter will return results
3. Review and incorporate some of these https://freshman.tech/wikipedia-javascript/
4. Style Results
4. Start working on accordions
**/