const mobileKeyBTrigger = document.getElementById('mobile-keyb-trigger');
const instructions = document.getElementById('instructions');

mobileKeyBTrigger.addEventListener('keyup', () => {
	mobileKeyBTrigger.value = '';
});

window.addEventListener('keydown', (event) => {
	instructions.textContent = '';
	instructions.classList.remove('key');

	insert.innerHTML = `
		<div>
			<small>event.key</small>
			<div class="key">${event.key === ' ' ? 'Space' : event.key}</div>
		</div>

		<div>
			<small class="depreciated" aria-label="depreciated">event.keyCode</small>
			<div class="key">${event.keyCode}</div>
		</div>

		<div>
			<small>event.code</small>
			<div class="key">${event.code}</div>
		</div>
	`;
});
