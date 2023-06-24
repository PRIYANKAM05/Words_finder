function count() {
  let words = document.getElementById("input").value;
  let arr = words.split(" ");
  let filteredArr = arr.filter(word => word !== ""); // Filter out empty words
  let ans = filteredArr.length;
  let result = document.getElementById("result");
  result.innerHTML = "Result: " + ans + " Words";
  
  
}
  // Call count() function to initialize the result
  count();
