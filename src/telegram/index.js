import CryptoJS from "crypto-js";

export default function (init, params) {
  if (init && params) {
    let data = init;
    let hash = data.hash;

    const checkString = Object.keys(data)
      .filter((key) => key !== "hash")
      .map((key) => `${key}=${data[key]}`)
      .sort()
      .join("\n");

    const signature = CryptoJS.HmacSHA256(
      checkString,
      CryptoJS.enc.Hex.parse(params)
    ).toString(CryptoJS.enc.Hex);

    return signature == hash;
  } else {
    return false;
  }
}
