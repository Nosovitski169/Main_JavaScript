        // Homework:

        var number_1 = 5,
            number_2 = 10;

        // Version 1 // Array

        var array = [5, 10],
            number_1 = array[0],
            number_2 = array[1];

        number_1 = array[1];
        number_2 = array[0];

        console.log(number_1);
        console.log(number_2);

        // Version 2 // Temporary number

        var number_1 = 5,
            number_2 = 10,
            buffer_number = 0;

        buffer_number = number_2; // buffer_number = 10
        number_2 = number_1; // number_2 = 5
        number_1 = buffer_number; // number_1 = 10
        console.log(number_1);
        console.log(number_2);

        // Version 3 // Деструктурирующее присваивание

        var number_1 = 5,
            number_2 = 10;

        [number_1, number_2] = [number_2, number_1] // number_2 = 5, number_1 = 10
        console.log(number_1);
        console.log(number_2);
        alert("Откройте консоль");


        var name = "Василий",
            admin;

        admin = name;
        alert(admin);