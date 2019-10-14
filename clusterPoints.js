// 点聚合
function clusterPoints(pointsresult) {
  var progress = document.getElementById('progress');
  var progressBar = document.getElementById('progress-bar');

  function updateProgressBar(processed, total, elapsed, layersArray) {
    if (elapsed > 1000) {
      // if it takes more than a second to load, display the progress bar:
      progress.style.display = 'block';
      progressBar.style.width = Math.round(processed / total * 100) + '%';
    }

    if (processed === total) {
      // all markers processed - hide the progress bar:
      progress.style.display = 'none';
    }
  }

  var markers = L.markerClusterGroup({ disableClusteringAtZoom: 17, spiderfyOnMaxZoom: false, showCoverageOnHover: false, chunkedLoading: true, chunkProgress: updateProgressBar, animate: true, });

  var markerList = [];
  for (let i = 0; i < pointsresult.length; i++) {
    var a = pointsresult[i];

    var marker = L.circle(L.latLng(a[0], a[1]), 2, {
      color: '#ff0',
      fillColor: '#ff0',
      fillOpacity: 1
    })

    markerList.push(marker);
  }
  markers.addLayers(markerList);
  leafletMap.addLayer(markers);
}