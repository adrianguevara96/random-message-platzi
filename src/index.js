const messages = [
    "David",
    "Diana",
    "Nicolay",
    "Adrian",
    "Anyami",
    "Yuumi",
    "Diego",
    "Carolina",
    "Paulina"
];

const randomMsg = () => {
    //floor - regresa el primer valor redondeado
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };