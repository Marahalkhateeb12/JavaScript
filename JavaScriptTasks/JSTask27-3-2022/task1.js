function Submit(){
    
    localStorage.setItem('Name',document.getElementById('name').value);
    localStorage.setItem('Age',document.getElementById('age').value);
    if(document.getElementById('male').checked){
        g='Male';
    }
    else{
        g='Female';
    }
    localStorage.setItem('Gender',g);
    localStorage.setItem('Description',document.getElementById('BD').value);
    localStorage.setItem('University',document.getElementById('uni').value);
    localStorage.setItem('Major',document.getElementById('major').value);
    localStorage.setItem('BirthDate',document.getElementById('birthDate').value);
    pl='';
    if(document.getElementById('Java').checked){
        pl += ' JAVA ';
    }
    if(document.getElementById('c++').checked){
        pl += ' C++ ';
    }
    if(document.getElementById('c#').checked){
        pl += ' C# ';
    }
    if(document.getElementById('python').checked){
        pl += ' Python ';
    }
    localStorage.setItem('ProgrammingLang',pl);
    localStorage.setItem('SiblingsNum',document.getElementById('siblings').value);

    bannerImage = document.getElementById('img');
    imgData = getBase64Image(bannerImage);
    localStorage.setItem("imgData", imgData);


    document.getElementById('perInfo').innerHTML='Personal Information <br>'+'Name : ' +localStorage.getItem('Name')+'<br>'+'Age : ' +localStorage.getItem('Age')+'<br>'+'BirthDate : ' +localStorage.getItem('BirthDate')+'<br>'+'SiblingsNum : ' +localStorage.getItem('SiblingsNum')+'<br>'+'Gender : ' +localStorage.getItem('Gender');
   

    document.getElementById('about').innerHTML='About Me <br>'+localStorage.getItem('Description');

    document.getElementById('edu').innerHTML='Education <br> I have study '+localStorage.getItem('Major')+' in '+localStorage.getItem('University')+'<br>Programming Languages : '+ localStorage.getItem('ProgrammingLang');

    document.getElementById('img').innerHTML=localStorage.getItem('Image').value;
    document.getElementById('con').style.visibility='visible';
    

}
function readURL(input) 
{
    document.getElementById("img").style.display = "block";

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('img').src =  e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}
function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}