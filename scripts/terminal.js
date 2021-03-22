document.addEventListener("keydown", result);

function result(e) {
  if (e.code === "Enter") {
    const terminal = document.querySelector('.terminal:last-of-type');
    const command = terminal.querySelector("input");
    if (command.value === "man wuzei") {
      const man = document.querySelector(".wuzei").cloneNode(true);
      man.setAttribute("style", "display:flex");
      document.querySelector('main').appendChild(man);
    } 
    else if ( (command.value === "wuzei -d") || (command.value === "wuzei --description") ) {
      const description = document.querySelector(".new").cloneNode(true);
      description.setAttribute("style", "display:initial");
      description.textContent = "Description";
      document.querySelector('main').appendChild(description);
    } 
    else if ( (command.value === "wuzei --contact") || (command.value === "wuzei -c") ) {
      const content = document.querySelector(".new").cloneNode(true);
      content.setAttribute("style", "display:initial");
      content.textContent = "mayeulfargier10@gmail.com";
      document.querySelector('main').appendChild(content);
    } 
    else if ( (command.value === "wuzei --download") || (command.value === "wuzei -D") ) {
      const download = document.createElement('a');
      download.href = "../test.txt";
      download.setAttribute("download", "test.txt");
      download.click();
    }
    else if ( (command.value === "wuzei -s") || (command.value === "wuzei --skate") ) {
      const skate = document.createElement('a');
      skate.href = "https://brailleskateboarding.com/wp-content/uploads/2020/08/jason-park.jpg";
      skate.click();
    }
    const commandLine = document.querySelector('.terminal').cloneNode(true);
    commandLine.querySelector("input[name='command']").value = "";
    document.querySelector('main').appendChild(commandLine);
    const focusNewLine = document.querySelector('.terminal:last-of-type');
    focusNewLine.querySelector("input[name='command']").focus();
  }
}
