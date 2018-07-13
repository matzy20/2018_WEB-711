function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            $(li[i]).css("border", "solid red 2px");
        } else {
            //li[i].style.display = "none";
        }
    }
}
/**
TO DO'S:
1. Search is working for tabs AND tabs' content
2. Once phrase or letters inputted, enter will return results
3. Style Results
4. Start working on accordions
**/