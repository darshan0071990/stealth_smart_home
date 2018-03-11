$(function () {
    $(".switch_btn").change(function(){
        if(this.checked){
            var returnval = confirm("Are you sure you want to connect the device?");
            $(this).prop("checked", returnval);
        }
        else{
            var returnval = confirm("Are you sure you want to disconnect the device?");
            $(this).prop("checked", returnval);
        }
    });
});