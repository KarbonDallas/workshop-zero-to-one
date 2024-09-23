import { Livepeer } from "@livepeer/ai";
import { openAsBlob } from "node:fs";

const livepeer = new Livepeer({
  httpBearer: "",
});

async function run() {
  const result = await livepeer.generate.imageToImage({
    image: await openAsBlob(process.cwd() + "/img/example-01.png"),
    prompt: "Convert this image to a painting of a forest at night.",
    modelId: "timbrooks/instruct-pix2pix",
  });

  console.log(result.imageResponse?.images);
}

run();
