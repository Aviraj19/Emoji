prediction1=""
prediction2=""
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});
Camera=document.getElementById("camera");
Webcam.attach(Camera)
function takesnapshot() {
    Webcam.snap(function(data_url){
    document.getElementById("result").innerHTML='<img src="'+data_url+'" id="Img1">';
    });
}
console.log("ml5version",ml5.version)
Classfier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/DGwTfw-xG/model.json",model_loaded);
function model_loaded() {
    console.log("model is loaded")
}
function speak() {
 synth=window.speechSynthesis;
 speakdata1="The first prediction is "+ prediction1;
 speakdata2="The seconf prediction is "+prediction2;
 var utterance=new SpeechSynthesisUtterance(speakdata1+speakdata2)
 synth.speak(utterance)
}
speak()