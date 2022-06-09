import CryptoJS from "crypto-js";

export default function (init, params) {
  if (init == false || params.secretKey == false) {
    return false;
  } else {
    let data = init;
    let hash = data.hash;

    const checkString = Object.keys(data)
      .filter((key) => key !== "hash")
      .map((key) => `${key}=${data[key]}`)
      .sort()
      .join("\n");

    console.log();

    const signature = CryptoJS.HmacSHA256(
      checkString,
      CryptoJS.enc.Hex.parse(params.secretKey)
    ).toString(CryptoJS.enc.Hex);

    if (signature == hash) {
      return true;
    } else {
      return false;
    }
  }
}
