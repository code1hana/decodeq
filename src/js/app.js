//main, survey
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const btn = document.querySelector('.btn');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    btn.classList.toggle('active');
});

//signup
const grade = document.querySelector('.grade-container');
const school = document.querySelector('.school-container');

$("label[for='student']").click(function(){
		
	grade.style.display = 'block';
    school.style.display = 'block';
})

$("label[for='creator']").click(function(){
		
	grade.style.display = 'none';
    school.style.display = 'none';
})