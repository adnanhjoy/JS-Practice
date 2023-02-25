const studentInfo = {
    name: 'Adnan Hossain',
    roll: 934677,
    student: true,
    department: 'Computer',
    marks: {
        math: 10,
        english: 10,
        bangla: 20
    },
    project: [{ name: 'hero', year: 2013 }, { name: 'icon', year: 3200 }]
}
console.log(studentInfo.project[0].year)
