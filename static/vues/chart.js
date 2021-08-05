const chartComponentTemplate = `
<div id="chartComponent">
    <section class="info-tiles">
        <div class="tile is-ancestor has-text-centered">
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">{{principal}}</p>
                    <p class="subtitle">Initial Deposit</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">{{total_additional_investment}}</p>
                    <p class="subtitle">Total Additional Deposit</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">{{total_interest}}</p>
                    <p class="subtitle">Total Interest</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title has-text-success has-text-weight-bold   ">{{future_value}}</p>
                    <p class="subtitle has-text-success has-text-weight-bold    ">Total Savings</p>
                </article>
            </div>
        </div>
    </section>
    <div class="columns">
        <div class="column is-6">
            <div class="card events-card" style="height:100%">
                <header class="card-header">
                    <p class="card-header-title">
                        Events
                    </p>
                </header>
                <div class="card-table">
                    <div class="content">
                        <table class="table is-fullwidth is-striped">
                            <tbody>
                                <tr>
                                    <td width="50%">Principal</td>
                                    <td width="50%"><input class="input" v-model="principal" type="text" placeholder="i.e 2000"></td>
                                </tr>
                                <tr>
                                    <td width="50%">Additional Investment</td>
                                    <td width="50%"><input class="input" v-model="additional_investment" type="text" placeholder="Small input"></td>
                                </tr>
                                <tr>
                                    <td width="50%">Additional Investment Frequency</td>
                                    <td width="50%">
                                        <div class="select is-fullwidth">
                                            <select v-model="additional_investment_frequency">
                                                <option value=1>Yearly</option>
                                                <option value=12>Monthly</option>
                                                <option value=26>Fortnightly</option>
                                                <option value=52>Weekly</option>
                                                <option value=365>Daily</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="50%">Compound Frequency</td>
                                    <td width="50%">
                                        <div class="select is-fullwidth">
                                            <select v-model="compound_frequency">
                                                <option value=1>Yearly</option>
                                                <option value=12>Monthly</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="50%">Time Invested</td>
                                    <td width="50%"><input class="input" v-model="time_invested" type="text" placeholder="Small input"></td>
                                </tr>
                                <tr>
                                    <td width="50%">Interest Rate</td>
                                    <td width="50%">
                                        <input class="input" v-model="interest_rate" type="text" placeholder="Small input"></td>
                                </tr>
                                <tr>
                                    <td colspan="2" style="width:100%">
                                        <p class="is-italic" style="font-size:0.6em">
                                            <strong>NM Hackathon 2021:</strong>
                                            Maybe put team member names here?
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-6 charttest">
            <div class="card">
                <div class="card-content">
                        <div class="content has-text-centered">
                            <button class="button" @click="showValueOverTime()">Value Over Time</button>
                            <button class="button" @click="showValueBreakdown()">Value Breakdown</button>
                        </div>
                        <reactive v-if="showingValueOverTime" :chart-data="datacollection"></reactive>
                        <fake-pie v-else :pieChartData="pieChartData"></fake-pie>
                        <button class="button " @click="fillData()">Generate Graph</button>
                        <input v-if="!showingValueOverTime" type="number" v-model="pieChartYear">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const chartComponentOptions = {
    template: chartComponentTemplate,
    data() {
        return {
            showingValueOverTime: true,
            pieChartYear: 0,
            datacollection: null,
            principal: 10000,
            interest_rate: 9,
            time_invested: 5,
            additional_investment: 5000,
            additional_investment_frequency: 1,
            options: {
                additional_investment_frequency: {
                    "1": "Yearly",
                    "12": "Monthly",
                    "26": "Fortnightly",
                    "52": "Weekly",
                    "365": "Daily"
                }
            },
            compound_frequency: 1,
            options: {
                compound_frequency: {
                    "1": "Yearly",
                    "12": "Monthly"
                }
            }
        }
    },
    created() {
        this.fillData()
    },
    methods: {
        showValueOverTime() {
            this.showingValueOverTime = true;
        },
        showValueBreakdown() {
            this.showingValueOverTime = false;
        },
        fillData() {
            //create col for each year invested
            cols = [];
            // years for columns
            years = 0;

            principalData = [];
            investmentsData = [];
            interestData = [];

            for (var i = this.time_invested - 1; i >= 0; i--) {

                // create labels
                years = years + 1;
                cols.push(years + ' Years')

                // create data
                // principal
                principalData.push(this.principal);

                //investments
                investmentsData.push(years * this.additional_investment * this.additional_investment_frequency)

                //interest
                interestData.push(this.yearlyInterest(years))


            }


            this.datacollection = {
                labels: cols,
                datasets: [{
                        label: 'Principal',
                        backgroundColor: '##363636',
                        data: principalData
                    },
                    {
                        label: 'Additional Investments',
                        backgroundColor: '#3298dc',
                        data: investmentsData
                    },
                    {
                        label: 'Accrued Interest',
                        backgroundColor: '#48c774',
                        data: interestData
                    }
                ]
            }

        },
        getRandomInt() {
            return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        },
        yearlyInterest(years) {
            // This is basically copying the code in computed so that interest data can be generated across the graph but apparently you cannot pass values into computed properties. This should be refactored later!

            // tpp - total_pay_periods

            tpp = parseFloat(this.additional_investment_frequency) * (years);

            // tai - total_additional_investment

            tai = parseFloat(this.additional_investment) * tpp;

            // r - rate

            ir = parseFloat(this.interest_rate) / 100;
            cf = parseFloat(this.compound_frequency);
            aif = parseFloat(this.additional_investment_frequency);

            r = (Math.pow((1 + ir / cf), (cf / aif)) - 1);

            // fv - future_value

            p = parseFloat(this.principal);
            ai = parseFloat(this.additional_investment);

            v = ((p * (Math.pow((1 + r), tpp))) + (ai * (Math.pow((1 + r), tpp) - 1) / r));
            fv = v.toFixed(2);

            // ti - total_interest

            t = ((fv - p) - tai);
            ti = t.toFixed(2);
            return ti

        }
    },
    computed: {
        usedPieChartYearIndex: function(){
            if(this.pieChartYear < 0){
                return 0;
            }
            else if (this.pieChartYear >= this.time_invested) {
                return this.time_invested - 1;
            }
            return this.pieChartYear;
        },
        pieChartData: function(){
            var principalList = this.datacollection.datasets[0].data;
            var additionalList = this.datacollection.datasets[1].data;
            var accruedList = this.datacollection.datasets[2].data;

            console.log(this.usedPieChartYearIndex);
            console.log(principalList);

            return [principalList[this.usedPieChartYearIndex], additionalList[this.usedPieChartYearIndex], accruedList[this.usedPieChartYearIndex]];

        },
        total_pay_periods: function() {
            // calculate total number of pay periods
            return parseFloat(this.additional_investment_frequency) * parseFloat(this.time_invested);
        },
        total_additional_investment: function() {
            // times total pay periods by additional investment installment amount to get overall total additional investment
            return parseFloat(this.additional_investment) * this.total_pay_periods;
        },
        rate: function() {
            ir = parseFloat(this.interest_rate) / 100;
            cf = parseFloat(this.compound_frequency);
            aif = parseFloat(this.additional_investment_frequency);
            return (Math.pow((1 + ir / cf), (cf / aif)) - 1);
            // return (((1+ir/cf)^(cf/aif))-1);
        },
        future_value: function() {
            // based on:
            // F = P*(1+rate)^nper + A*( ((1+rate)^nper - 1)/rate )
            // https://www.vertex42.com/Calculators/compound-interest-calculator.html#rate-per-period

            p = parseFloat(this.principal);
            r = parseFloat(this.rate);
            tpp = parseFloat(this.total_pay_periods);
            ai = parseFloat(this.additional_investment);

            // calculate final future value
            v = ((p * (Math.pow((1 + r), tpp))) + (ai * (Math.pow((1 + r), tpp) - 1) / r));
            // convert to 2 decimal places
            return v.toFixed(2);
        },
        total_interest: function() {
            fv = parseFloat(this.future_value);
            p = parseFloat(this.principal);
            tai = parseFloat(this.total_additional_investment);
            // calculate total interest
            ti = ((fv - p) - tai);
            // convert to 2 decimal places
            return ti.toFixed(2);
        }
    }
}