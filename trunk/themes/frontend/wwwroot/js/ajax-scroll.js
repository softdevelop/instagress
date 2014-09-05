var isLoading = false;
var isEnd = false;
var page = 1;

$(window).scroll(function(event) {
    if (!isLoading && !isEnd)
    {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100)
        {
            loadData();
        }
    }
});

function loadData()
{
    isLoading = true;
    $("#loader").show();

    $.ajax({
        url: '/',
        dataType: 'json',
        data: {ajaxpage: page},
        success: function(data)
        {
            isLoading = false;
            $("#loader").hide();

            if (data.status == 'END')
            {
                isEnd = true;
            }

            page++;
            $(".endless_listings .container .content").append(data.html);
        },
        error: function()
        {
            isEnd = true;
        }
    });
}