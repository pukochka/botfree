import axios from "axios";

export function getProducts({ commit, rootGetters }, { category, text }) {
  console.log(this.state);
  commit("changeProductsLoading", true);
  axios
    .post(
      `https://api.bot-t.com/v1/shoppublic/category/view?secretKey=${rootGetters["user/viewUser"].bot_data.secret_key}`,
      {
        bot_id: rootGetters["user/viewUser"].bot_data.id,
        category_id: category,
      }
    )
    .then((response) => {
      console.log(response, "Витрина");
      if (response.data.result) {
        let categoryes = [];
        for (let category in response.data.data) {
          categoryes.push(response.data.data[category]);
        }
        commit("changeProductsData", { items: categoryes, category: text });
        commit("changeProductsCategory", category);
        commit("changeProductsLoading", false);
      }
    });
}
