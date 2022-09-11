function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color
  
}
function colorChanged(){
  console.log("colorChanged")
  console.log(this.value)
  changeBackgroundColor(this.value)
}
const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("change", colorChanged)