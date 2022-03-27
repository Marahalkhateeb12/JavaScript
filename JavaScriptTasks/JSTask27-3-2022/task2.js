function Submit(){
    sessionStorage.setItem('projectName',document.getElementById('pname').value);
    sessionStorage.setItem('Description',document.getElementById('description').value);
    UT=' ';
    if(document.getElementById('customer').checked){
        UT += ' Customer <br>';
    }
    if(document.getElementById('hallAdmins').checked){
        UT += ' Hall Admins <br>';
    }
    if(document.getElementById('superAdmin').checked){
        UT += ' Super Admin <br>';
    }
    if(document.getElementById('companyAdmin').checked){
        UT += ' Company Admin ';
    }
    sessionStorage.setItem('UsersType',UT);
    TU=' ';
    if(document.getElementById('browser').checked){
        TU += ' Browser <br>';
    }
    if(document.getElementById('htmlCss').checked){
        TU += ' HTML&CSS <br>';
    }
    if(document.getElementById('wdf').checked){
        TU += ' Web Development Frameworks';
    }
    if(document.getElementById('laravel').checked){
        TU += ' Laravel ';
    }
    sessionStorage.setItem('TechnologyUsed',TU);
    
    bannerImage = document.getElementById('img');
    imgData = getBase64Image(bannerImage);
    sessionStorage.setItem("imgData", imgData);

    document.getElementById('pDes').innerHTML='Subject : '+sessionStorage.getItem('projectName')+'<br>Description : '+sessionStorage.getItem('Description');
    document.getElementById('Tech').innerHTML='Technology Used in this project : <br>' + sessionStorage.getItem('TechnologyUsed');
    document.getElementById('user').innerHTML='Type of Users for this project : <br>'+sessionStorage.getItem('UsersType');




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