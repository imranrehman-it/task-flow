//prototype JSON tree for expanding to firebase and allow for many users

const data = {
  users: {
    user1: {
      board1: {
        name: "boardName",
        description: "this is a board",
        boardimage: "baord.jpg",
        todo: [
          {
            title: "Work on add task",
            info: "need to create a worknig add button at the bottom of each item",
            tags: [
              { color: "#B266FF", name: "important" },
              { color: "#FF6666", name: "first task" },
              { color: "#66B2FF", name: "testing" },
            ],
          },
        ],
        doing: [],
        done: [],
      },
    },
  },
};
