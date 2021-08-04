const appComponentTemplate = `

    <div id="appComponent">
        <section class="hero is-info welcome is-small" style="border-radius: 6px 6px 0px 0px;">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Welcome to Cradl
                    </h1>
                    <h2 class="subtitle">
                        Compare different plans!
                    </h2>
                </div>
            </div>
        </section>
        <div class="columns">
            <div class="column is-6" style="width: 50%">
                <chart/>
            </div>
            <div class="column is-6" style="width: 50% hidden=true">
                <chart/>
            </div>
        </div>
    </div>
`;

const appComponentOptions = {
    template: appComponentTemplate,
    data() {
        return {
            allPages: []
        }
    },
    created() {
        console.log("YOOOOOOO");
    }
}