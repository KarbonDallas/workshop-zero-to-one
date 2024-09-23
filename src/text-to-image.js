import { Livepeer } from "@livepeer/ai";

const livepeerAI = new Livepeer({
  httpBearer: "",
});

async function run() {
  const result = await livepeerAI.generate.textToImage({
    prompt:
      "A sentient paintbrush dipped in rainbow ink, transforming floating words into vivid images. Swirling text fragments morph into colorful objects, landscapes, and characters. Magical sparks fly as letters reshape into visual elements. A canvas of reality bends and shifts, blurring the line between language and imagery.",
    modelId: "black-forest-labs/FLUX.1-dev",
    width: 1024,
    height: 1024,
  });

  console.log(result.imageResponse?.images);
}

run();
