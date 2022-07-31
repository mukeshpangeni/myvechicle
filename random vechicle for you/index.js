window.onload = choosePic;
var myPix = new Array(
  "29.jpg",
  "2.jpg",
  
  "48.jpg",
  "3.jpg",
  "32.jpg",
  "5.jpg",
  "6.jpg",
  "16.jpg", 
  "8.jpg",
  "49.jpg",
  
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "1.jpg",
  "36.jpg",
 
  "14.jpg",
  "51.jpg",
  "15.jpg",
 
  "17.jpg",

  "19.jpg",
  "20.jpg",
  "21.jpg",
  
  "23.jpg",
  "24.jpg",
  "25.jpg",
  "26.jpg",
  "7.jpg",
  "27.jpg",
  "28.jpg",
  
  "30.jpg",
  "18.jpg",
  "31.jpg",
  "41.jpg",
  "22.jpg",
  "33.jpg",
  "34.jpg",
  "35.jpg",
  "4.jpg",
  
  "37.jpg",
  "38.jpg",
  "9.jpg",
  "39.jpg",
  "40.jpg",
  
  "42.jpg",
  "43.jpg",
 
  "45.jpg",
  "13.jpg",
  "46.png",
  "47.jpg",
  
  "50.jpg",
  
  "52.png",

  "44.jpg", 
  
  );

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}