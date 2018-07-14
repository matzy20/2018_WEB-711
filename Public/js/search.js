function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    container = document.getElementsByClassName("container");
    textReview = container[0].textContent.toUpperCase().search(filter);

    if (textReview > 0) {
        console.log('I found ' + filter + ' at ' + textReview);
    } else {
        console.log('No results matched your search. Please try a different search');
    }
}
/**
TO DO'S:
1. Search is working for tabs AND tabs' content
2. Once phrase or letters inputted, enter will return results
3. Style Results
4. Start working on accordions
**/