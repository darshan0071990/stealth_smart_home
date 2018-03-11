$(function () {
    function randomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    function randomBar(date, lastClose) {
        var open = randomNumber(15, 25);
        var close = randomNumber(open * 0.95, open * 1.05);
        return {
            t: date.valueOf(),
            y: close
        };
    }

    var dateFormat = 'MMMM DD YYYY';
    var date = moment('March 01 2018', dateFormat);
    var data = [randomBar(date, 30)];
    var labels = [date];
    while (data.length < 30) {
        date = date.clone().add(1, 'd');
        if (date.isoWeekday() <= 5) {
            data.push(randomBar(date, data[data.length - 1].y));
            labels.push(date);
        }
    }

    var ctx1= document.getElementById('chart1').getContext('2d');
    var ctx2 = document.getElementById('chart2').getContext('2d');
    var cfg = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Smart Heating Temperature',
                data: data,
                type: 'line',
                pointRadius: 0,
                fill: false,
                lineTension: 0,
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'time',
                    distribution: 'series',
                    ticks: {
                        source: 'labels'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Temperature'
                    }
                }]
            }
        }
    };

    var cfg2 = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Energy Consumption',
                data: data,
                type: 'line',
                pointRadius: 0,
                fill: false,
                lineTension: 0,
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'time',
                    distribution: 'series',
                    ticks: {
                        source: 'labels'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'kwhs'
                    }
                }]
            }
        }
    };
    var chart = new Chart(ctx1, cfg);
    var chart = new Chart(ctx2, cfg2);
});