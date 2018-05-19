/* Open modal that is clicked based on it's id */

function openNav(id) {

    document.getElementById(id).style.width = "100%";
    document.body.classList = "modal-open";
    
}

/* Close modal that is clicked based on it's id */

function closeNav(id) {

    document.getElementById(id).style.width = "0%";
    document.body.classList = " ";

}


function myFunction(x) {
   /* UNDO TO ACTIVATE ANIMATION x.classList.toggle("change");*/
    document.getElementById('mob-menu').style.width = "100%";
    document.body.classList = "phone-menu";


}

  