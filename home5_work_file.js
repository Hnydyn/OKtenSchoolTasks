const numMin = (num1, num2, num3) =>  {
    if (num1 < num2 && num1 < num3) {
        document.write(num1);
        console.log(num1);
    } else if (num2 < num3 && num2 < num1) {
        console.log(num2);
        document.write(num2);
    } else {
        console.log(num3);
        document.write(num3);
    }
};
numMin(400, 200, 70);