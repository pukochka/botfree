import CryptoJS from "crypto-js";
import crypto from "crypto";

export default function (init, params) {
  if (init == 0) {
    return false;
  } else {
    let data = init;
    let hash = data.hash;

    const checkString = Object.keys(data)
      .filter((key) => key !== "hash")
      .map((key) => `${key}=${data[key]}`)
      .sort()
      .join("\n");

    console.log(checkString);

    const signature = CryptoJS.HmacSHA256(
      checkString,
      CryptoJS.enc.Hex.parse(params.secretKey)
    ).toString(CryptoJS.enc.Hex);

    console.log("original hash:", hash);
    console.log("computed hash:", signature);

    // console.log(CryptoJS.HmacSHA256(checkString, secretKey));
    // if (
    //   CryptoJS.HmacSHA256(checkString, secretKey).toString(CryptoJS.enc.Hex) ==
    //   hash
    // ) {
    //   return true;
    // } else {
    //   return false;
    // }
  }
}
