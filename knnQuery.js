function knnQuery(lng, lat, time_from, time_to, k, dataset) {
    var k_pts = new L.layerGroup();
    var url = setUrl;
    $.get(url + '/knnQuery', {
        lng: lng,
        lat: lat,
        time_from: time_from,
        time_to: time_to,
        k: k,
        datasetname: dataset,
    }, function (data, status) {
        var jsonObj = JSON.parse(data);

        var k_points = [];
        for (let tmp in jsonObj.points) {
            k_points.push(
                jsonObj.points[tmp].location
                    .replace("[", "")
                    .replace("]", "")
                    .split(",")
            );
        }

        for (var i = 0; i < k_points.length; i++) {
            var a = k_points[i];

            (L.circle(L.latLng(a[0], a[1]), 3, {
                color: '#f00',
                fillColor: '#f00',
                fillOpacity: 1
            })).addTo(k_pts);
        }


    });
    return k_pts;
    // k_pts.addTo(leafletMap);
}