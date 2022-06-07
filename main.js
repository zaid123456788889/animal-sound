var dog = 0;
var cow = 0;
var cat = 0;

function start(){
    navigator.mediaDevices.getUserMedia({ audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/mC0XX9nve/model.json" , modelReady)
}

function modelReady(){
classifier.classify(gotResults);
}

function gotResults(error , results){
    if(error){
        console.error(error);
    }
    else{
console.log(results);
random_number_r = Math.floor(Math.random() * 255)+1;
random_number_g = Math.floor(Math.random() * 255)+1;
random_number_b = Math.floor(Math.random() * 255)+1;

document.getElementById("sound").innerHTML = "I can hear " + results[0].label;
document.getElementById("number").innerHTML = "Accuracy" + results[0].confidence*100..toFixed(2)+"%";
document.getElementById("sound").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
document.getElementById("number").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

img = document.getElementById("img");
if(results[0].label == "bark")
{
    img.src = "dog.jpg";
    dog = dog+1;
}
else if(results[0].label == "moo")
{
    img.src = "cow.jpg";
    cow = cow+1;
}

else if(results[0].label == "meow")
{
    img.src = "cat.jpg";
    cat =cat+1;
}
else {
    img.src="ear.jpg"
}
}


}