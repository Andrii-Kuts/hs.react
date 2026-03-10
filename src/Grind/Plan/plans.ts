import type { PlanStep } from "./types";

export const getPlanSteps: () => Promise<PlanStep[]> = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    {
      title: "Day 1",
      contest: {
        title: "IOI 2019 Day 1",
        link: "https://oj.uz/problems/source/ioi2019day1",
        problems: [
          {
            name: "shoes",
            title: "Arranging Shoes",
            link: "https://oj.uz/problem/view/IOI19_shoes",
            solvingStatus: {
              points: 100,
              submissions: 2,
            },
            upsolvingStatus: {
              points: 100,
              submissions: 2,
            },
          },
          {
            name: "split",
            title: "Split the Attractions",
            link: "https://oj.uz/problem/view/IOI19_split",
            solvingStatus: {
              points: 30,
              submissions: 1,
            },
            upsolvingStatus: {
              points: 30,
              submissions: 1,
            },
          },
          {
            name: "rect",
            title: "Rectangles",
            status: "upsolved",
            link: "https://oj.uz/problem/view/IOI19_rect",
            solvingStatus: {
              points: 50,
              submissions: 3,
            },
            upsolvingStatus: {
              points: 100,
              submissions: 4,
            },
          },
        ],
        attachmentsContainer: {
          attachments: [
            {
              type: "file",
              name: "shoes.cpp",
              link: "path/to/shoes.cpp",
            },
            {
              type: "file",
              name: "split.cpp",
              link: "path/to/split.cpp",
            },
            {
              type: "file",
              name: "split-full.cpp",
              link: "path/to/split-full.cpp",
            },
          ],
        },
      },
    },
    {
      title: "Day 2",
      contest: {
        title: "IOI 2019 Day 2",
        link: "https://oj.uz/problems/source/ioi2019day2",
        problems: [],
      },
    },
    {
      title: "Day 3",
      contest: {
        title: "IOI 2020 Day 1",
        link: "https://oj.uz/problems/source/ioi2020day1",
        problems: [],
      },
    },
    {
      title: "Day 4",
      contest: {
        title: "IOI 2020 Day 2",
        link: "https://oj.uz/problems/source/ioi2020day2",
        problems: [],
      },
    },
  ];
};
