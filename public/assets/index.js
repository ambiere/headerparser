document.addEventListener('DOMContentLoaded', (e) => {
  const resourceAnchor = document.querySelector('#resource-link')
  const endpoints = document.querySelector('#endpoints')
  if (resourceAnchor) {
    window
      .fetch('version')
      .then((res) => res.json())
      .then((version) => {
        const date = new Date()
        resourceAnchor.setAttribute('href', `datestamp/${date}`)
        resourceAnchor.innerHTML = `<p>/datestamp/${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
        endpoints.innerHTML = `   
            <p><span>GET /${getEndpointSegment(version)}/:date_string</span></p>
            <p><span>...</span></p>`
      })

    function getEndpointSegment (obj) {
      if (obj.version !== undefined) {
        return `v${obj.version}/api/datestamp`
      }
    }
  }
})
