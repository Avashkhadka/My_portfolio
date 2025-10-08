export const useScrollToSection = (
    href,
    navigate,
    closeMobileMenu,
    setNavReqFromOut
) => {
    const element = document.querySelector(href);

    if (element) {
        const navHeight = -40;
        const elementPosition = element.offsetTop + navHeight;
        window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
        });
    } else {
        navigate("/");
        setNavReqFromOut(href)
    }
    closeMobileMenu();
};
