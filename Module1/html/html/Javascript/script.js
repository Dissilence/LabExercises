document.getElementById("demo").style.color = "red";

    console.log('console message')

      function helloWorld() {
        alert("Hello World!");

        console.info('debug message for hello world')

        document.getElementById("helloWorldButton").style.backgroundColor =
          "black";
        document.getElementById("helloWorldButton").style.color = "white";
      }

      function changeParagraph() {
        console.error("error message inside changeParagraph")
        document.getElementById("demo").innerHTML =
          "New <strong>paragraph</strong> text";
      }