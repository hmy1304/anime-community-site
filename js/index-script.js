const weekendItems = document.querySelectorAll(".weekend-item");

weekendItems.forEach(item => {
    item.addEventListener("click", () => {
        // 기존 선택 제거
        weekendItems.forEach(el => el.classList.remove("active"));

        // 클릭한 요일 선택
        item.classList.add("active");
    });
});