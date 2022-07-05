import "./style.scss";

const resizeScrollPadding = () => {
    const navigationHeight =
        document.querySelector<HTMLElement>("#header")?.offsetHeight ?? "64";

    document.documentElement.style.setProperty(
        "--scroll-padding",
        navigationHeight.toString() + "px"
    );
};

const handleScrollPadding = () => {
    window.addEventListener("resize", resizeScrollPadding);
    resizeScrollPadding();
};

const updateNavbar = () => {
    const navbar = document.querySelector("#header")!;
    const html = document.querySelector("html")!;

    if (html.scrollTop !== 0) {
        navbar.removeAttribute("class");
    } else {
        navbar.setAttribute("class", "top-scrolled");
    }
};

const handleNavbarTransparency = () => {
    updateNavbar();
    window.addEventListener("scroll", updateNavbar);
};

handleNavbarTransparency();
handleScrollPadding();
