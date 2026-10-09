export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Si entran al enlace normal sin la ruta secreta, no muestra nada
    if (url.pathname !== "/script") {
      return new Response("Acceso no autorizado", {
        status: 403,
        headers: { "content-type": "text/plain;charset=UTF-8" }
      });
    }

    // Solo si tiene "/script" al final entrega el archivo:
    const githubUrl = "https://raw.githubusercontent.com/iSacredRivals/LaburoHub/refs/heads/main/LaburoHubREWORKv2/67";
    const response = await fetch(githubUrl);
    const script = await response.text();

    return new Response(script, {
      headers: {
        "content-type": "text/plain;charset=UTF-8",
        "cache-control": "no-cache"
      }
    });
  }
};
