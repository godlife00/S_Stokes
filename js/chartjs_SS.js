$(document).ready(function () {

    // ***************************** //
    // **********  종목추천 ********* //
    // ***************************** //
    // 서브 - 종목추천 메인 line 작은 차트
    if ($('#containerS1_1').length) {
        Highcharts.chart('containerS1_1', {
            chart: {
                type: 'line',
                renderTo: 'containerS1_1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                height: 88,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#877edf"],

            title: {
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,
                labels: {
                    enabled: false
                }
            },

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '',
                data: [
                    3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
                    6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
                    9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
                    10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
                    10.1
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    if ($('#containerS1_2').length) {
        Highcharts.chart('containerS1_2', {
            chart: {
                type: 'line',
                renderTo: 'containerS1_2',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                height: 88,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#877edf"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                enabled: false,
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,
                labels: {
                    enabled: false
                }
            },

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '',
                data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175, 43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    if ($('#containerS1_3').length) {
        Highcharts.chart('containerS1_3', {
            chart: {
                type: 'line',
                renderTo: 'containerS1_3',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                height: 88,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#877edf"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                enabled: false,
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,
                labels: {
                    enabled: false
                }
            },

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '',
                data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175, 43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    // 서브 - 종목추천 투자포인트, 종목진단 line 차트    
    if ($('#containerArea_1').length) {
        Highcharts.chart('containerArea_1', {

            chart: {
                type: 'line',
                renderTo: 'containerArea_1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#877edf"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f} 달러</b><br/>'
            },

            xAxis: [{
                labels: {
                    enabled: false
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: '#333',
                gridLineDashStyle: 'Dot',
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '',
                data: [
                    3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
                    6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
                    9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
                    10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
                    10.1
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    },
                },
            },
        });
    }
    // 서브 - 종목추천 투자포인트, 종목진단 spider 차트    
    if ($('#containerSpider_1').length) {

        Highcharts.chart('containerSpider_1', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'containerSpider_1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 30,
                marginRight: 30,
            },

            title: {
                text: ''
            },

            colors: ["#877edf"],

            tooltip: {
                shared: true,
                useHTML: true,
                formatter: function () {
                    var imgOne = '<img src = "../img/startol_one.png" height="10" width="10"/>'  /* 1점 */
                    var imgZero = '<img src = "../img/startol_zero.png" height="10" width="10"/>'  /* 0점 */
                    var imgHalf = '<img src = "../img/startol_half.png" height="10" width="10"/>'  /* 0.5점 */
                    var s = '<b>' + this.x + '</b>';
                    $.each(this.points, function (i, point) {
                        if (point.y == '5') {
                            s += imgOne + imgOne + imgOne + imgOne + imgOne + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '4.5') {
                            s += imgOne + imgOne + imgOne + imgOne + imgHalf + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '4') {
                            s += imgOne + imgOne + imgOne + imgOne + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '3.5') {
                            s += imgOne + imgOne + imgOne + imgHalf + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '3') {
                            s += imgOne + imgOne + imgOne + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '2.5') {
                            s += imgOne + imgOne + imgHalf + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '2') {
                            s += imgOne + imgOne + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '1.5') {
                            s += imgOne + imgHalf + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '1') {
                            s += imgOne + imgZero + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '0.5') {
                            s += imgHalf + imgZero + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else {
                            s += imgZero + imgZero + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                    });
                    return s;
                },
                shared: true
            },

            pane: {
                size: '80%',
                center: ['50%', '50%'],
            },

            xAxis: {
                categories: ['배당매력', '사업<br>독점력', '현금창출력', '수익성장성', '재무<br>안전성'],
                tickmarkPlacement: 'on',
                lineWidth: 0,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '13px'
                    }
                }

            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                minorGridLineColor: '#E0E0E0',
                tickInterval: 1.07,
                min: 0,
                max: 5,
                labels: {
                    enabled: false
                }
            },

            exporting: {
                enabled: false
            },

            credits: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '투자매력도',
                data: [4, 2.5, 5, 0, 3],
                pointPlacement: 'on'
            }],

            plotOptions: {
                series: {
                    lineWidth: 1,
                    fillOpacity: 0.3
                }
            },
        });
    }

    // ***************************** //
    // **********  종목분석 ********* //
    // ***************************** //
    // 서브 - 종목분석 메인 line 차트    
    if ($('#containerArea1_1').length) {
        Highcharts.chart('containerArea1_1', {
            chart: {
                type: 'line',
                renderTo: 'containerArea1_1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                // height: 88,          
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#877edf"],

            title: {
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,
                labels: {
                    enabled: false
                }
            },

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '',
                data: [
                    3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
                    6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
                    9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
                    10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
                    10.1
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    if ($('#containerArea1_2').length) {
        Highcharts.chart('containerArea1_2', {
            chart: {
                type: 'line',
                renderTo: 'containerArea1_2',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                // height: 88,          
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#877edf"],

            title: {
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,
                labels: {
                    enabled: false
                }
            },

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '',
                data: [
                    3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
                    6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
                    9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
                    10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
                    10.1
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    if ($('#containerArea1_3').length) {
        Highcharts.chart('containerArea1_3', {
            chart: {
                type: 'line',
                renderTo: 'containerArea1_3',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                height: 88,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#877edf"],

            title: {
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,
                labels: {
                    enabled: false
                }
            },

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '',
                data: [
                    3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
                    6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
                    9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
                    10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
                    10.1
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    if ($('#containerArea1_4').length) {
        Highcharts.chart('containerArea1_4', {
            chart: {
                type: 'line',
                renderTo: 'containerArea1_4',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                height: 88,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#877edf"],

            title: {
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,
                labels: {
                    enabled: false
                }
            },

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '',
                data: [
                    3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
                    6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
                    9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
                    10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
                    10.1
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    if ($('#containerArea1_5').length) {
        Highcharts.chart('containerArea1_5', {
            chart: {
                type: 'line',
                renderTo: 'containerArea1_5',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                height: 88,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#877edf"],

            title: {
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                tickColor: null,
                labels: {
                    enabled: false
                }
            },

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                showFirstLabel: false,
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '',
                data: [
                    3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
                    6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
                    9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
                    10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
                    10.1
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    // 서브 - 종목분석 뷰 line 차트    
    if ($('#chart_subanalysis1').length) {
        Highcharts.chart('chart_subanalysis1', {

            chart: {
                type: 'line',
                renderTo: 'chart_subanalysis1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#877edf"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f} 달러</b><br/>'
            },

            xAxis: [{
                labels: {
                    enabled: false
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: '#333',
                gridLineDashStyle: 'Dot',
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '',
                data: [
                    3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
                    6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
                    9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
                    10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
                    10.1
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    },
                },
            },
        });
    }

    // ***************************** //
    // **********  검색 ********* //
    // ***************************** //
    // 검색 - 종목진단 - 투자매력 spider 차트    
    if ($('#containercharm1_1').length) {

        Highcharts.chart('containercharm1_1', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'containercharm1_1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                marginTop: 30,
                marginBottom: 30,
                marginLeft: 30,
                marginRight: 30,
            },

            title: {
                text: ''
            },

            colors: ["#877edf"],

            tooltip: {
                shared: true,
                useHTML: true,
                formatter: function () {
                    var imgOne = '<img src = "../img/startol_one.png" height="10" width="10"/>'  /* 1점 */
                    var imgZero = '<img src = "../img/startol_zero.png" height="10" width="10"/>'  /* 0점 */
                    var imgHalf = '<img src = "../img/startol_half.png" height="10" width="10"/>'  /* 0.5점 */
                    var s = '<b>' + this.x + '</b>';
                    $.each(this.points, function (i, point) {
                        if (point.y == '5') {
                            s += imgOne + imgOne + imgOne + imgOne + imgOne + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '4.5') {
                            s += imgOne + imgOne + imgOne + imgOne + imgHalf + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '4') {
                            s += imgOne + imgOne + imgOne + imgOne + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '3.5') {
                            s += imgOne + imgOne + imgOne + imgHalf + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '3') {
                            s += imgOne + imgOne + imgOne + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '2.5') {
                            s += imgOne + imgOne + imgHalf + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '2') {
                            s += imgOne + imgOne + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '1.5') {
                            s += imgOne + imgHalf + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '1') {
                            s += imgOne + imgZero + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '0.5') {
                            s += imgHalf + imgZero + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else {
                            s += imgZero + imgZero + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                    });
                    return s;
                },
                shared: true
            },

            pane: {
                size: '80%',
                center: ['50%', '50%'],
            },

            xAxis: {
                categories: ['수익성', '재무<br>안전성', '현금창출력', '사업동점력', '미래<br>성장성'],
                tickmarkPlacement: 'on',
                lineWidth: 0,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '13px'
                    }
                }

            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                minorGridLineColor: '#E0E0E0',
                tickInterval: 1.07,
                min: 0,
                max: 5,
                labels: {
                    enabled: false
                }
            },

            exporting: {
                enabled: false
            },

            credits: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '투자매력도',
                data: [5, 5, 5, 5, 5],
                pointPlacement: 'on',

            }],

            plotOptions: {
                series: {
                    lineWidth: 1,
                    fillOpacity: 0.3,
                }
            },
        });
    }
    // 검색 - 종목진단 - 투자매력탭 column 차트
    if ($('#containeralloca_star1_1_1').length) {
        Highcharts.chart('containeralloca_star1_1_1', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star1_1_1',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },                
                marginTop: 20,
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"], //종목, 업종평균, 전체평균

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['매출액성장률(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca_star1_1_2').length) {
        Highcharts.chart('containeralloca_star1_1_2', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star1_1_2',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },                
                marginTop: 20,
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"], //종목, 업종평균, 전체평균

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['영업이익성장률(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca_star1_1_3').length) {
        Highcharts.chart('containeralloca_star1_1_3', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star1_1_3',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },                
                marginTop: 20,
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"], //종목, 업종평균, 전체평균

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['미래매출액성장률(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca_star1_1_4').length) {
        Highcharts.chart('containeralloca_star1_1_4', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star1_1_4',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },                
                marginTop: 20,
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"], //종목, 업종평균, 전체평균

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['미래영업익성장률(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }

    if ($('#containeralloca_star2_1_1').length) {
        Highcharts.chart('containeralloca_star2_1_1', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star2_1_1',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },                
                marginTop: 20,
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"], //종목, 업종평균, 전체평균

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}억원</b><br/>'
            },

            xAxis: [{
                categories: ['5년 평균ROE(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca_star2_1_2').length) {
        Highcharts.chart('containeralloca_star2_1_2', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star2_1_2',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },                
                marginTop: 20,
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"], //종목, 업종평균, 전체평균

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['영업이익률(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca_star2_1_3').length) {
        Highcharts.chart('containeralloca_star2_1_3', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star2_1_3',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },                
                marginTop: 20,
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"], //종목, 업종평균, 전체평균

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['매출점유순위비율(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca_star2_1_4').length) {
        Highcharts.chart('containeralloca_star2_1_4', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star2_1_4',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },                
                marginTop: 20,
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"], //종목, 업종평균, 전체평균

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['장기매출성장률(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }

    if ($('#containeralloca_star3_1_1').length) {
        Highcharts.chart('containeralloca_star3_1_1', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star3_1_1',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },                
                marginTop: 20,
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"], //종목, 업종평균, 전체평균

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['부채비율(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca_star3_1_2').length) {
        Highcharts.chart('containeralloca_star3_1_2', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star3_1_2',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },                
                marginTop: 20,
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"], //종목, 업종평균, 전체평균

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['유동비율(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca_star3_1_3').length) {
        Highcharts.chart('containeralloca_star3_1_3', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star3_1_3',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },                
                marginTop: 20,
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"], //종목, 업종평균, 전체평균

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['이자보상배수(배)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca_star3_1_4').length) {
        Highcharts.chart('containeralloca_star3_1_4', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star3_1_4',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },                
                marginTop: 20,
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"], //종목, 업종평균, 전체평균

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['차입금비중(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca_star3_1_5').length) {
        Highcharts.chart('containeralloca_star3_1_5', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star3_1_5',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },                
                marginTop: 20,
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"], //종목, 업종평균, 전체평균

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['금융비용(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }

    if ($('#containeralloca_star4_1_1').length) {
        Highcharts.chart('containeralloca_star4_1_1', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star4_1_1',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },                
                marginTop: 20,
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"], //종목, 업종평균, 전체평균

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['영업이익률(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca_star4_1_2').length) {
        Highcharts.chart('containeralloca_star4_1_2', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star4_1_2',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },                
                marginTop: 20,
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"], //종목, 업종평균, 전체평균

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['순이익률(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca_star4_1_3').length) {
        Highcharts.chart('containeralloca_star4_1_3', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star4_1_3',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },                
                marginTop: 20,
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"], //종목, 업종평균, 전체평균

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['ROE(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca_star4_1_4').length) {
        Highcharts.chart('containeralloca_star4_1_4', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star4_1_4',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },                
                marginTop: 20,
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"], //종목, 업종평균, 전체평균

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['ROA(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca_star4_1_5').length) {
        Highcharts.chart('containeralloca_star4_1_5', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star4_1_5',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },                
                marginTop: 20,
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"], //종목, 업종평균, 전체평균

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['ROIC(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }

    if ($('#containeralloca_star5_1_1').length) {
        Highcharts.chart('containeralloca_star5_1_1', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star5_1_1',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },                
                marginTop: 20,
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"], //종목, 업종평균, 전체평균

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['잉여현금비율(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca_star5_1_2').length) {
        Highcharts.chart('containeralloca_star5_1_2', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star5_1_2',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },                
                marginTop: 20,
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"], //종목, 업종평균, 전체평균

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['단기현금비율(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca_star5_1_3').length) {
        Highcharts.chart('containeralloca_star5_1_3', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star5_1_3',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },                
                marginTop: 20,
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"], //종목, 업종평균, 전체평균

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['현금흐름분석'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }


    

    // 검색 - 종목진단 - 투자매력탭 경쟁사 투자매력도 spider 차트
    if ($('#chart_spider_mini_01').length) {

        Highcharts.chart('chart_spider_mini_01', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'chart_spider_mini_01',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#877edf"],

            title: {
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            pane: {
                size: '100%'
            },

            xAxis: {
                style: {
                    fontSize: '0',
                },
                categories: ['', '', '', '', ''],
                tickmarkPlacement: 'on',
                lineWidth: 0,
            },

            yAxis: {
                style: {
                    fontSize: '0',
                },
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 1,
                max: 5,
                labels: {
                    enabled: false
                }
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false
            },

            credits: {
                enabled: false
            },

            series: [{
                name: '',
                data: [1.5, 1.5, 2, 3, 5],
                pointPlacement: 'on',

            }],

            plotOptions: {
                series: {
                    enableMouseTracking: false,
                    lineWidth: 1,
                    fillOpacity: 0.3,
                    marker: {
                        enabled: false,
                    }
                }
            },

        })
    }
    if ($('#chart_spider_mini_02').length) {

        Highcharts.chart('chart_spider_mini_02', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'chart_spider_mini_02',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#877edf"],

            title: {
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            pane: {
                size: '100%'
            },

            xAxis: {
                style: {
                    fontSize: '0',
                },
                categories: ['', '', '', '', ''],
                tickmarkPlacement: 'on',
                lineWidth: 0,
            },

            yAxis: {
                style: {
                    fontSize: '0',
                },
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 1,
                max: 5,
                labels: {
                    enabled: false
                }
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false
            },

            credits: {
                enabled: false
            },

            series: [{
                name: '',
                data: [1.5, 1.5, 2, 3, 5],
                pointPlacement: 'on',

            }],

            plotOptions: {
                series: {
                    enableMouseTracking: false,
                    lineWidth: 1,
                    fillOpacity: 0.3,
                    marker: {
                        enabled: false,
                    }
                }
            },

        })
    }
    if ($('#chart_spider_mini_03').length) {

        Highcharts.chart('chart_spider_mini_03', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'chart_spider_mini_03',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#877edf"],

            title: {
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            pane: {
                size: '100%'
            },

            xAxis: {
                style: {
                    fontSize: '0',
                },
                categories: ['', '', '', '', ''],
                tickmarkPlacement: 'on',
                lineWidth: 0,
            },

            yAxis: {
                style: {
                    fontSize: '0',
                },
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 1,
                max: 5,
                labels: {
                    enabled: false
                }
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false
            },

            credits: {
                enabled: false
            },

            series: [{
                name: '',
                data: [1.5, 1.5, 2, 3, 5],
                pointPlacement: 'on',

            }],

            plotOptions: {
                series: {
                    enableMouseTracking: false,
                    lineWidth: 1,
                    fillOpacity: 0.3,
                    marker: {
                        enabled: false,
                    }
                }
            },

        })
    }

    if ($('#containersummary1').length) {
        Highcharts.chart('containersummary1', {

            chart: {
                type: 'line',
                renderTo: 'containersummary1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#877edf"],
            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f} 달러</b><br/>'
            },

            xAxis: [{
                labels: {
                    enabled: false
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: '#333',
                gridLineDashStyle: 'Dot',
                labels: {
                    enabled: false
                }
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '',
                data: [
                    3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
                    6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
                    9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
                    10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
                    10.1
                ]
            }],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    },
                },
            },
        });
    }

    // 검색 - 종목진단 - 기업개요탭 재무제표 column 차트
    if ($('#containerfinancials1_1').length) {
        Highcharts.chart('containerfinancials1_1', {
            chart: {
                type: 'column',
                renderTo: 'containerfinancials1_1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#e57828", "#fcc983", "#ccd1d5"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.3f}억원</b><br/>'
            },

            xAxis: [{
                categories: ['2017', '2018', '2019'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: ''
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '매출액',
                data: [97.988, 45.988, 75.988]
            }, {
                name: '영업이익',
                data: [85.988, 24.988, 42.988]
            }, {
                name: '순이익',
                data: [64.988, 34.988, 24.988]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containerfinancials1_2').length) {
        Highcharts.chart('containerfinancials1_2', {
            chart: {
                type: 'column',
                renderTo: 'containerfinancials1_2',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#d3d3d3"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.3f}억원</b><br/>'
            },

            xAxis: [{
                categories: ['2017', '2018', '2019'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: ''
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '자산총계',
                data: [97.88, 45.88, 75.88]
            }, {
                name: '부채총계',
                data: [85.88, 24.88, 42.88]
            }, {
                name: '자본총계',
                data: [64.88, 34.88, 24.88]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containerfinancials1_3').length) {
        Highcharts.chart('containerfinancials1_3', {
            chart: {
                type: 'column',
                renderTo: 'containerfinancials1_3',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#d3d3d3"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.3f}억원</b><br/>'
            },

            xAxis: [{
                categories: ['2017', '2018', '2019'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: ''
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '영업활동',
                data: [97.88, 45.88, 75.88]
            }, {
                name: '투자활동',
                data: [85.88, 24.88, 42.88]
            }, {
                name: '재무활동',
                data: [64.88, 34.88, 24.88]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containerfinancials2_1').length) {
        Highcharts.chart('containerfinancials2_1', {
            chart: {
                type: 'column',
                renderTo: 'containerfinancials2_1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#d3d3d3"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['2017', '2018', '2019'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: ''
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '매출액',
                data: [97, 45, 75]
            }, {
                name: '영업이익',
                data: [85, 24, 42]
            }, {
                name: '순이익',
                data: [64, 34, 24]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containerfinancials2_2').length) {
        Highcharts.chart('containerfinancials2_2', {
            chart: {
                type: 'column',
                renderTo: 'containerfinancials2_2',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#d3d3d3"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['2017', '2018', '2019'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: ''
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '매출액',
                data: [97, 45, 75]
            }, {
                name: '영업이익',
                data: [85, 24, 42]
            }, {
                name: '순이익',
                data: [64, 34, 24]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containerfinancials2_3').length) {
        Highcharts.chart('containerfinancials2_3', {
            chart: {
                type: 'column',
                renderTo: 'containerfinancials2_3',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#d3d3d3"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['2017', '2018', '2019'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: ''
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '매출액',
                data: [97, 45, 75]
            }, {
                name: '영업이익',
                data: [85, 24, 42]
            }, {
                name: '순이익',
                data: [64, 34, 24]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }

    // 검색 - 재무 - 재무차트탭 15개 BIC차트
    //01. 매출액과이익
    if ($('#chart_BICchart01').length) {
        Highcharts.chart('chart_BICchart01', {
            chart: {
                type: 'column',
                zoomType: 'xy',
                renderTo: 'chart_BICchart01',
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 30,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#C4C4C4 ", "#e57828", "#fcc983"],//매출액, 영업이익, 지배지분순이익

            title: {
                text: null,
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 억원</b><br/>',
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true,
                labels: {
                    staggerLines: 2
                }
            }],

            yAxis: [{ // 왼쪽 y축
                title: {
                    text: null,
                },
                labels: {
                    style: {
                        color: ["#C4C4C4"],
                    },
                },
            }, { // 오른쪽 y축
                title: {
                    text: null,
                },
                labels: {
                    style: {
                        color: ["#e57828"],
                    },
                },
                opposite: true
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
                floating: true,
            },

            series: [{
                name: '매출액',
                type: 'column',
                data: [150, 126, 129, 234, 228, 121, 150, 126, 129, 234, 228, 121],

            }, {
                name: '영업이익',
                type: 'line',
                yAxis: 1,
                data: [49, 71.5, 20.4, 92, 44.0, 76.0, 49, 71.5, 20.4, 92, 44.0, 76.0],

            }, {
                name: '지배지분순이익',
                type: 'line',
                yAxis: 1,
                data: [19.9, 71.5, 106.4, 29.2, 14.0, 76.0, 19.9, 71.5, 106.4, 29.2, 14.0, 76.0],

            }],

            lang: {
                noData: "해당 데이터가 없습니다.<br> 데이터 선택 기간을 변경해 보세요.",
            },

            noData: {
                style: {
                    fontWeight: 'nomal',
                    fontSize: '1rem',
                    color: '#8380A0',
                    align: 'left'
                }
            },

            dataLabels: {
                enabled: false,
            },

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //02. 이익률
    if ($('#chart_BICchart02').length) {
        Highcharts.chart('chart_BICchart02', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart02',
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 20,
                marginBottom: 70,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#e57828 ", "#fcc983"], //영업이익률, 순이익률

            title: {
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true,
                offset: 10,
            }],

            yAxis: {
                labels: {
                    format: '{value} %',
                    style: {
                        color: ["#e57828"],
                    },
                },
                title: {
                    text: null,
                },
                
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                type: 'line',
                data: [294, 71, 106, 429, 144.456, 656],
                name: '영업이익률',
            }, {
                type: 'line',
                data: [0, 0, 0, 0, 0, 0, 0],
                name: '순이익률',
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //03. 부채비율과 유동비율    
    if ($('#chart_BICchart03').length) {
        Highcharts.chart('chart_BICchart03', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart03',
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 20,
                marginBottom: 70,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#e57828 ", "#fcc983"],//부채비율, 유동비율

            title: {
                text: null,
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: [{ // 왼쪽 y축
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}</b><br/> %',
                    style: {
                        color: ["#e57828"],
                    }
                },
            }, { // 오른쪽 y축
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}</b><br/> %',
                    style: {
                        color: ["#fcc983"],
                    }
                },
                opposite: true
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '부채비율',
                data: [42, 52, 57, 69, 97, 11]
            }, {
                name: '유동비율',
                yAxis: 1,
                data: [16, 64, 42, 51, 30, 82]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //04. 영업이익과 이자비용
    if ($('#chart_BICchart04').length) {
        Highcharts.chart('chart_BICchart04', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart04',
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 20,
                marginBottom: 70,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#e57828 ", "#fcc983"],//영업이익, 이자비용

            title: {
                text: null,
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 억원</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: [{ // 왼쪽 y축
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}</b><br/> 억원',
                    style: {
                        color: ["#e57828"],
                    }
                },
            }, { // 오른쪽 y축
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}</b><br/> 억원',
                    style: {
                        color: ["#fcc983"],
                    }
                },
                opposite: true
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '영업이익',
                data: [42, 52, 57, 69, 97, 11]
            }, {
                name: '이자비용',
                yAxis: 1,
                data: [16, 64, 42, 51, 30, 82]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //05. 주당배당금과 배당률
    if ($('#chart_BICchart05').length) {
        Highcharts.chart('chart_BICchart05', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart05',
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 20,
                marginBottom: 70,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#C4C4C4", "#e57828"],//주당배당금, 배당수익률

            title: {
                text: null,
            },

            tooltip: {
                shared: true,
                // pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: [{ // 왼쪽 y축                
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}</b><br/> 원',
                    style: {
                        color: ["#C4C4C4"],
                    }
                },

            }, { // 오른쪽 y축
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}</b><br/> %',
                    style: {
                        color: ["#e57828"],
                    }
                },
                opposite: true
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주당배당금',
                type: 'column',
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 원</b><br/>',
                },
                data: [42, 52, 57, 69, 97, 11]
            }, {
                name: '배당수익률',
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>',
                },
                yAxis: 1,
                data: [16, 64, 42, 51, 30, 82]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //06. 배당성향
    if ($('#chart_BICchart06').length) {
        Highcharts.chart('chart_BICchart06', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart06',
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 20,
                marginBottom: 70,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#e57828 ", "#fcc983"],//배당성향, 배당수익률

            title: {
                text: null,
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: [{ // 왼쪽 y축                
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}</b><br/> %',
                    style: {
                        color: ["#e57828"],
                    }
                },

            }, { // 오른쪽 y축
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}</b><br/> %',
                    style: {
                        color: ["#fcc983"],
                    }
                },
                opposite: true
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '배당성향',
                data: [42, 52, 57, 69, 97, 11]
            }, {
                name: '배당수익률',
                yAxis: 1,
                data: [16, 64, 42, 51, 30, 82]
            }],

            plotOptions: {                
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //07. ROE와 PBR
    if ($('#chart_BICchart07').length) {
        Highcharts.chart('chart_BICchart07', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart07',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 20,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#e57828 ", "#fcc983"],//자기자본이익률, 주가순자산배수

            title: {
                text: null,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: [{ // 왼쪽 y축
                title: {
                    text: null,
                },
                labels: {
                    format: '{value} %',
                    style: {
                        color: ["#e57828"],
                    }
                },
            }, { // 오른쪽 y축
                title: {
                    text: null,
                },
                labels: {
                    format: '{value} 배',
                    style: {
                        color: ["#fcc983"],
                    }
                },
                opposite: true
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '자기자본이익률',
                data: [42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '주가순자산배수',
                yAxis: 1,
                data: [16, 64, 42, 51, 30, 82],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 배</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //08. 운전자본 회전일수
    if ($('#chart_BICchart08').length) {
        Highcharts.chart('chart_BICchart08', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart08',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 20,
                marginBottom: 100,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#C4C4C4 ", "#e57828", "#fcc983"], //매출채권 회전일수, 재고자산 회전일수, 매입채무 회전일수

            title: {
                text: null,
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 일</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: [{ // Primary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value} 일',
                    style: {
                        color: ["#C4C4C4"],
                    }
                },
            }, { // Secondary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value} 일',
                    style: {
                        color: ["#e57828"],
                    }
                },
                opposite: true
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                type: 'line',
                data: [42, 52, 57, 69, 97, 11],
                name: '매출채권 회전일수',
            }, {
                type: 'line',
                data: [14.1, 9.6, 5.4, 9.9, 1.5, 06],
                name: '재고자산 회전일수',
            }, {
                type: 'line',
                data: [194.1, 95.6, 54.4, 29.9, 71.5, 106.4],
                name: '매입채무 회전일수',
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //09. 현금흐름표
    if ($('#chart_BICchart09').length) {
        Highcharts.chart('chart_BICchart09', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart09',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 30,
                marginBottom: 100,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#C4C4C4", "#e57828", "#fcc983"], //영업활동 현금흐름, 투자활동 현금흐름, 재무활동 현금흐름

            title: {
                text: null,
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f}</b><br/>억원</b><br/>',
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: {
                labels: {                    
                    style: {
                        color: ["#C4C4C4"],
                    },
                },
                title: {
                    text: null,
                }
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                type: 'line',
                data: [345, 71, 106, 129, 144, 176],
                name: '영업활동 현금흐름'
            }, {
                type: 'line',
                data: [16, 64, 42, 51, 30, 82],
                name: '투자활동 현금흐름',
            }, {
                type: 'line',
                data: [23, 63, 52, 31, 13, 34],
                name: '재무활동 현금흐름',
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //10. 주가수익배수
    if ($('#chart_BICchart10').length) {
        Highcharts.chart('chart_BICchart10', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart10',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 20,
                marginBottom: 70,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#e57828"],

            title: {
                style: {
                    fontSize: '0',
                },
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.2f} 배</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: {
                labels: {
                    format: '{value} 배',
                    style: {
                        color: ["#e57828"],
                    },
                },
                title: {
                    text: null,
                }
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주가수익배수',
                data: [42, 52, 57, 69, 97, 11]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //11. 주가와 주당순이익
    if ($('#chart_BICchart11').length) {
        Highcharts.chart('chart_BICchart11', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart11',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 20,
                marginBottom: 70,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#e57828 ", "#fcc983"],//부채비율, 유동비율   

            title: {
                text: null,
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 배</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: [{ // 왼쪽 y축
                title: {
                    text: null,
                },
                labels: {
                    format: '{value} 원',
                    style: {
                        color: ["#e57828"],
                    }
                },
            }, { // 오른쪽 y축
                title: {
                    text: null,
                },
                labels: {
                    format: '{value} 원',
                    style: {
                        color: ["#fcc983"],
                    }
                },
                opposite: true
            }],
            
            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주당순이익',
                data: [42, 52, 57, 69, 97, 11]
            }, {
                name: '주가',
                type: 'line',
                yAxis: 1,
                data: [72, 32, 37, 69, 27, 31]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //12. 주가순자산배수(PBR)
    if ($('#chart_BICchart12').length) {
        Highcharts.chart('chart_BICchart12', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart12',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 20,
                marginBottom: 70,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#e57828"], //주가순자산배수

            title: {
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 배</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: {
                labels: {
                    format: '{value} 배',
                    style: {
                        color: ["#e57828"],
                    },
                },
                title: {
                    text: null,
                }
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주가순자산배수',
                data: [42, 52, 57, 69, 97, 11]
            }],

            lang: {
                noData: "해당 데이터가 없습니다.<br> 데이터 선택 기간을 변경해 보세요.",
            },

            noData: {
                style: {
                    fontWeight: 'nomal',
                    fontSize: '1rem',
                    color: '#8380A0',
                }
            },

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //13. 주가와 주당순자산
    if ($('#chart_BICchart13').length) {
        Highcharts.chart('chart_BICchart13', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart13',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 20,
                marginBottom: 80,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#e57828", "#fcc983"],//주당순자산, 주가  

            title: {
                text: null,
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: [{
                labels: {
                    format: '{value} 원',
                    style: {
                        color: ["#e57828"],
                    }
                },
                title: {
                    text: null,
                },
            }, {
                labels: {
                    format: '{value} 원',
                    style: {
                        color: ["#fcc983"],
                    }
                },
                title: {
                    text: null,
                },
                opposite: true
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                type: 'line',
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0],
                name: '주당순자산'
            }, {
                name: '주가',
                type: 'line',
                yAxis: 1,
                data: [62, 53, 35, 34, 23, 12]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //14. 주가매출액배수(PSR)
    if ($('#chart_BICchart14').length) {
        Highcharts.chart('chart_BICchart14', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart14',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 20,
                marginBottom: 70,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#e57828"],

            title: {
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: {
                labels: {
                    format: '{value} 배',
                    style: {
                        color: ["#e57828"],
                    },
                },
                title: {
                    text: null,
                }
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주가순자산배수(PSR)',
                data: [42, 52, 57, 69, 97, 11]
            }],

            lang: {
                noData: "해당 데이터가 없습니다.<br> 데이터 선택 기간을 변경해 보세요.",
            },

            noData: {
                style: {
                    fontWeight: 'nomal',
                    fontSize: '1rem',
                    color: '#8380A0',
                }
            },

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //15. 주가와 주당매출액
    if ($('#chart_BICchart15').length) {
        Highcharts.chart('chart_BICchart15', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart15',                
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 20,
                marginBottom: 80,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#e57828", "#fcc983"],//주당매출액, 주가  

            title: {
                text: null,
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: [{
                labels: {
                    format: '{value} 원',
                    style: {
                        color: ["#e57828"],
                    }
                },
                title: {
                    text: null,
                },
            }, {
                labels: {
                    format: '{value} 원',
                    style: {
                        color: ["#fcc983"],
                    }
                },
                title: {
                    text: null,
                },
                opposite: true
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주당매출액',
                type: 'line',
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0],                
            }, {
                name: '주가',
                type: 'line',
                yAxis: 1,
                data: [62, 53, 35, 34, 23, 12]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }

    // 검색 - 배당탭 column 차트
    if ($('#containeralloca1_1').length) {
        Highcharts.chart('containeralloca1_1', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca1_1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#d3d3d3"],

            tooltip: {
                enabled: false
            },

            xAxis: [{
                categories: ['2015', '2016', '2017', '2018', '2019', '2019', '2019', '2019', '2020', '2021'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.7rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: ''
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '배당수익률',
                data: [22.88, 31.23, 35.23, 97.23, 35.23, 9.23, 7.23, 35.23, 34.23, 23.23]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca1_2').length) {
        Highcharts.chart('containeralloca1_2', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca1_2',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#545872"],

            tooltip: {
                enabled: false
            },

            xAxis: [{
                categories: ['2015', '2016', '2017', '2018', '2019', '2019', '2019', '2019', '2020', '2021'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.7rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: ''
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '주당배당금',
                data: [22.88, 31.23, 35.23, 97.23, 35.23, 9.23, 7.23, 35.23, 34.23, 23.23]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca1_3').length) {
        Highcharts.chart('containeralloca1_3', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca1_3',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            // colors: ["#d3d3d3"],

            tooltip: {
                enabled: false
            },

            xAxis: [{
                categories: ['2015', '2016', '2017', '2018', '2019', '2019', '2019', '2019', '2020', '2021'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.7rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },

            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: ''
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            series: [{
                name: '배당성향',
                data: [22.88, 31.23, 35.23, 97.23, 35.23, 9.23, 7.23, 35.23, 34.23, 23.23]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }

    // 원스톱 진단
    if ($('#onestep_chart1_1').length) {
        Highcharts.chart('onestep_chart1_1', {

            chart: {
                type: 'bubble',
                zoomType: 'x',
                borderColor: '#877edf',
                plotBorderWidth: 2,
                plotBorderColor: '#85929e',
                plotShadow: false,
                marginLeft: 0,
                marginTop: -1,
                marginRight: -1,
                marginBottom: 0,
            },

            title: {
                text: null
            },

            accessibility: {
                point: {
                    valueDescriptionFormat: '{index}. {point.name}, fat: {point.x}g, sugar: {point.y}g, obesity: {point.z}%.'
                }
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            xAxis: {
                gridLineWidth: 1,
                title: {
                    text: null,
                },
                min: 0,
                max: 100,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                tickColor: null,
                labels: {
                    enabled: false
                },
                plotLines: [{
                    color: '#C7CBE9',
                    dashStyle: 'ShortDash',
                    width: 1.5,
                    value: 50,
                    label: {
                        enabled: false
                    },
                    zIndex: 3
                }],
                accessibility: {
                    rangeDescription: 'Range: 60 to 100 grams.'
                }
            },

            yAxis: {
                startOnTick: false,
                endOnTick: false,
                title: {
                    text: null,
                },

                min: 0,
                max: 100,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                tickColor: null,
                labels: {
                    enabled: false
                },
                plotLines: [{
                    color: '#C7CBE9',
                    dashStyle: 'ShortDash',
                    width: 1.5,
                    value: 50,
                    label: {
                        enabled: false
                    },
                    zIndex: 3
                }],
                accessibility: {
                    rangeDescription: 'Range: 60 to 160 grams.'
                }
            },

            tooltip: {
                enabled: false
            },

            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
                data: [
                    { x: 95, y: 95, name: '삼성전자' },
                    { x: 18.5, y: 12.9, name: '카카오게임즈' },
                    { x: 12.3, y: 86.1, name: 'LG화학' },
                    { x: 13.3, y: 87.1, name: '엔씨소프트' },
                    { x: 53.4, y: 61.8, name: '카카오' },
                    { x: 48.4, y: 63.8, name: '삼성전자' },
                    { x: 63.4, y: 51.8, name: '카카오' },
                    { x: 63.4, y: 51.8, name: '카카오게임즈' },
                    { x: 68, y: 82.9, name: '쿠팡' },
                ]
            }]
        });
    }

    // 밴드 차트
    if ($('#sum_topchart_band').length) {
        // 검색 - 적정가밴드 주가비교
        Highcharts.chart('sum_topchart_band', {
            chart: {
                zoomType: 'xy',
                // scrollablePlotArea: {
                //     minWidth: 860,
                //     scrollPositionX: 1,
                //     opacity: 0.5
                // },
                renderTo: 'sum_topchart_band',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                marginTop: 20,
                marginBottom: 100,
                height: 420,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },
            xAxis: {
                type: 'year',
                categories: ['20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.01', '21.02', '21.03', '21.04', '21.05', '21.06', '21.07', '21.08', '21.09', '21.10', '21.11', '21.12', '21.01', '21.02', '21.03', '21.04'],
                crosshair: true,
                labels: {
                    format: '{value}',
                    style: {
                        color: ["#333333"],
                    },
                    step: 23,
                },
                showLastLabel: true,
                crosshair: {
                    color: 'rgba(204,214,235,1)',
                    zIndex: 3
                }
            },
            yAxis: {
                type: 'logarithmic',
                title: {
                    text: null
                },
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                maxPadding: 0,
                minPadding: 0.15,
                minorTickInterval: 'auto',
                tickInterval: 'auto',
                // showFirstLabel: false,
                opposite: true,
            },
            legend: {
                itemDistance: 6,
            },
            title: {
                text: null
            },
            colors: ["#f2333a", "#bec3ed", "#e4e6fc", "#c6c6c6", "#737edd"],
            tooltip: {
                crosshairs: true,
                shared: true,
                valueDecimals: 2,
                pointFormat: '<span>{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            
            credits: {
                enabled: false,
            },
            exporting: {
                enabled: false
            },
            lang: {
                noData: "밸류에이션에 필요한 데이터가 충분하지 않아<br>적정주가를 제시하지 않습니다..",
            },
            noData: {
                style: {
                    fontWeight: 'nomal',
                    fontSize: '1rem',
                    color: '#8380A0',
                    align: 'left'
                }
            },
            series: [{
                name: '주가',
                data:
                    [182.830, 184.910, 185.360, 182.920, 187.200, 188.360, 189.800, 196.840, 186.270, 187.740, 188.940, 193.570, 194.240, 196.320, 195.150, 200.570, 201.910, 197.840, 200.340, 196.330, 198.440, 203.510, 204.700, 206.260, 210.700, 208.250, 212.830, 214.320, 213.670, 207.070, 208.350, 208.040, 203.920, 202.880, 211.600, 208.750, 211.750, 202.540, 201.300, 203.850, 202.020, 204.060, 203.900, 205.010, 216.540, 213.290, 212.940, 216.350, 212.480, 208.250, 203.380, 209.190, 208.700, 208.900, 210.280, 211.490, 209.700, 214.580, 213.020, 213.690, 216.470, 221.150, 226.580, 228.910, 225.530, 227.270, 231.650, 217.300, 214.250, 202.660, 211.290, 205.370, 204.030, 205.410, 208.780, 205.050, 202.910, 200.390, 202.540, 207.420, 200.590, 203.190, 207.820, 209.440, 207.260, 210.330, 212.460, 206.190, 210.380, 205.910, 209.830, 210.580, 215.810, 221.400, 222.860, 220.860, 219.660, 219.660, 214.220, 214.650, 214.800, 214.890, 216.230, 210.080, 213.250, 202.680, 204.720, 202.470, 202.330, 206.430, 216.390, 223.290, 223.720, 218.390, 211.010, 216.550, 215.440, 216.510, 217.230, 214.460, 211.080, 212.420, 210.390, 210.110, 213.860, 213.870, 215.230, 214.070, 216.210, 215.370, 214.240, 214.360, 214.290, 216.010, 211.800, 210.520, 213.260, 214.200, 214.130, 219.280, 219.420, 218.590, 222.590, 223.940, 221.020, 222.750, 224.960, 224.150, 221.680, 222.420, 217.690, 217.900, 212.250, 218.290, 219.620, 217.490, 214.930, 216.340, 213.020, 212.650, 216.440, 224.340, 224.970, 225.950, 229.530, 232.330, 232.900, 238.930, 231.960, 239.650, 239.510, 243.000, 242.010, 242.200, 242.470, 243.770, 242.820, 244.490, 244.990, 243.700, 244.200, 243.790, 240.970, 234.510, 233.270, 234.550, 228.990, 232.380, 236.940, 233.870, 227.560, 226.730, 231.600, 227.390, 233.780, 232.420, 237.130, 235.750, 234.810, 237.710, 237.040, 230.720, 230.350, 235.990, 237.580, 235.460, 232.340, 236.480, 235.240, 231.850, 235.770, 242.350, 249.070, 247.860, 249.900, 253.250, 255.850, 255.910, 258.490, 255.590, 259.500, 260.740, 258.740, 258.260,],
                zIndex: 2,
                lineWidth: 2,
                marker: {
                    enabled: false
                }
            }, {
                name: '적정가',
                data:
                    [239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00,],
                marker: {
                    enabled: false
                },
                zIndex: 1,
                lineWidth: 2,
            }, {
                name: '저평가-고평가',
                data: [
                    [183.79, 310.70], [183.79, 310.70], [183.79, 310.70], [183.79, 310.70], [183.79, 310.70], [183.79, 310.70], [183.79, 310.70], [183.79, 310.70], [183.79, 310.70], [183.79, 310.70], [183.79, 310.70], [183.79, 310.70], [183.79, 310.70], [183.79, 310.70], [183.79, 310.70], [183.79, 310.70], [183.79, 310.70], [183.79, 310.70], [183.79, 310.70], [183.79, 310.70], [183.79, 310.70], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [148.42, 250.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [156.11, 263.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90], [179.18, 302.90],
                ],
                type: 'arearange',
                lineWidth: 0,
                opacity: 1,
                className: 'label_none',
                marker: {
                    enabled: false
                }
            }, {
                name: '매우저평가',
                data:
                    [141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70,],
                // opacity: 0.8,
                zIndex: 1,
                lineWidth: 1,
                dashStyle: 'Dash',
                marker: {
                    enabled: false
                }
            }, {
                name: '매우고평가',
                data:
                    [403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77,],
                // opacity: 0.8,
                zIndex: 1,
                lineWidth: 1,
                dashStyle: 'Dash',
                marker: {
                    enabled: false
                }
            }],
            plotOptions: {
                series: {
                    marker: {
                        fillColor: 'white',
                        lineWidth: 1,
                        lineColor: Highcharts.getOptions(),
                    }
                }
            },
        });
    }
});