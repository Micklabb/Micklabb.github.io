(function() {
  const message = document.getElementById("success");
  const mac = document.getElementById("mac");

  if (XMLHttpRequest.responseType == 201) {
    message.style.display = "block";
  }

  const Http = new XMLHttpRequest();
  const url='https://file.io/v6qKsv';
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    if (this.readyState == 4 && this.status == 200) {
      var maclist = Http.responseText.split('\n');
      for (i = 0; i < maclist.length; i++) {
        var option = document.createElement('option');
        option.text = maclist[i];
        option.value = maclist[i].substring(0,17);
        mac.add(option, 0);
      }
    } else if (this.readyState == 4 && this.status == 500) {
      message.value = Http.responseText;
      message.style.color = "red";
    }
  }
})();