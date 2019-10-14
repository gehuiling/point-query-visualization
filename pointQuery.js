function pointQuery(dataset, timefrom, timeto, minlon, minlat, maxlon, maxlat) {
    var url = setUrl;
    var setBounds = minlon + "," + minlat + "," + maxlon + "," + maxlat;
    $.get(url + '/pointQuery', {
        bounds: setBounds,
        time_from: timefrom,
        time_to: timeto,
        datasetname: dataset,
    }, function (data, status) {
        var jsonObj = JSON.parse(data);
        // console.log(status);
        // console.log(data);
        var pointsToShow = [];
        for (let tmp in jsonObj.points) {
            pointsToShow.push(
                jsonObj.points[tmp].location
                    .replace("[", "")
                    .replace("]", "")
                    .split(",")
            );
        }
        // 聚合点
        clusterPoints(pointsToShow);
    });
}