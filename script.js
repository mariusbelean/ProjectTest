
function openMenu() {
    $("#mySidenav").width(200);
    $("#main").css('margin-left','200px');
    $("#menu").css('margin-left','200px');
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    
function closeMenu() {
    $("#mySidenav").width(0);
    $("#main").css('margin-left','0px');
    $("#menu").css('margin-left','0px');
    document.body.style.backgroundColor = "white";
    }

