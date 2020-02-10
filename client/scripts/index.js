hostIP = window.location.hostname;
hostPort = 5000;
hostURL = 'http://' + hostIP + ':' + hostPort;
fileList = hostURL + "/fileList"

elements = {
    main: document.getElementsByClassName('main')[0],
    form: document.getElementById('mani')
}

fetch(fileList)
  .then(response => response.json())
  .then(data => {
    let result = '';
    data = Object.values(data)[0];
    console.log(data);
   
    data.forEach(element => {
        result += `
        <div class="file-container">
            <div class="file-details">
                <div class="file-name"> ${element.name} </div>
                <div class="file-size"> ${(element.size/1024).toFixed(2)} KB</div>
            </div>
            <div><a href="${element.url}" target="_blank">
            <div class="button file-download" id="button-d">
                <div id="dub-arrow"> 
                    <img src="./assest/images/file-details-button.png" alt="Download" />
                </div>
                    Download
            </div></a>
            </div>
        </div>`
    });

    console.log(elements.main);
    elements.main.innerHTML = result;
});

mani = 'http://' + hostIP + ':9020' + "/manifest.json";
function load () {
  elements.form.setAttribute('href', mani);
}
load();