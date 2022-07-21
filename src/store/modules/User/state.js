import { ref } from "vue";
export default function () {
  return {
    user: ref({
      init_telegram: {},
      status: false,
      data: {},
      search: {},
      warning: "",
      loading: true,
      tab: "catalog",
      colors: [
        {
          name: "Стандартная",
          background: "#edf2fb",
          text: "#1b4965",
          add: "rgb(115, 107, 107)",
          select: true,
          id: 1,
        },
        {
          name: "Зелёная",
          background: "#f0fff1",
          text: "#588157",
          add: "rgb(115, 107, 107)",
          select: false,
          id: 2,
        },
        {
          name: "Серая",
          background: "#e9ecef",
          text: "#495057",
          add: "rgb(115, 107, 107)",
          select: false,
          id: 3,
        },
        {
          name: "Фиолетовая",
          background: "#f7ebfd",
          text: "#4e148c",
          add: "rgb(115, 107, 107)",
          select: false,
          id: 4,
        },
        {
          name: "Коричневая",
          background: "#ede0d4",
          text: "#6f5e53",
          add: "rgb(115, 107, 107)",
          select: false,
          id: 5,
        },
      ],
    }),
  };
}
