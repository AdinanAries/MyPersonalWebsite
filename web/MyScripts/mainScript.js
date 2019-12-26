//defining functions for navigation bar

function showProjectsWindow(){
    document.getElementById("HomeNavLink").classList.remove("active");
    document.getElementById("BlogsNavLink").classList.remove("active");
    document.getElementById("AboutNavLink").classList.remove("active");
    document.getElementById("ProjectsNavLink").classList.add("active");
        
    document.getElementById("MainHomePage").style.display = "none";
    document.getElementById("MainBlogsPage").style.display = "none";
    document.getElementById("MainAboutPage").style.display = "none";
    document.getElementById("MainProjectsPage").style.display = "block";
    $("html, body").animate({ scrollTop: 0 }, "fast");
    window.history.pushState("index.html", "Mohammed | AriesLab", "http://localhost/MyPortfolio/Projects");
}

function showHomeWindow(){
    document.getElementById("ProjectsNavLink").classList.remove("active");
    document.getElementById("BlogsNavLink").classList.remove("active");
    document.getElementById("AboutNavLink").classList.remove("active");
    document.getElementById("HomeNavLink").classList.add("active");
        
    document.getElementById("MainProjectsPage").style.display = "none";
    document.getElementById("MainBlogsPage").style.display = "none";
    document.getElementById("MainAboutPage").style.display = "none";
    document.getElementById("MainHomePage").style.display = "block";
    $("html, body").animate({ scrollTop: 0 }, "fast");
    window.history.pushState("index.html", "Mohammed | AriesLab", "http://localhost/MyPortfolio/");
}

function showBlogsWindow(){
    document.getElementById("ProjectsNavLink").classList.remove("active");
    document.getElementById("HomeNavLink").classList.remove("active");
    document.getElementById("AboutNavLink").classList.remove("active");
    document.getElementById("BlogsNavLink").classList.add("active");
        
    document.getElementById("MainProjectsPage").style.display = "none";
    document.getElementById("MainHomePage").style.display = "none";
    document.getElementById("MainAboutPage").style.display = "none";
    document.getElementById("MainBlogsPage").style.display = "block";
    $("html, body").animate({ scrollTop: 0 }, "fast");
    window.history.pushState("index.html", "Mohammed | AriesLab", "http://localhost/MyPortfolio/Blogs");
}

function showAboutWindow(){
    document.getElementById("ProjectsNavLink").classList.remove("active");
    document.getElementById("HomeNavLink").classList.remove("active");
    document.getElementById("BlogsNavLink").classList.remove("active");
    document.getElementById("AboutNavLink").classList.add("active");
        
    document.getElementById("MainProjectsPage").style.display = "none";
    document.getElementById("MainHomePage").style.display = "none";
    document.getElementById("MainBlogsPage").style.display = "none";
    document.getElementById("MainAboutPage").style.display = "block";
    $("html, body").animate({ scrollTop: 0 }, "fast");
    window.history.pushState("index.html", "Mohammed | AriesLab", "http://localhost/MyPortfolio/About");
}

$(document).ready(function(){
    $("#ProjectsNavLink").click(function(event){
        showProjectsWindow();
    });
});

$(document).ready(function(){
    $("#HomeNavLink").click(function(event){
        showHomeWindow();
    });
});

$(document).ready(function(){
    $("#BlogsNavLink").click(function(event){
        showBlogsWindow();
    });
});

$(document).ready(function(){
    $("#AboutNavLink").click(function(event){
        showAboutWindow();
    });
});

$(window).scroll(function() {
  if ($(window).scrollTop() < 20 && $(window).width() < 1000) {
    $("#HeadersJoinMentorshipForm").fadeIn("slow");
    document.querySelector(".headerCurve").style.height = "125px";
  }
});
$(window).scroll(function() {
  if ($(window).scrollTop() > 20 && $(window).width() < 1000) {
    //$("#HeadersJoinMentorshipForm").fadeOut("fast");
    document.getElementById("HeadersJoinMentorshipForm").style.display = "none";
    document.querySelector(".headerCurve").style.minHeight = "40px";
    document.querySelector(".headerCurve").style.height = "40px";
  }
});