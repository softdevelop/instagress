$(document).ready(function() {
    var add = $('.favorite_links .add');
    var remove = $('.favorite_links .remove');
    add.live("click", (function(e) {
        e.preventDefault();
        var $this = $(this);
        var url = $this.attr('href');
        var value = $this.attr('data-value');
        $.ajax({
            url: url,
            type: 'post',
            data: {alias: value},
            success: function(data)
            {
                if (data)
                {
                    $this.hide();
                    $this.next().show();
                    $('.favorites_count').empty().html("(" + data + ")");
                }
                else
                {
                    alert('Error');
                }
            }

        });

    }));

    remove.live("click", function(e) {
        e.preventDefault();
        var $this = $(this);
        var url = $this.attr('href');
        var value = $this.attr('data-value');
        var inside = $this.attr('data-inside');

        $.ajax({
            url: url,
            type: 'post',
            data: {value: value, inside: inside},
            success: function(data)
            {
                if (!isNaN(data))
                {
                    $this.hide();
                    $this.prev().show();
                    $('.favorites_count').empty().html("(" + data + ")");
                }
                else
                {
                    var favorites_count = parseInt(countShortlist) - 1;
                    $('.favorites_count').empty().html("(" + favorites_count + ")");
                    $('.favorites_link').remove();
                    $('#favorites').remove();
                    $('.favorites.show #content').append(data);

                }
            },
            error: function()
            {

            }


        });

    });
});