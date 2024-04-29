document.addEventListener("DOMContentLoaded", function() {
    const numberElement = document.getElementById("number");
    const plusBtn = document.getElementById("plusBtn");
    const minusBtn = document.getElementById("minusBtn");

    let number = 0;

    function plusnumber() {
      number++;
      numberElement.textContent = number;
    }

    function minusnumber() {
      number--;
      numberElement.textContent = number;
    }

    plusBtn.addEventListener("click", plusnumber);

    minusBtn.addEventListener("click", minusnumber);
  });