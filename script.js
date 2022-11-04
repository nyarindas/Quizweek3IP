function submitted(e) {
    e.preventDefault();
    let namee = document.forms["id"]["name"].value;
    sessionStorage.setItem("name", namee);
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
    alert("Your score is:"+score);
   



  }