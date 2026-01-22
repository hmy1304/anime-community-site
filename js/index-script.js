const weekendItems = document.querySelectorAll(".weekend-item");
const cards = document.querySelectorAll(".card-item");

// 모든 카드 표시
function showAllCards() {
    cards.forEach(card => {
        card.style.display = "block";
    });
}

// 요일별 필터링
function filterCards(day) {
    cards.forEach(card => {
        card.style.display =
            card.dataset.day === day ? "block" : "none";
    });
}

// 초기 상태: 전체 카드 표시
showAllCards();

weekendItems.forEach(item => {
    item.addEventListener("click", () => {
        const selectedDay = item.textContent.trim();
        const isActive = item.classList.contains("active");

        // 모든 요일 선택 해제
        weekendItems.forEach(el => el.classList.remove("active"));

        if (isActive) {
            // ✅ 이미 선택된 요일을 다시 클릭 → 전체 보기
            showAllCards();
        } else {
            // ✅ 새로운 요일 선택
            item.classList.add("active");
            filterCards(selectedDay);
        }
    });
});
