for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('Utshob and Sihab duijonei Bainchud');
    }
    else if (i % 3 === 0) {
        console.log('Utshob Baincud')
    }
    else if (i % 5 === 0) {
        console.log('Sihab Bainchud');
    }
    else {
        console.log('Baki Sobai Valo');
    }
}