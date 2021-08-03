const chartComponentTemplate = `
    <div id="chartComponent">
        {{exampleChartNumbers}}
        <br/>
        <input type="number" v-model="exampleChartSlope">
        <button type="button" @click="updateChartExample(exampleChartSlope)">Click Me!</button>
    </div>
`;

const chartComponentOptions = {
    template: chartComponentTemplate,
    data() {
        return {
            exampleChartNumbers: [],
            exampleChartSlope: 1.0
        }
    },
    methods: {
        async updateChartExample(slope){
            console.log(slope);
            const getChartExampleURL = new URL(`${window.baseEndpoint}/chartExample`);
            const getChartExampleParams = { slope: this.exampleChartSlope };
            Object.keys(getChartExampleParams).forEach(key => getChartExampleURL.searchParams.append(key, getChartExampleParams[key]))
            const exampleChartResponse = await fetch(getChartExampleURL).then(resp => resp.json());
            this.exampleChartNumbers = exampleChartResponse.values
        }
    },
    created() {
        console.log("YOOOOOOO");
    }

}