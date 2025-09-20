// APP DEV LABORATORY ACTIVITY 3
// CLOUD SEDGWICK B. DAET
// BSCS - 2B
//-------------------------------------------------
// Setup: Base Number according to the last digit of my Student ID
let base_number = 9;

// Grade Calculator
function calculateGrade(score) {
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

// Star Pattern
function showStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = " ";
        for (let j = 1; j <= i; j++) {
            pattern += "*";
        }
        console.log(pattern);
    }
}

// Prime Number Checker
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Multiplication Table
function multiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + (n * i));
    }
}

// Print Section:
// Grade Calculator
let score = (base_number * 10) + 5;
console.log("=== Problem 1: Grade Calculator ===");
console.log("Score = " + score + ", Grade = " + calculateGrade(score));
console.log("\n");

// Star Pattern Gen
let rows = base_number + 2;
console.log("=== Problem 2: Star Pattern ===");
showStars(rows);
console.log("\n");

// Prime Num Check
let number_to_check = base_number + 10;
console.log("=== Problem 3: Prime Number Checker ===");
if (isPrime(number_to_check)) {
    console.log(number_to_check + " is a prime number");
} else {
    console.log(number_to_check + " is not a prime number");
}
console.log("\n");

// Multiplication Table
console.log("=== Problem 4: Multiplication Table ===");
multiplicationTable(base_number);