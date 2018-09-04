window.onscroll = function() {myFunction()};
        function myFunction() {
            var navbar = document.getElementById("myNavbar");
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                navbar.className = "Navbar" + "animate-top" + "white";
            } else {
                navbar.className = navbar.className.replace("animate-top white","");
            }
        }

window.onmouseover = function() {hoverBar()};
        function hoverBar() {
            var hoverBar = document.getElementsByClassName("bar-item");
            hoverBar.className
        }