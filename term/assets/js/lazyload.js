// first attempt
let iframe = document.createElement('iframe');
iframe.src = src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.575267834578!2d-116.31988428444407!3d45.41790377910047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54a6c5695ed5fae5%3A0x837cd0558ffd520c!2s1000%20S%20Main%20St%2C%20Riggins%2C%20ID%2083549!5e0!3m2!1sen!2sus!4v1584937042702!5m2!1sen!2sus";
document.querySelector('div.leftside').appendChild(iframe);
// let imagesToLoad = document.querySelectorAll('iframe[data-src]');
// let loadImages = function(image) {
// 	image.setAttribute('src', image.getAttribute('data-src'));
// 	image.onload = function() {
// 		image.removeAttribute('data-src');
// 	};
// };
// if('IntersectionObserver' in window) {
// 	let observer = new IntersectionObserver(function(items, observer) {
// 		items.forEach(function(item) {
// 			if(item.isIntersecting) {
// 				loadImages(item.target);
// 				observer.unobserve(item.target);
// 			}
// 		});
// 	});
// 	imagesToLoad.forEach(function(img) {
// 		observer.observe(img);
// 	});
// }
// else {
// 	imagesToLoad.forEach(function(img) {
// 		loadImages(img);
// 	});
// }
