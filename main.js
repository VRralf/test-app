const inputs = document.querySelectorAll('.wrapper input');
const labels = document.querySelectorAll('.wrapper label');

labels.forEach(label => {
	label.innerHTML = label.innerText
		.split('')
		.map((letter, idx) => `<span style="
				transition-delay: ${idx * 50}ms
			">${letter}</span>`)
		.join('');
});

window.addEventListener("load",function() {
    setTimeout(function(){
      window.scrollTo(0, 1);
    }, 0);
});