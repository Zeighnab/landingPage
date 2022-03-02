const labels = document.querySelectorAll('.form-control label')
const nav = document.querySelector('.navbar')
const container = document.querySelector('.container');
const openBtn = document.getElementById('navbtn')
const closeBtn = document.getElementById('closebtn');
const sideBar = document.getElementById('sidebar')

labels.forEach((label) => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`)
    .join('')
})

openBtn.addEventListener('click', () => {
  sideBar.classList.add('show')
})

closeBtn.addEventListener('click', () => {
  sideBar.classList.remove('show');
});