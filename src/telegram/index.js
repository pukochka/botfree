import CryptoJS from "crypto-js";
import crypto from "crypto";

export default function (init, params) {
  if (init == 0) {
    return false;
  } else {
    // let data = init;
    // let hash = data.hash;

    // const checkString = Object.keys(data)
    //   .filter((key) => key !== "hash")
    //   .map((key) => `${key}=${data[key]}`)
    //   .sort()
    //   .join("\n");

    // console.log(
    //   CryptoJS.enc.Hex.parse(CryptoJS.HmacSHA256(checkString, params)),
    //   hash
    // );
    let str =
      '{ "query_id": "AAGeW2guAAAAAJ5baC49oqSg", "user": "%7B%22id%22%3A778591134%2C%22first_name%22%3A%22%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%22%2C%22last_name%22%3A%22%D0%9F%D1%83%D1%80%D1%82%D0%BE%D0%B2%22%2C%22username%22%3A%22APurtik%22%2C%22language_code%22%3A%22ru%22%7D", "auth_date": "1653871113", "hash": "b66e24219450ded20bce80b315b56953c137af56075ae8f79a4d45d02bf6ed7b" }';
    let hash =
      "b66e24219450ded20bce80b315b56953c137af56075ae8f79a4d45d02bf6ed7b";
    let secret_key =
      "db0b766fdbc2274841d28673d0f4cf15dc311b9827f7c7cb2539d05a0f1c317e";
    let token = "2109328710:AAGFynAUSvPhYwDCXkmp14HUsmC8h1ap3FI";
    let json = JSON.parse(str);
    console.log(json.user);
    json.user = decodeURIComponent(json.user);

    const checkString = Object.keys(json)
      .filter((key) => key !== "hash")
      .map((key) => `${key}=${json[key]}`)
      .sort()
      .join("\n");

    console.log(checkString);

    const secret = CryptoJS.HmacSHA256(token, "WebAppData");
    console.log("js secret:", secret);
    console.log("php secret:", secret_key);

    const signature = CryptoJS.HmacSHA256(checkString, secret);
    const hex = signature.toString(CryptoJS.enc.Hex);

    console.log("original hash:", hash);
    console.log("computed hash:", hex);

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
