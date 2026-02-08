export const createEmptyIdea = () => ({
  id: crypto.randomUUID(),
  title: "",
  description: "",
  prd: {
    problem: "",
    targetUsers: "",
    features: [],
    userFlow: "",
    techPrefs: "",
  },
  status: "draft", // draft | ready | built
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});
