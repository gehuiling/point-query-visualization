**第一部分**：Ajax请求后台数据接口，根据设定的时间范围，框选（或手动设置）的空间范围，请求到时空范围内的轨迹点；基于leaflet的markercluster插件，实现大数据量轨迹点快速渲染。

- 轨迹点查询、聚合渲染

<img src="./img/pointCluster.gif" style="display:block;margin:0 auto;">



**第二部分**：根据设定的KNN邻近查询参数k值，鼠标点击地图任何地方，Ajax请求后台数据接口，返回鼠标单击处的所有邻近轨迹点，直接渲染在地图上

- 点的KNN邻近查询

<img src="./img/knnQuery.gif" style="display:block;margin:0 auto;">