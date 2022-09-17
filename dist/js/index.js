var btnMarkAllAsRead = document.querySelector('.btnMarkAllAsRead');

btnMarkAllAsRead.addEventListener('click', () => {
    document.querySelectorAll('.active-state').forEach(items => {
        items.style.display = "none"
    })
    document.querySelectorAll('.active').forEach(items => {
        items.style.background = "none"
    })
    document.querySelector('.count').textContent = "0"
})