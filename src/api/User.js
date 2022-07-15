const actionsUserData = ({ url, secret, post }) => {
  return this.$axios({
    method: "post",
    url: url,
    baseURL: `https://api.bot-t.ru/v1/shopcart/cart/`,
    params: {
      secretKey: secret,
    },
    data: post,
  });
};
