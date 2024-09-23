import { Livepeer } from "@livepeer/ai";
import { openAsBlob } from "node:fs";

const livepeer = new Livepeer({
  httpBearer: "",
});

async function run() {
  const result = await livepeer.generate.upscale({
    image: await openAsBlob(process.cwd() + "/img/example-01.png"),
    prompt:
      "A colorful steampunk hot air balloon floating through a futuristic neon city at sunset, with glowing cyberpunk elements and intricate gears visible on the balloon's surface. Iridescent bubbles float around it.",
    modelId: "stabilityai/stable-diffusion-x4-upscaler",
  });

  console.log(result);
}

run();
