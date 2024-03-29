$(document).ready(function() {
    $(":submit").click(function (event) {
            event.preventDefault();
            var formId = $(event.target).closest("form").attr("id");
            var resource = $(event.target).closest("form").attr("action");
            sendFormData(formId, resource);
        }
    );
});

function sendFormData(formId, resource) {
    $.ajax({
        url:     resource,
        type:     "POST",
        dataType: "html",
        data: $("#" + formId).serialize(),
        success: function(response) {
            document.body.innerHTML = response;
        },
        error: function(response) {
            console.log("The error has occurred during sending form data")
        }
    });
}

/*function get(formId, resource) {
    $.ajax({
        type: "GET",
        url: resource,
        dataType: "json",
        success: function (data) {
            $.each(data.aaData,function(i,data)
            {
                alert(data.value+":"+data.text);
                var div_data="<option value="+data.value+">"+data.text+"</option>";
                alert(div_data);
                $(div_data).appendTo('#ch_user1');
            });
        }
    });

}*/

