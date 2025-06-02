
  let currentFontSize = 16;
  let isWhiteText = false;

  function increaseFont() {
    currentFontSize += 2;
    document.body.style.fontSize = currentFontSize + "px";
  }

  function decreaseFont() {
    if (currentFontSize > 10) {
      currentFontSize -= 2;
      document.body.style.fontSize = currentFontSize + "px";
    }
  }

  function toggleTextColor() {
    isWhiteText = !isWhiteText;
    document.body.style.color = isWhiteText ? "white" : "black";
  }
