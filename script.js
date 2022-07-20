const mobileKeyBTrigger = document.getElementById('mobile-keyb-trigger');

mobileKeyBTrigger.addEventListener('keyup', ()=>{
	mobileKeyBTrigger.value = '';
})

window.addEventListener('keydown', (event) => {
	insert.innerHTML = `
		<div class="key">
		${event.key === ' ' ? 'Space' : event.key}
		<small>event.key</small>
		</div>

		<div class="key">
		${event.keyCode}
		<small class="depreciated" aria-label="depreciated">event.keyCode</small>
		</div>

		<div class="key">
		${event.code}
		<small>event.code</small>
		</div>
	`;
});

