import "./style.scss";

const resizeScrollPadding = () => {
    const navigationHeight =
        document.querySelector<HTMLElement>("#primary-navigation")?.offsetTop ??
        "4rem";

    document.documentElement.style.setProperty(
        "--scroll-padding",
        navigationHeight.toString()
    );
};

window.addEventListener("resize", resizeScrollPadding);
resizeScrollPadding();
