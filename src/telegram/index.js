import CryptoJS from "crypto-js";

export default function (init, params) {
  if (init && params) {
    const checkString = Object.keys(init)
      .filter((key) => key !== "hash")
      .map((key) => `${key}=${init[key]}`)
      .sort()
      .join("\n");

    const signature = CryptoJS.HmacSHA256(
      checkString,
      CryptoJS.enc.Hex.parse(params)
    ).toString(CryptoJS.enc.Hex);
    return signature == init.hash;
  } else return false;
}
