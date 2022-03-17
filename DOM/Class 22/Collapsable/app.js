let item = document.getElementsByClassName('item');
let isOpen = true;

function collapse() {
  if(isOpen){
    item[0].style.cssText = "height:0px";
    isOpen = false;
  } else {
    item[0].style.cssText = 'height:150px'
    isOpen = true;
  }
}