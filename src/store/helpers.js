export function createParams(items, params, ...args) {
  for (let i = 0; i < args.length; i++) {
    if (args[i] != null || args[i] != undefined) {
      params[items[i]] = args[i];
    }
  }
  return params;
}
