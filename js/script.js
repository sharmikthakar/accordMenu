$(document).ready(function(){
	$(".fireHere").accordMenu({
		colors: 3, //default value = 2 | select level of accordian colors
		keepParentOpen: false, //keep link root links open when browsing next root | default: false
		keepSiblingsOpen: false, //keep siblings chidren open when browsing current link | default: false
		animation: 'slide', // slide or hide | default is slide.
		selClass: 'selected', // custom class for selected link | default: selected
		rootClass: 'rootLink', // custom class for current links root parent | default: rootLink
		parentClass: 'parentLink' // (optional- applicable only when colors:3) custom class for current links parent | default: class given to rootClass
	});
});
