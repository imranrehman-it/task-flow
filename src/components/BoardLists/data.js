import useId from "@mui/material/utils/useId";

const data = {
  title: "Board",
  BoardImage:
    "https://static.vecteezy.com/system/resources/previews/005/084/897/original/expert-marketing-broker-stock-trader-present-stock-market-in-year-showing-growth-rates-on-board-isolated-free-vector.jpg",
  BoardDescription:
    "This is the first board, simply used as a way to keep track of task to do, inp-progress, and compleated",
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
      details:
        "The kids were loud. They were way too loud for Jerry, especially since this was a four-hour flight. The parents didn't seem to be able, or simply didn't want, to control them. They were yelling and fighting among themselves and it was impossible for any of the passengers to concentrate or rest. He thought about politely tapping on the parents' shoulders and asking them to try and get their kids under a bit more control, but before he did he came up with a better idea. Sure, it was a bit sinister, and he'd probably end p in a lot of trouble, but he really didn't care at that point.",
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
      details:
        "He stared out the window at the snowy field. He'd been stuck in the house for close to a month and his only view of the outside world was through the window. There wasn't much to see. It was mostly just the field with an occasional bird or small animal who ventured into the field. As he continued to stare out the window, he wondered how much longer he'd be shackled to the steel bar inside the house.",
    },
    {
      id: 3,
      tags: [],
      title: "try adding drag and drop",
      info: "try to add drag and drop features to the rows",
      details:
        "The shoes had been there for as long as anyone could remember. In fact, it was difficult for anyone to come up with a date they had first appeared. It had seemed they'd always been there and yet they seemed so out of place. Why nobody had removed them was a question that had been asked time and again, but while they all thought it, nobody had ever found the energy to actually do it. So, the shoes remained on the steps, out of place in one sense, but perfectly normal in another.",
    },
    {
      id: 200,
      tags: [],
      title: "Add color based organizer",
      info: "Use colour selectors",
      details:
        "I checked in for the night at Out O The Way motel. What a bad choice that was. First I took a shower and a spider crawled out of the drain. Next, the towel rack fell down when I reached for the one small bath towel. This allowed the towel to fall halfway into the toilet. I tried to watch a movie, but the remote control was sticky and wouldn’t stop scrolling through the channels. I gave up for the night and crawled into bed. I stretched out my leg and felt something furry by my foot. Filled with fear, I reached down and to my surprise, I pulled out a raccoon skin pair of underwear. After my initial relief that it wasn’t alive, the image of a fat, ugly businessman wearing raccoon skin briefs filled my brain. I jumped out of the bed, threw my toothbrush into my bag, and sprinted towards my car.",
    },
  ],
  doing: [
    {
      id: 4,
      tags: [],
      title: "Work on rendering list",
      info: "working on rendering a list of data",
      details:
        "How had she been so wrong? All her instincts and intuition completely failed her for the first time in her life. She had so heavily relied on both when making decisions up until this moment and she felt a seismic shift take place in her self-confidence. If she could be so completely wrong about something so simple as this, how could she make decisions about really important things taking place in her life? She wasn't sure what she should do next.",
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
      details:
        "At that moment, she realized that she had created her current life. It wasn't the life she wanted, but she took responsibility for how it currently stood. Something clicked and she saw that every choice she made to this point in her life had led to where her life stood at this very moment even if she knew this wasn't where she wanted to be. She determined to choose to change it.",
    },
  ],
  done: [
    {
      id: 7,
      tags: [],
      title: "Build three colums",
      info: "Build three columns for todo, doing, and done",
      details:
        "Another option you have is choosing the number of syllables in the words you speak. You probably have never considered this option before, but you have it every time you open your mouth and speak. You make so many choices like this that you never even think about, but you have the choice with each one. What are you going to do with this knowledge?",
    },
  ],
};

export default data;
