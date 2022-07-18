// import "url-search-params-polyfill";

function createParams(items, params, ...args) {
  for (let i = 0; i < args.length; i++) {
    if (args[i] != null || args[i] != undefined) {
      params[items[i]] = args[i];
    }
  }
  return params;
}

function convertURL(search) {
  if (search == "") {
    return false;
  } else {
    let result = {};
    for (const [key, value] of new URLSearchParams(search)) {
      result[key] = value;
    }
    return result;
  }
}

export { convertURL, createParams };
