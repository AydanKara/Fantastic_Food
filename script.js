function mobileMenuFunc() {

    //! header sidebar start
    const btnOpenMobileMenu = document.querySelector("#menu-btn");
    const mobileMenu = document.querySelector("#navbar");
    const closeMobileMenu = document.querySelector("#close-btn");
    
    btnOpenMobileMenu.addEventListener("click", function () {
        
        mobileMenu.style.display = "block";
        btnOpenMobileMenu.style.display = "none";
        closeMobileMenu.style.display = "block";
        closeMobileMenu.style.transform = "rotate(360deg)";
    });

    closeMobileMenu.addEventListener("click", function () {
        
        mobileMenu.style.display = "none";
        btnOpenMobileMenu.style.display = "block";
        closeMobileMenu.style.display = "none";
    });
    

    

    /* click outside start */
    document.addEventListener("click", function (event) {
        if (
            !event.composedPath().includes(mobileMenu) &&
            !event.composedPath().includes(btnOpenMobileMenu)
        ) {
            mobileMenu.style.display = "none";
        }
    });
    /* click outside end */


    //! header sidebar end
}

mobileMenuFunc();