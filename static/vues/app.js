const appComponentTemplate = `
<div>
    <section class="hero is-info welcome is-small" style="border-radius: 6px 6px 0px 0px;">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    Welcome to Cradl
                </h1>
                <h2 class="subtitle">
                    See the magic of compounding interest!
                </h2>
            </div>
        </div>
    </section>
    <chart/>
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