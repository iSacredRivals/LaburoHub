export default {
  async fetch(request) {
    const url = "https://raw.githubusercontent.com/iSacredRivals/LaburoHub/refs/heads/main/LaburoHubREWORKv2/67";
    const response = await fetch(url);
    const script = await response.text();
    return new Response(script, {
      headers: {
        "content-type": "text/plain;charset=UTF-8",
        "cache-control": "no-cache"
      }
    });
  }
};
