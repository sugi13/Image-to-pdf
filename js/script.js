let showSelectImage = document.getElementById("showImage");

let fileButton = document.getElementById("input-file");
let downloadButton = document.getElementById("download-btn");
let newImage;

function selectImage(event){
    showSelectImage.src = URL.createObjectURL(event.target.files[0]);
    console.log(showSelectImage);

    newImage = document.createElement("img");
    newImage.src = URL.createObjectURL(event.target.files[0]);

    showSelectImage.onload = function(){
        URL.createObjectURL(showSelectImage.src);
    }
}

function download(){
    let doc = new jsPDF("p", "mm", "a4", [100, 100]);
    let width = doc.internal.pageSize.getWidth();
    let height = doc.internal.pageSize.getHeight();

    doc.addImage(newImage, 'JPEG', 0, 0, width, height);
    doc.save("filename.pdf");
}

fileButton.addEventListener("change", selectImage);
downloadButton.addEventListener("click", download);
