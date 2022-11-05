function submitted(e) {
    e.preventDefault();
    let namee = document.forms["id"]["name"].value;
    sessionStorage.setItem("name", namee);

  }

  submitButton.onclick = function(){
    showResults(fName, lName);

  }

  function result(){
    var score=0;
    if (document.getElementById('correct1').checked)
    {
        score++

    }
    if (document.getElementById('correct2').checked)
    {
        score++

    }
    if (document.getElementById('correct3').checked)
    {
        score++

    }
    if (document.getElementById('correct4').checked)
    {
        score++

    }
    if (document.getElementById('correct5').checked)
    {
        score++

    }       
          
     
    document.write("Well done, Your score is:"+score);
   
  }



