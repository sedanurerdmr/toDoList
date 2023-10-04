const TASK_INPUT = document.querySelector(`#task`);
const TASK_LIST = document.querySelector(`#list`);
const alertDOM = document.querySelector("#liveToast");
let removeBtn = ` <div class="icon"><i class="fas fa-times"></i></div>;`;
const BUTTON_DOM = document.querySelector(`#liveToastBtn`);


function giveWarning(){
    const TOAST_SUCCESS = document.querySelector(`.toast.success`);
    const warning = new bootstrap.Toast(TOAST_SUCCESS)
    warning.show();  //listeye ekleme yapildiginda alinan geri donus
}

function giveWarningError(){
    const TOAST_ERROR = document.querySelector(`.toast.error`);
    const warning = new bootstrap.Toast(TOAST_ERROR)
    warning.show(); //listeye ekleme yapilmadiginda alinan geri donus
}

function newElement(){
    if(TASK_INPUT.value === ""){
       giveWarningError()
    }else{
        let li = document.createElement("li")
        li.innerHTML = TASK_INPUT.value

        let removeItem = document.createElement("i");
        removeItem.classList.add("fas", "fa-times");

        li.appendChild(removeItem);
        TASK_LIST.appendChild(li);
        TASK_INPUT.value = "";
        giveWarning();
    }
}
TASK_LIST.addEventListener(
    "click",
    function (e) {
      if (e.target.tagName === "LI") {
          e.target.classList.toggle("checked");
      } else if (e.target.tagName === "I") {
        e.target.parentElement.remove();
      }
    },false);
