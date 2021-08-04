const fakePieComponentTemplate = `
    <div>
        I'm not actually a pie chart.
        <button @click="printData">Print My Data</button>
    </div>
`;

const fakePieComponentOptions = {
    template: fakePieComponentTemplate,
    props: ['chartdata'],
    methods: {
        printData() {
            console.log(this.chartdata)
        }
    }
}