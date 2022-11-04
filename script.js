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



  }