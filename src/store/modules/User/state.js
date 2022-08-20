import { ref } from "vue";
export default function () {
  return {
    dialogs: ref({
      auth: false,
    }),
    user: ref({
      init_telegram: {},
      status: false,
      no_guest: false,
      data: {},
      search: {},
      bot_data: {},
      warning: "",
      loading: true,
      tab: "catalog",
      theme: {
        select: {
          background: "#edf2fb",
          text: "#1b4965",
          add: "rgba(0, 0, 0, 0.4)",
        },
        is_dark: false,
      },
      colors: [
        {
          name: "Стандартная",
          background: {
            light: "#edf2fb",
            dark: "#023047",
          },
          text: {
            light: "#1b4965",
            dark: "#edf2fb",
          },
          add: {
            light: "rgba(0, 0, 0, 0.4)",
            dark: "rgba(255, 255, 255, 0.4)",
          },
          select: true,
          id: 1,
        },
        {
          name: "Зелёная",
          background: {
            light: "#f0fff1",
            dark: "#274029",
          },
          text: {
            light: "#588157",
            dark: "#f0fff1",
          },
          add: {
            light: "rgba(0, 0, 0, 0.4)",
            dark: "rgba(255, 255, 255, 0.4)",
          },
          select: false,
          id: 2,
        },
        {
          name: "Серая",
          background: {
            light: "#e9ecef",
            dark: "#023047",
          },
          text: {
            light: "#495057",
            dark: "#e9ecef",
          },
          add: {
            light: "rgba(0, 0, 0, 0.4)",
            dark: "rgba(255, 255, 255, 0.4)",
          },
          select: false,
          id: 3,
        },
        {
          name: "Фиолетовая",
          background: {
            light: "#f7ebfd",
            dark: "#240046",
          },
          text: {
            light: "#4e148c",
            dark: "#f7ebfd",
          },
          add: {
            light: "rgba(0, 0, 0, 0.4)",
            dark: "rgba(255, 255, 255, 0.4)",
          },
          select: false,
          id: 4,
        },
        {
          name: "Коричневая",
          background: {
            light: "#ede0d4",
            dark: "#392a16",
          },
          text: {
            light: "#6f5e53",
            dark: "#ede0d4",
          },
          add: {
            light: "rgba(0, 0, 0, 0.4)",
            dark: "rgba(255, 255, 255, 0.4)",
          },
          select: false,
          id: 5,
        },
      ],
    }),
  };
}
