myGrade = 50;

/*
if (myGrade >= 90) {
    console.log("A");
}x
else if (myGrade >= 80){
    console.log("B");
}
else if (myGrade >= 70){
    console.log("C")
}
else if (myGrade >= 60){
    console.log("D")
}
else if (myGrade <= 59){
    console.log("F")
}
else{
    console.log("NOT A VALID NUMBER")
}
*/

switch (true) {
    case myGrade >= 90:
        console.log("A");
        break;
    case (myGrade >= 80):
        console.log("B");
        break;
    case (myGrade >= 70):
        console.log("C");
        break;
    case (myGrade >= 60):
        console.log("D");
        break;
    default:
        console.log("F")
        break;
}

