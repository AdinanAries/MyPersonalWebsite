//my router file
//window.location.toString() returns the curren page URL
var Url = window.location.toString();

//alert(Url);
function route(){
    if(Url === "http://localhost/MyPortfolio/Projects"){
        window.history.pushState("index.html", "Mohammed | AriesLab", "http://localhost/MyPortfolio/Projects");
        document.getElementById("HomeNavLink").classList.remove("active");
        document.getElementById("BlogsNavLink").classList.remove("active");
        document.getElementById("AboutNavLink").classList.remove("active");
        document.getElementById("ProjectsNavLink").classList.add("active");

        document.getElementById("MainHomePage").style.display = "none";
        document.getElementById("MainBlogsPage").style.display = "none";
        document.getElementById("MainAboutPage").style.display = "none";
        document.getElementById("MainProjectsPage").style.display = "block";
    }
    else if(Url === "http://localhost/MyPortfolio/Blogs"){
        window.history.pushState("index.html", "Mohammed | AriesLab", "http://localhost/MyPortfolio/Blogs");
        document.getElementById("ProjectsNavLink").classList.remove("active");
        document.getElementById("HomeNavLink").classList.remove("active");
        document.getElementById("AboutNavLink").classList.remove("active");
        document.getElementById("BlogsNavLink").classList.add("active");

        document.getElementById("MainProjectsPage").style.display = "none";
        document.getElementById("MainHomePage").style.display = "none";
        document.getElementById("MainAboutPage").style.display = "none";
        document.getElementById("MainBlogsPage").style.display = "block";
    }
    else if(Url === "http://localhost/MyPortfolio/About"){
        window.history.pushState("index.html", "Mohammed | AriesLab", "http://localhost/MyPortfolio/About");
        document.getElementById("ProjectsNavLink").classList.remove("active");
        document.getElementById("HomeNavLink").classList.remove("active");
        document.getElementById("BlogsNavLink").classList.remove("active");
        document.getElementById("AboutNavLink").classList.add("active");

        document.getElementById("MainProjectsPage").style.display = "none";
        document.getElementById("MainHomePage").style.display = "none";
        document.getElementById("MainBlogsPage").style.display = "none";
        document.getElementById("MainAboutPage").style.display = "block";
    }else{
        document.getElementById("ProjectsNavLink").classList.remove("active");
        document.getElementById("BlogsNavLink").classList.remove("active");
        document.getElementById("AboutNavLink").classList.remove("active");
        document.getElementById("HomeNavLink").classList.add("active");

        document.getElementById("MainProjectsPage").style.display = "none";
        document.getElementById("MainBlogsPage").style.display = "none";
        document.getElementById("MainAboutPage").style.display = "none";
        document.getElementById("MainHomePage").style.display = "block";
    }
}

route();