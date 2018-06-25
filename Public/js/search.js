function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        console.log(li[i]);
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            //console.log(a.innerHTML);
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
/**LEFT OFF: start working on a search via the tab content, in addition
tab list, then working on styling for results (list and content) located
**/