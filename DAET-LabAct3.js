// APP DEV LABORATORY ACTIVITY 3
// CLOUD SEDGWICK B. DAET
// BSCS - 2B
//-------------------------------------------------
// Setup: Base Number according to the last digit of my Student ID
let base_number = 9;

// Grade Calculator
function calculateGrade(score) {
    // Simple If-Else-If structure
    if (score >= 90 && score <= 100) {
        return "A"; 
    } else if (score >= 80 && score <= 89) {
        return "B";
    } else if (score >= 70 && score <= 79) {
        return "C";
    } else if (score >= 60 && score <= 69) {
        return "D";
    } else {
        return "F"
    }
}