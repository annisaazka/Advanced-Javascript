class car {
    constructor(name, year, country) {
        this.name = name;
        this.year = year;
        this.country = country;
    }

    calculateAge() {
        return 2023-this.year;
    }

    madeInUS() {
        return this.country == "US";
    }
}

let Car = new car("Tesla", 2003, "US")

//mengakses masing2 properti
console.log("Nama Brand                :", Car.name);
console.log("Dibuat pada Tahun         :", Car.year);
console.log("Dibuat di Negara          :", Car.country);

//mengakses method calculateAge
console.log("Total Umur Mobil          :", Car.calculateAge());

//mengakses method madeInUS
console.log("Dibuat di US (true/false) :", Car.madeInUS());

/*
//jika negara pembuatan bukan di US
let Car = new car("Honda", 1948, "Jepang")

//mengakses masing2 properti
console.log("Nama Brand                :", Car.name);
console.log("Dibuat pada Tahun         :", Car.year);
console.log("Dibuat di Negara          :", Car.country);

//mengakses method calculateAge
console.log("Total Umur Mobil          :", Car.calculateAge());

//mengakses method madeInUS
console.log("Dibuat di US (true/false) :", Car.madeInUS());
*/