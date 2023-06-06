import Seller from "./Seller";
import banana from "./banana";
import jam from "./jam";
import lichu from "./lichu";
import mango from "./mango";


const fakeData = [...lichu, ...mango, ...banana, ...jam, ...Seller];

const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;