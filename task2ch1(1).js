let user = {
    author: "John Red Doe",
    title: "Mr.RED has a red and a green car",
    images: {
    url: "https://dummy.com/red-image.jpg",
    }
}

for (let key in user) {
    if (typeof user[key] === "string" && "object") {
        user[key] = user[key].replace(/red/gi, "blue");
    } else if (typeof user[key] === "object" && user[key] !== null) {
        for (let prop in user[key]) {
            if (typeof user[key][prop] === "string") {
                user[key][prop] = user[key][prop].replace(/red/gi, "blue");
            }
        }
    }
}

console.log(user);