const fakePieComponentOptions = {
    extends: VueChartJs.Pie,
    props: ["pieChartData"],
    data: function() {
        return {
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                },
                radius: {
                    number: 20
                }
            },
            chartData: {
                labels: [
                    'Principal',
                    'Additional Investments',
                    'Accrued Intrest'
                  ],
                  datasets: [{
                    label: 'My First Dataset',
                    data: this.pieChartData,
                    backgroundColor: [
                      '##363636',
                      '#3298dc',
                      '#48c774'
                    ],
                    hoverOffset: 4
                }]
            }
        }
    },
    mounted() {
        console.log(this.chartData);
        console.log(this.pieChartData);
        this.renderChart(this.chartData, this.options)
    }
}
