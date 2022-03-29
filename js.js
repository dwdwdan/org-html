function toggle_toc(){
    console.log(toc_text.style.display)
    if (toc_text.style.display === "block") {
	toc_text.style.display = "none";
    } else {
	toc_text.style.display = "block";
    }
}

window.onload = function onload(){
    toc_text = document.getElementById("text-table-of-contents");
    toc = document.getElementById("table-of-contents");
    toc_title = toc.getElementsByTagName('h2').item(0);
    console.log(toc_title)
    toc_title.onclick = toggle_toc;
}
