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

//detail
const allOpen = document.querySelector('.all-open');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const units = document.querySelector('.accordion-units');

allOpen.addEventListener("click", function(){
    if(allOpen.innerText = '모두 펼치기'){
        units.style.maxHeight = + units.scrollHeight + "px";
        plus.style.display = 'none';
        minus.style.display = 'block';
        allOpen.innerText = "모두 접기";
    }
    else {
        units.style.maxHeight = null;
        plus.style.display = 'block';
        minus.style.display = 'none';
        allOpen.innerText = "모두 펼치기"
    }
});


plus.addEventListener("click", function(){
    units.style.maxHeight = + units.scrollHeight + "px";
    plus.style.display = 'none';
    minus.style.display = 'block';
});

minus.addEventListener("click", function(){
    units.style.maxHeight = null;
    plus.style.display = 'block';
    minus.style.display = 'none';
});