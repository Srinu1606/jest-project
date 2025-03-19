const base64String = "U2FsdGVkX1847rbs18yri5FAG780ekvszVkChoddDXKdoVgZfazIzDZK62mzdKXa2ceVhb0BsFVwA0IGERk5mPdczHJiKbsEjKf9nGUDQMOIACj56LilD/C5GDpoh5trJ5Cegt9rnd4C9p6pSmxVpapJeZfXceTwDeuunVuoa5dUZvlPgo70XcVyOK0pEB2AtQTCPYYA9lLbZIhrpV614Q==";
const decodedString = Buffer.from(base64String, 'base64').toString('utf8');

console.log(decodedString);  // Output: Hello world!
