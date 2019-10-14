function changeDataType() {
    var url = setUrl;
    var datatype = $("#dataType input:radio:checked").val();
    $.get(
        url + "/datasetQuery",
        {
            dataType: datatype
        },
        function (data, status) {
            var datasets = data.split(',');
            var htmlContent = '';
            for (let i = 0; i < datasets.length; i++) {
                let line = '<li><label><input name="datasetName" type="radio" value=' + datasets[i] + ' style="vertical-align: -5px;"/>' + datasets[i] + '</label></li>';
                htmlContent += line;
            }
            $('#dataNames').attr('class', datatype).html(htmlContent);
        }
    );
}