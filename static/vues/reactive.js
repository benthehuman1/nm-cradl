const reactiveComponentOptions = {
    extends: VueChartJs.Bar,
    mixins: [VueChartJs.mixins.reactiveProp],
    data: function() {
        return {
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        stacked: true,
                        categoryPercentage: 0.5,
                        barPercentage: 1
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
        }
    },
    mounted() {
        // this.chartData is created in the mixin
        this.renderChart(this.chartData, this.options)

    }
}
