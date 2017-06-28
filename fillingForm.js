function fillInHidden(link){
	link.parentNode.children[1].children[0].children[0].children[1].children[0].children[0].children[0].value=link.parentNode.parentNode.children[0].innerHTML;
	link.parentNode.children[1].children[0].children[0].children[1].children[1].children[0].children[0].value=link.parentNode.parentNode.children[1].innerHTML;
	link.parentNode.children[1].children[0].children[0].children[1].children[2].children[0].children[0].value=link.parentNode.parentNode.children[2].innerHTML;
	
/*I know I could've used jquery. I was using this method to implement some other feature but that's not happening now, maybe later*/
return false;
}