const labels = document.querySelectorAll('.form-control label')
const toggles = document.querySelectorAll('.toggle')
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

toggles.forEach(toggle => {
    toggle.addEventListener('change', () => {
      nav.classList.toggle('active');
      container.classList.toggle('active');
    });
})

openBtn.addEventListener('click', () => {
  sideBar.classList.add('show')
})

closeBtn.addEventListener('click', () => {
  sideBar.classList.remove('show');
});