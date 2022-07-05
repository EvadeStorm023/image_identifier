Webcam.set({
    width: 350,
    height :300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");
 
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("photo").innerHTML = "<img src ="+data_uri+" id='cap_pic'>"
    });
}