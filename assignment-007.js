<!DOCTYPE html>

<html> lang="en"
   <head>
       <meta charset="utf-8" />
       <title>javascript for beginners</title>
       
       
       
    </head>
    <body>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
        <a href="#">Link 5</a>
        <a href="#">Link 6</a>
        
        <script src="test.js"></script>
    </body>
</html>
   var links = document.getElementsByTagName("a");

for (i = 1; i < links.length; i++) {

    console.log("this is link number + i");

    
}
document.write("all links now looped");
