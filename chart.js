$(function(){
    var data = [
    ['uz-fa', 0],
    ['uz-tk', 1],
    ['uz-an', 2],
    ['uz-ng', 3],
    ['uz-ji', 4],
    ['uz-si', 5],
    ['uz-ta', 6],
    ['uz-bu', 7],
    ['uz-kh', 8],
    ['uz-qr', 9],
    ['uz-nw', 10],
    ['uz-sa', 11],
    ['uz-qa', 12],
    ['uz-su', 13]
];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/uz/uz-all'
    },
    title: {
        text: 'Ҳудудий бошқармалар'
    },
    colorAxis: {
        min: 0
    },
    navigation: {
        buttonOptions: {
        enabled: false
    }
    },
    series: [{
        data: data,
        name: 'Hududiy boshqarmalar',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        },
        events: {
            click: function (e) {
                // console.log(e.point['hc-key'])
                $.ajax({
                    url:'./js/cis.json',
                    type:'GET',
                    dataType:'JSON',
                    success: function(data){
                        $.each(data, function(index, element) {
                            if(e.point['hc-key'] == element.id){
                                var content =  $('#result-map').find('.modal-header').find('.tab-content').find('#menu_one');
                                $('.country-button').trigger('click');
                                $('#result-map').find('.modal-header').find('.country_name').text(element.name);
                                content.find('.organ span').html(element.name);
                                content.find('.phone span').html(element.phone);
                                content.find('.hotline span').html(element.hotline);
                                content.find('.fax span').html(element.fax);
                                content.find('.email span').html(element.email);
                                content.find('.address span').html(element.address);
                                content.find('.organ_link').attr("href", element.link);
                            }
                        });
                    }
                });

                $.ajax({
                    url:'./js/cis.json',
                    type:'GET',
                    dataType:'JSON',
                    success: function(data){
                        $.each(data, function(index, element) {
                            if(e.point['hc-key'] == element.id){
                                var content =  $('#result-map').find('.modal-header').find('.tab-content').find('#menu_two');
                                $('.country-button').trigger('click');
                                $('#result-map').find('.modal-header').find('.country_name').text(element.name);
                                content.find('.organ span').html(element.name);
                                content.find('.phone span').html(element.phone);
                                content.find('.hotline span').html(element.hotline);
                                content.find('.fax span').html(element.fax);
                                content.find('.email span').html(element.email);
                                content.find('.address span').html(element.address);
                                content.find('.organ_link').attr("href", element.link);
                            }
                        });
                    }
                });
            }
        }
    }]
});
});
