document.addEventListener("DOMContentLoaded", (e) => {
  const resourceAnchor = document.querySelector("#resource-link");
  const endpoints = document.querySelector("#endpoints");
  if (resourceAnchor) {
    window
      .fetch("version")
      .then((res) => res.json())
      .then((version) => {
        const date = new Date();
        resourceAnchor.setAttribute("href", `headerparser/whoami`);
        resourceAnchor.innerHTML = `<p>/headerparser/whoami</p>`;
        endpoints.innerHTML = `   
            <p><span>GET /${getEndpointSegment(version)}/whoami</span></p>
            <p><span>...</span></p>`;
      });

    function getEndpointSegment(obj) {
      if (obj.version !== undefined) {
        return `v${obj.version}/api/headerparser`;
      }
    }
  }
});
