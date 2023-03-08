function mobileMenuFunc() {
    //! header sidebar start
    const btnOpenMobileMenu = document.querySelector("#menu-btn");
    const mobileMenu = document.querySelector("#navbar");
    const closeMobileMenu = document.querySelector("#close-btn");
    const menuListX = document.querySelector(".bi-x-lg");
    const btnHome = document.querySelector("#btn-home");
    const btnAbout = document.querySelector("#btn-about");
    const btnRecipes = document.querySelector("#btn-recipes");
    const btnNews = document.querySelector("#btn-news");
    const btnBlog = document.querySelector("#btn-blog");
    const btnContact = document.querySelector("#btn-contact");

    btnOpenMobileMenu.addEventListener("click", function () {
        mobileMenu.style.display = "block";
        btnOpenMobileMenu.style.display = "none";
        closeMobileMenu.style.display = "block";
        menuListX.style.animation = "animate 0.5s alternate-reverse";
    });
    btnHome.addEventListener("click", function () {
        mobileMenu.style.display = "none";
    });
    btnAbout.addEventListener("click", function () {
        mobileMenu.style.display = "none";
        btnOpenMobileMenu.style.display = "block";
        closeMobileMenu.style.display = "none";
    });
    btnRecipes.addEventListener("click", function () {
        mobileMenu.style.display = "none";
        btnOpenMobileMenu.style.display = "block";
        closeMobileMenu.style.display = "none";
    });
    btnNews.addEventListener("click", function () {
        mobileMenu.style.display = "none";
        btnOpenMobileMenu.style.display = "block";
        closeMobileMenu.style.display = "none";
    });
    btnBlog.addEventListener("click", function () {
        mobileMenu.style.display = "none";
        btnOpenMobileMenu.style.display = "block";
        closeMobileMenu.style.display = "none";
    });
    btnContact.addEventListener("click", function () {
        mobileMenu.style.display = "none";
        btnOpenMobileMenu.style.display = "block";
        closeMobileMenu.style.display = "none";
    });
    closeMobileMenu.addEventListener("click", function () {
        mobileMenu.style.display = "none";
        btnOpenMobileMenu.style.display = "block";
        closeMobileMenu.style.display = "none";
        menuListX.style.animation = "unset";
    });

    /* click outside start */
    document.addEventListener("click", function (event) {
        if (
            !event.composedPath().includes(mobileMenu) &&
            !event.composedPath().includes(btnOpenMobileMenu)
        ) {
                mobileMenu.style.display = "none";
                btnOpenMobileMenu.style.display = "block";
                closeMobileMenu.style.display = "none";
        }
    });
    /* click outside end */
    //! header sidebar end

}

mobileMenuFunc();

