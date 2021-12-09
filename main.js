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
 var utterance=new SpeechSynthesisUtterance(speakdata1+speakdata2);
 synth.speak(utterance);
}
function identifyimage() {
    img=document.getElementById("Img1");
    Classfier.classify(img,getresult);
}
function getresult(error,results) {
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        prediction1=results[0].label;
        prediction2=results[1].label;
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
        speak()
        if(prediction1=="Happy"){
            document.getElementById("update_emoji").innerHTML="&#128522;";
        }
        else if(prediction1=="Sad"){
            document.getElementById("update_emoji").innerHTML="&#128532;";
        }
        else if(prediction1=="Angry"){
            document.getElementById("update_emoji").innerHTML="&#128548;";
        } 
        if(prediction2=="Happy"){
            document.getElementById("update_emoji2").innerHTML="&#128522;";
        }
        else if(prediction2=="Sad"){
            document.getElementById("update_emoji2").innerHTML="&#128532;";
        }
        else if(prediction2=="Angry"){
            document.getElementById("update_emoji2").innerHTML="&#128548;";
        } 
    }
}