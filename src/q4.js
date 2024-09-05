
/*
    Task 1:
    - Link the file `external.js` to this file.
    - To test if the linking works, open q5-output.html using VScode's Live Server extension. It should print "Hello World!"
    - You can refer to this link: https://www.w3schools.com/js/js_modules.asp to check how imports and modules are done.
*/

// Task 1: Add code here

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Question 6</title>
</head>
<body>
  <h1 id="test"></h1>

  <script type="module" src="external.js"></script>

  <script>
    document.querySelector("#test").innerHTML = print();
  </script>
</body>
</html>