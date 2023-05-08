document.addEventListener("DOMContentLoaded", function() {

  var result = document.getElementById("result");

  var buttons = document.querySelectorAll(".buttons button");

  buttons.forEach(function(button) {

    button.addEventListener("click", function() {

      var value = this.innerHTML;

      if (value === "=") {

        try {

          result.value = eval(result.value);

        } catch (error) {

          result.value = "Error";

        }

      } else if (value === "C") {

        result.value = "";

      } else if (value === "\u2190") {

        result.value = result.value.slice(0, -1);

      } else {

        result.value += value;

      }

    });

  });

});
