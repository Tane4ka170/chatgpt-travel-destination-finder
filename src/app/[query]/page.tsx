const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function SuggestListPage(props: {
  params: { query: string };
}) {
const response = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{ role: "user", content: textPrompt }],
  temperature: 0,
  max_tokens: 2000,
});


  return <div>No data</div>;
}
