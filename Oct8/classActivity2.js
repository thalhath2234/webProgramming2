function convertToGrade (){
    let grade = prompt( "Enter your Grade: ");
    let LetterGrade;
    switch (true) {
        case (grade >= 90 && grade <= 100):
            LetterGrade = "A";
            break;
        case grade >= 80:
            LetterGrade = "B";
            break;
        case grade >= 70:
            LetterGrade = "C";
            break;
        case grade >= 60:
            LetterGrade = "D";
            break;
        default:
            LetterGrade = "F";
            break;
    }
    console.log(`Your grade is ${LetterGrade}`);
        
}