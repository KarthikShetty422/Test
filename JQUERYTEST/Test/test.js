$(document).ready(function() {
    var jsonData;
    var table = $("<table />");
    var col = [];
    $.getJSON("test.json", function(result) {
        jsonData = result;
        jsonData.forEach(function(jsondataval, index, array) {
            var jsondataKeys = Object.keys(jsondataval);
            jsondataKeys.forEach(function(key, indexval, array) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            });
            tr = $(table[0].insertRow(-1));
            col.forEach(function(colval, ind, arr) {
                var tabCell = tr[0].insertCell(-1);
                $(tabCell).html(jsonData[index][col[ind]]);
            });
        });
        var divContainer = $('#showData');
        divContainer.append(table);
    });
    $('#submit').click(function(e) {
        var taskName = $('#taskName').val();
        var date = $('#date').val();
        var assignedTo = $('#assignedTo').val();
        if (!taskName) {
            $('#errorMessage').html('Please enter task name');
        } else if (!date) {
            $('#errorMessage').html('Please enter date');
        } else if (!assignedTo) {
            $('#errorMessage').html('Please enter assinged to');
        } else {
            $('#errorMessage').html('');
            var ele = $('.form-input');
            $('.form-input').each(function(ind) {
                ele[ind].value = '';
            });
            var row = table.append('<tr></tr>');
            var tabledata = "<tr><td>" + taskName + "</td><td>" + date + "</td><td>" + assignedTo + "</td></tr>";
            row.prepend(tabledata);
        }
    });
});