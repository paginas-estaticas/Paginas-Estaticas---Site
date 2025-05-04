document.addEventListener("DOMContentLoaded", function () {
    const h1Elements = [
        document.getElementById("first-h1"),
        document.getElementById("second-h1"),
        document.getElementById("third-h1"),
        document.getElementById("final-h1")
    ];
    const smallTitle = document.getElementById("small-title-statement");
    const pStatement = document.getElementById("p-statement");
    const buttonContainer = document.getElementById("button-container-statement");
    const delay = 2000; // 3 seconds

    function showNext(index) {
        if (index > 0) {
            h1Elements[index - 1].classList.remove("visible");
        }

        if (index < h1Elements.length - 1) {
            h1Elements[index].classList.add("visible");
            setTimeout(() => showNext(index + 1), delay);
        } else {
            // Final step: show final h1 immediately
            h1Elements[index].classList.add("visible");

            // Add 1-second delay before showing small-title and p-statement
            setTimeout(() => {
                smallTitle?.classList.add("visible");
                pStatement?.classList.add("visible");
                buttonContainer?.classList.add("visible");
            }, 1000); // 1-second delay
        }
    }

    showNext(0);
});
