function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    tabs = document.getElementById("myUL").innerHTML;
    tabContent = document.getElementsByClassName("tab-pane");
    container = document.getElementsByClassName("container");
    console.log('tabs', tabs);

    for(i=0; i < tabContent.length; i++) {
      var tabReview = tabContent[i].innerHTML.toUpperCase().search(filter);
      var tabTextReview = container[0].textContent.toUpperCase().search(filter);

      if((tabReview > 0 || tabTextReview > 0) && event.keyCode === 13){
        console.log('found results in tab here: ' + tabContent[i].innerHTML);

        console.log('found results in tab text here', tabTextReview);
      }

      else{
        console.log('no results');
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