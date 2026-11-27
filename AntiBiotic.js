
document.addEventListener("DOMContentLoaded", function () {

    const container = document.querySelector(".categoryCardContainers");
    const pagination = document.getElementById("pagination");

    if (!container || !pagination) {
        console.error("Container or pagination not found!");
        return;
    }

    const cards = Array.from(
        container.querySelectorAll(".CategoryCards")
    );

    let currentPage = 1;
    const cardsPerPage = 6;

    const totalPages = Math.ceil(cards.length / cardsPerPage);

    function displayMedicines() {

        const start = (currentPage - 1) * cardsPerPage;
        const end = start + cardsPerPage;

        cards.forEach((card, index) => {
            card.style.display =
                index >= start && index < end ? "" : "none";
        });

        displayPagination();
    }

    function displayPagination() {

        pagination.innerHTML = "";

        // Previous
        const prev = document.createElement("button");
        prev.innerHTML = "←";
        prev.disabled = currentPage === 1;

        prev.onclick = function () {
            currentPage--;
            displayMedicines();
        };

        pagination.appendChild(prev);

        // Page Numbers
        for (let i = 1; i <= totalPages; i++) {

            const btn = document.createElement("button");

            btn.innerText = i;

            if (i === currentPage) {
                btn.classList.add("active");
            }

            btn.onclick = function () {
                currentPage = i;
                displayMedicines();
            };

            pagination.appendChild(btn);
        }

        // Next
        const next = document.createElement("button");
        next.innerHTML = "→";
        next.disabled = currentPage === totalPages;

        next.onclick = function () {
            currentPage++;
            displayMedicines();
        };

        pagination.appendChild(next);
    }

    console.log("Total Cards:", cards.length);
    console.log("Total Pages:", totalPages);

    displayMedicines();

});
