export type Config = {
  role: string;
  configId: string;
  description: string;
  image: string;
};

export const configs: Config[] = [
  {
    role: "friend",
    configId: "774af1f3-0029-4411-9256-d4fb29250f39",
    description:
      "A supportive friend for practicing casual chats or conflict resolution.",
    image: "./friend.png",
  },
  {
    role: "manager",
    configId: "7f1b581f-2735-4098-b222-75a7a304d540",
    description:
      "A stern and professional persona for negotiating workplace matters.",
    image: "./manager.png",
  },
  {
    role: "date",
    configId: "75975034-9795-4d16-be73-012ce6a83e59",
    description:
      "A friendly and engaging persona to simulate dating conversations.",
    image: "./date.png",
  },
];
