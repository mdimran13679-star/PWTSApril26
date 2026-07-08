// Assignment:
// Write a program to display the grade of a student:
// >90 - A
// >80 && <90 - B
// >70 && <80 - C
// >50 && <70 - D
// <50 - Failed

// Assignment given in statements.ts file

/**
 * Student Grade Assignment Logic
 * Purpose: Determines grade based on the marks provided.
 */

// Input: Change this value to test different marks
const studentMarks: number = 79;
let finalGrade: string;

// High-level grading logic using if-else if
if (studentMarks > 90) {
    finalGrade = "A";
} else if (studentMarks > 80 && studentMarks <= 90) {
    finalGrade = "B";
} else if (studentMarks > 70 && studentMarks <= 80) {
    finalGrade = "C";
} else if (studentMarks >= 50 && studentMarks <= 70) {
    finalGrade = "D";
} else {
    finalGrade = "Failed";
}

// Professional console output
console.log("==============================");
console.log("   STUDENT PROGRESS REPORT   ");
console.log("==============================");
console.log(` Marks Obtained : ${studentMarks}`);
console.log(` Assigned Grade : ${finalGrade}`);
console.log("==============================");