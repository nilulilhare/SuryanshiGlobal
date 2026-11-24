document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("medicineContainer");
    const pagination = document.getElementById("pagination");

    const cards = Array.from(
        container.querySelectorAll(".cardsMedicine")
    );

    let currentPage = 1;
    let cardsPerPage = 12;

    let totalPages = Math.ceil(cards.length / cardsPerPage);


    function displayMedicines() {

        cards.forEach((card, index) => {

            let start = (currentPage - 1) * cardsPerPage;
            let end = start + cardsPerPage;

            card.style.display =
                index >= start && index < end ? "block" : "none";

        });

        displayPagination();
    }


    function displayPagination() {

        pagination.innerHTML = "";

        // Previous Button

        let prev = document.createElement("button");

        prev.innerHTML = "←";
        prev.disabled = currentPage === 1;

        prev.onclick = function () {
            currentPage--;
            displayMedicines();
        };

        pagination.appendChild(prev);


        // Page Numbers

        let pages = [];

        if (totalPages <= 7) {

            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }

        } else {

            pages = [1, 2, 3, 4, "...",
                     totalPages - 2,
                     totalPages - 1,
                     totalPages];

            if (currentPage > 4 && currentPage < totalPages - 3) {

                pages = [
                    1, "...",
                    currentPage - 1,
                    currentPage,
                    currentPage + 1,
                    "...",
                    totalPages
                ];

            }

        }


        pages.forEach(page => {

            let btn = document.createElement("button");

            btn.innerText = page;

            if (page === "...") {

                btn.classList.add("dots");
                btn.disabled = true;

            } else {

                if (page === currentPage) {
                    btn.classList.add("active");
                }

                btn.onclick = function () {
                    currentPage = page;
                    displayMedicines();
                };

            }

            pagination.appendChild(btn);

        });


        // Next Button

        let next = document.createElement("button");

        next.innerHTML = "→";
        next.disabled = currentPage === totalPages;

        next.onclick = function () {
            currentPage++;
            displayMedicines();
        };

        pagination.appendChild(next);

    }


    displayMedicines();

});