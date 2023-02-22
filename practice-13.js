function getGradePoint(marks) {
    const result = [];
    if (marks >= 80 && marks <= 100) {
        result.push('A+');
    }
    else if (marks >= 70 && marks <= 79) {
        result.push('A')
    }
    else if (marks >= 60 && marks <= 69) {
        result.push('A-')
    }
    else if (marks >= 50 && marks <= 59) {
        result.push('B')
    }
    else if (marks >= 40 && marks <= 49) {
        result.push('B-')
    }
    else if (marks >= 33 && marks <= 39) {
        result.push('c')
    } else {
        result.push('F')
    }
    return result;
}

const getMarks = getGradePoint(30);
console.log(getMarks);
