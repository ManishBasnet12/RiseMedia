// var prevScrollpos = window.pageYOffset;
// var headerNavigation = document.getElementById("headernavigation");
// var scrollThreshold = 0;
// var isHeaderVisible = true;

// function throttle(callback, delay) {
//     var timeoutId;
//     return function () {
//         if (!timeoutId) {
//             timeoutId = setTimeout(function () {
//                 callback();
//                 timeoutId = null;
//             }, delay);
//         }
//     };
// }

// var throttledScroll = throttle(function () {
//     var currentScrollPos = window.pageYOffset;

//     if (currentScrollPos > scrollThreshold) {
//         if (prevScrollpos > currentScrollPos) {
//             if (!isHeaderVisible) {
//                 animateHeader("0px");
//                 isHeaderVisible = true;
//             }
//         } else {
//             if (isHeaderVisible) {
//                 animateHeader("-100px");
//                 isHeaderVisible = false;
//             }
//         }
//     } else {
//         headerNavigation.style.position = "absolute";
//         headerNavigation.style.top = "0";
//     }

//     prevScrollpos = currentScrollPos;
// }, 100); 

// window.addEventListener("scroll", throttledScroll);

// function animateHeader(topValue) {
//     headerNavigation.style.transition = "top 0.3s";
//     headerNavigation.style.position = "fixed";
//     headerNavigation.style.top = topValue;
// }


// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("headernavigation").style.top = "0";
//     } else {
//         document.getElementById("headernavigation").style.top = "-100px";
//     }
//     prevScrollpos = currentScrollPos;
// }




// Navigation scroll
window.addEventListener('scroll', function (e) {
	reloadNavigationBarIfNeeded();
});

function topOffset(percentage) {
	if (percentage >= 1) {
		return "0 px";
	}

	const offset = Math.round((percentage - 0.2) * 200)

	return offset + "px";
}

function scrollPercentage(element, strict) {
	const viewportHeight = window.innerHeight;
	const scrollTop = window.scrollY;
	const elementOffsetTop = element.offsetTop;
	const elementHeight = element.offsetHeight;

	const offset = (scrollTop - elementOffsetTop)

	if (strict) {
		return Math.min(1, Math.max((offset / elementHeight), 0))
	} else {
		return offset / elementHeight
	}
}

function reloadNavigationBarIfNeeded() {
	navigation = document.getElementById("mainheader");
	targetContainer = document.querySelector(".nav-toggle-target");

	const targetOffset = targetContainer.getBoundingClientRect().top;
	const offset = window.pageYOffset;

	if (targetOffset >= 0) {
		if (!navigation.classList.contains('minimal')) {
			navigation.classList.add('minimal');
		}
	} else {
		if (navigation.classList.contains('minimal')) {
			navigation.classList.remove('minimal');
		}
	}
}

window.onhashchange = function () {
	if (location.hash == "#dropover-cloud") {
		document.title = "Dropover Cloud - Instantly save your dragged content to the cloud"
	} else {
		document.title = "Dropover - Easier Drag and Drop on your Mac.";
	}
}
	;



	function removeExtraFade() {
		let fade = document.getElementsByClassName('offcanvas-backdrop fade show')
		for(let i = 0; i < fade.length; i++) {
		  while(fade.length > 1) {
			fade[i].remove()
		  }
		}
	  }