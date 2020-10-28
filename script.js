window.onload = () => {
    const drawing = new Drawing("#canvas");

    document.querySelector("#reset").addEventListener("click", (e) => {
        e.preventDefault();
        drawing.reset();
    });

    document.querySelector("select#color").addEventListener("change", (e) => {
        drawing.setColor(e.target.value);
    });

    document.querySelector("input[type=range]#width").addEventListener("change", (e) => {
        drawing.setWidth(e.target.value);
    });
}