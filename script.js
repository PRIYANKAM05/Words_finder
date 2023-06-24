function count() {
    let words = document.getElementById("input").value;
    let arr = words.split(" ");
    let ans = arr.length;
    let result = document.getElementById("result");
  
    if (words.trim() === "") {
      result.innerHTML = "Result: 0 Words"; // Display 0 when there are no words
    } else {
      result.innerHTML = "Result: " + ans + " Words";
    }
  }
  
  // Call count() function to initialize the result
  count();
