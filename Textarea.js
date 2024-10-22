document.getElementById('btn1').addEventListener('click', function() {;
    var comment = document.getElementById('Comment').value;
    var name = document.getElementById('Name').value;
    if (name && comment) {
      var timestamp = new Date().toLocaleString();
      var commentsArray = JSON.parse(localStorage.getItem('comments')) || [];
      commentsArray.push({ name: name, comment: comment, timestamp: timestamp });
      localStorage.setItem('comments', JSON.stringify(commentsArray));
      displayComments();
      document.getElementById('Comment').value = '';
      document.getElementById('Name').value = '';
    } else {
      alert('Please fill in both fields');
    }
  });
  function displayComments() {
    var commentsArray = JSON.parse(localStorage.getItem('comments')) || [];
    var commentsDisplay = document.getElementById('commentsDisplay');
    commentsDisplay.innerHTML = '';
  }
  displayComments();