// import "url-search-params-polyfill";
import { ref } from "vue";

const feedbacksValue = (data, type) => {
  let feedbacks = ref([]);
  for (let item of data) {
    feedbacks.value.push({
      items: item.feedback[0].items.filter((item) => item.type == type),
    });
  }
  return feedbacks.value;
};

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

function createFormFields(data) {
  let fields = ref([]);
  for (let section of feedbacksValue(data, 1)) {
    for (let field of section.items) {
      fields.value.push({
        value: "",
        id: field.id,
      });
    }
  }

  return fields.value;
}

function createFormFiles(data) {
  let files = ref([]);
  for (let section of feedbacksValue(data, 2)) {
    for (let file of section.items) {
      files.value.push({
        value: "",
        id: file.id,
      });
    }
  }
  console.log(files.value);
  return files.value;
}

function createFormCheckBoxes(data) {
  let checkbox = ref([]);
  for (let section of feedbacksValue(data, 3)) {
    for (let item of section.items) {
      for (let option of item.data.options) {
        checkbox.value.push({
          value: false,
          id: item.id,
          option_id: option.id,
          text: option.text,
        });
      }
    }
  }
  return checkbox.value;
}

export {
  convertURL,
  createParams,
  createFormFields,
  createFormCheckBoxes,
  createFormFiles,
};
