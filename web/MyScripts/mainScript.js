$(document).ready(function(){
    $("#ProjectsNavLink").click(function(event){
        document.getElementById("HomeNavLink").classList.remove("active");
        document.getElementById("BlogsNavLink").classList.remove("active");
        document.getElementById("ProjectsNavLink").classList.add("active");
        
        document.getElementById("MainHomePage").style.display = "none";
        document.getElementById("MainBlogsPage").style.display = "none";
        document.getElementById("MainProjectsPage").style.display = "block";
    });
});

$(document).ready(function(){
    $("#HomeNavLink").click(function(event){
        document.getElementById("ProjectsNavLink").classList.remove("active");
        document.getElementById("BlogsNavLink").classList.remove("active");
        document.getElementById("HomeNavLink").classList.add("active");
        
        document.getElementById("MainProjectsPage").style.display = "none";
        document.getElementById("MainBlogsPage").style.display = "none";
        document.getElementById("MainHomePage").style.display = "block";
    });
});

$(document).ready(function(){
    $("#BlogsNavLink").click(function(event){
        document.getElementById("ProjectsNavLink").classList.remove("active");
        document.getElementById("HomeNavLink").classList.remove("active");
        document.getElementById("BlogsNavLink").classList.add("active");
        
        document.getElementById("MainProjectsPage").style.display = "none";
        document.getElementById("MainHomePage").style.display = "none";
        document.getElementById("MainBlogsPage").style.display = "block";
    });
});