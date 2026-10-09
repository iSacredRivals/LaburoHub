export default {
  async fetch(request) {
    const userAgent = (request.headers.get("user-agent") || "").toLowerCase();

   
    if (userAgent.includes("mozilla") || userAgent.includes("chrome") || userAgent.includes("safari") || userAgent.includes("edg")) {
      return new Response("Just go home nigga, skidyyyyyyy theres nothing here either lol", {
        headers: { "content-type": "text/plain;charset=UTF-8" }
      });
    }

    
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
