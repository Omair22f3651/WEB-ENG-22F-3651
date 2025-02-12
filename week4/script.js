document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.createElement("div");
    const cursorDot = document.createElement("div");
    
    cursor.classList.add("cursor");
    cursorDot.classList.add("cursor-dot");

    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    document.addEventListener("mousemove", (e) => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
        
        cursorDot.style.top = `${e.clientY}px`;
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.transform = "scale(1.5)"; // Animate dot
    });

    document.addEventListener("mouseleave", () => {
        cursor.style.opacity = "0";
        cursorDot.style.opacity = "0";
    });

    document.addEventListener("mouseenter", () => {
        cursor.style.opacity = "1";
        cursorDot.style.opacity = "1";
    });

    /* Theme Toggle */
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀"; // Sun icon
        } else {
            themeToggle.textContent = "🌙"; // Moon icon
        }
    });
});
