$(document).ready(function(){
    $("#ProjectsNavLink").click(function(event){
        window.history.pushState("index.html", "Mohammed | AriesLab", "http://localhost/MyPortfolio/Projects");
        document.getElementById("HomeNavLink").classList.remove("active");
        document.getElementById("BlogsNavLink").classList.remove("active");
        document.getElementById("AboutNavLink").classList.remove("active");
        document.getElementById("ProjectsNavLink").classList.add("active");
        
        document.getElementById("MainHomePage").style.display = "none";
        document.getElementById("MainBlogsPage").style.display = "none";
        document.getElementById("MainAboutPage").style.display = "none";
        document.getElementById("MainProjectsPage").style.display = "block";
    });
});

$(document).ready(function(){
    $("#HomeNavLink").click(function(event){
        window.history.pushState("index.html", "Mohammed | AriesLab", "http://localhost/MyPortfolio/");
        document.getElementById("ProjectsNavLink").classList.remove("active");
        document.getElementById("BlogsNavLink").classList.remove("active");
        document.getElementById("AboutNavLink").classList.remove("active");
        document.getElementById("HomeNavLink").classList.add("active");
        
        document.getElementById("MainProjectsPage").style.display = "none";
        document.getElementById("MainBlogsPage").style.display = "none";
        document.getElementById("MainAboutPage").style.display = "none";
        document.getElementById("MainHomePage").style.display = "block";
    });
});

$(document).ready(function(){
    $("#BlogsNavLink").click(function(event){
        window.history.pushState("index.html", "Mohammed | AriesLab", "http://localhost/MyPortfolio/Blogs");
        document.getElementById("ProjectsNavLink").classList.remove("active");
        document.getElementById("HomeNavLink").classList.remove("active");
        document.getElementById("AboutNavLink").classList.remove("active");
        document.getElementById("BlogsNavLink").classList.add("active");
        
        document.getElementById("MainProjectsPage").style.display = "none";
        document.getElementById("MainHomePage").style.display = "none";
        document.getElementById("MainAboutPage").style.display = "none";
        document.getElementById("MainBlogsPage").style.display = "block";
    });
});

$(document).ready(function(){
    $("#AboutNavLink").click(function(event){
        window.history.pushState("index.html", "Mohammed | AriesLab", "http://localhost/MyPortfolio/About");
        document.getElementById("ProjectsNavLink").classList.remove("active");
        document.getElementById("HomeNavLink").classList.remove("active");
        document.getElementById("BlogsNavLink").classList.remove("active");
        document.getElementById("AboutNavLink").classList.add("active");
        
        document.getElementById("MainProjectsPage").style.display = "none";
        document.getElementById("MainHomePage").style.display = "none";
        document.getElementById("MainBlogsPage").style.display = "none";
        document.getElementById("MainAboutPage").style.display = "block";
    });
});