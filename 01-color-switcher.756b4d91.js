let t=null;let e=!1;const o={startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]")};o.stopButton.classList.add("active-style"),o.startButton.addEventListener("click",(function(){if(e)return;e=!0,o.startButton.classList.add("active-style"),o.stopButton.classList.remove("active-style"),t=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),o.stopButton.addEventListener("click",(function(){clearInterval(t),e=!1,o.startButton.classList.remove("active-style"),o.stopButton.classList.add("active-style")})),console.log("qwqweq");
//# sourceMappingURL=01-color-switcher.756b4d91.js.map
