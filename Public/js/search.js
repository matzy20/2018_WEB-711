function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    tabs = document.getElementById("myUL").innerHTML;
    tabContent = document.getElementsByClassName("tab-pane");
    container = document.getElementsByClassName("container");


    for(i=0; i < tabContent.length; i++) {
      var textReview = tabContent[i].innerHTML.toUpperCase().search(filter);
      var textContentReview = container[0].textContent.toUpperCase().search(filter);

      if(textReview > 0 && textContentReview > 0){
        console.log('found results in tab here: ' + textReview);
        console.log('found results in content here', textContentReview);
      }
      else{
        console.log('no results');
      }
    }



    /**if (textReview > 0 && event.keyCode === 13) {
        $(textLocator).css("border", "solid red 2px");
    } else {
        //console.log('No results matched your search. Please try a different search');
    }**/
}
/**
TO DO'S:
1. Search is working for tabs' content
1.b. Need to also find a way to also search through 'tabs' and
1.c. iterate over container?
2. Once phrase or letters inputted, enter will return results
3. Style Results
4. Start working on accordions
**/