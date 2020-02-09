hostIP = window.location.hostname;
// hostIP = '172.16.9.170';
hostPort = 5000;
hostURL = 'http://' + hostIP + ':' + hostPort;

elements = {
    main: document.getElementsByClassName('container')[0],
    form: document.getElementById('uploadForm')
}

fileList = hostURL + "/fileList";
fetch(fileList)
  .then(response => response.json())
  .then(data => {
    let result = '';
    data = Object.values(data)[0];
    console.log(data);
   
    data.forEach(element => {
        result += `
        <div class="col-sm-4">
        <div class="card">
            
            <div class="card-title">
                <h2>${element.name}</h2>
                <a href="">
                <img src="../assest/images/delete-button.jfif" id="delete-image" >
               </a>
            </div>
            <div class="card-body">
                <h4>${(element.size/1024).toFixed(2)} KB</h4>
                </div>
          <button type="button " class="btn btn-danger " data-toggle="modal" data-target="#1">
              Details
            </button>
            <div class="modal" id="1">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h3 class="modal-title">${element.name}</h3>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>
                  <div class="modal-body">
                  <h3> Users downloaded</h3><br>
                    <h4>User1</h4><br>
                    <h4>User2</h4><br>
                    <h4>User3</h4><br>
                    <h4>User4</h4><br>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
              </div>
              <a href="${element.url}">
              <button type="button" class="btn btn-danger download-button" >
              Download
              </button></a>
          </div>
          </div>`
    });

    console.log(elements.main);
    elements.main.innerHTML = result;
});

formURL = hostURL + "/upload";
function load () {
  elements.form.setAttribute('action', formURL);
}
load();