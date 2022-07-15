document.getElementById("calculatePlace").focus();

let keys = document.querySelectorAll("#keysWrapper>button");
let inp = document.getElementById("calculatePlace");

for (i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", function() {
    temp = this.value;
    inp.value += temp;
  });
}

function result(self) {
  self.value = eval(inp.value);
  inp.value = "";
}

function del(self) {
  inp.value = inp.value.slice(0, -1);
  self.value = "";
}

function clearAll(self) {
  inp.value = self.value;
  self.value = " ";
  document.getElementById("calculatePlace").focus();
}