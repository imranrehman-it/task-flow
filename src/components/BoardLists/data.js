import useId from "@mui/material/utils/useId";

const data = {
  todo: [
    {
      id: 1,
      title: "Work on add task",
      info: "need to create a worknig add button at the bottom of each item",
      tags: [
        { color: "#B266FF", name: "important" },
        { color: "#FF6666", name: "first task" },
        { color: "#66B2FF", name: "testing" },
      ],
    },
    {
      id: 2,
      title: "Add board details",
      info: "need to add details suck as board name and stars",
      tags: [
        { color: "#B246FF", name: "important" },
        { color: "#BD8FF", name: "first task" },
        { color: "#66D2FF", name: "testing" },
      ],
    },
    {
      id: 3,
      tags: [],
      title: "try adding drag and drop",
      info: "try to add drag and drop features to the rows",
    },
    {
      tags: [],
      title: "Add color based organizer",
      info: "Use colour selectors",
    },
  ],
  doing: [
    {
      id: 4,
      tags: [],
      title: "Work on rendering list",
      info: "working on rendering a list of data",
    },
    {
      id: 5,
      tags: [],
      title: "Add data examples",
      info: "creating a sample data set to test my code",
    },
    {
      id: 6,
      tags: [],
      title: "Styling",
      info: "Always improving the styling",
    },
  ],
  done: [
    {
      id: 7,
      tags: [],
      title: "Build three colums",
      info: "Build three columns for todo, doing, and done",
    },
  ],
};

export default data;
