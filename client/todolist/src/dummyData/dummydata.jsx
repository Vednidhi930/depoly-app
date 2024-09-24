import Chance from "chance";

const chance = Chance();

function getdata() {
  return chance.name();
}

export default getdata;
