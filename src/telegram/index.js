import CryptoJS from "crypto-js";
// import crypto from "crypto";

export default function (init, { secretKey }) {
  if (init == 0) {
    return false;
  } else {
    let data = init;
    let hash = data.hash;

    data.user = decodeURIComponent(data.user);

    const checkString = Object.keys(data)
      .filter((key) => key !== "hash")
      .map((key) => `${key}=${data[key]}`)
      .sort()
      .join("\n");

    if (
      CryptoJS.HmacSHA256(checkString, secretKey).toString(CryptoJS.enc.Hex) ==
      hash
    ) {
      return true;
    } else {
      return false;
    }
  }
}
