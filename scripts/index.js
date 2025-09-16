
document.addEventListener('DOMContentLoaded', () => {


  new TypeIt("#hero-text", {
    strings: ['Reliable Solutions Through','<span class="text-green-800 dark:text-green-500 ">Software Engineering...</span>' ],
    speed: 100,
    startDelay: 100,
    duration: 700,
    loop: true,
})
	.delete(97, {instant: false})
	.type("Association of Software Engineering Students")
	.type('<span class="text-green-800 dark:text-green-500">, FUTO.</span>')
	.delete(1)
	.go();

});