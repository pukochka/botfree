import axios from "axios";

export function getProducts({ commit, rootGetters }, { category, text }) {
  commit("changeProductsLoading", true);
  axios
    .post(
      `https://api.bot-t.com/v1/shoppublic/category/view?secretKey=${rootGetters["user/viewUser"].search.secretKey}`,
      {
        bot_id: rootGetters["user/viewUser"].search.bot_id,
        category_id: category,
      }
    )
    .then((response) => {
      console.log(response, "Витрина");
      if (response.status === 200) {
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
