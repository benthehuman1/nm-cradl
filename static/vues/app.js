const appComponentTemplate = `
<div>
    <div>
        <img src="/static/assets/cradl_logo.png" alt="Cradl logo" style="width: 161px; height: 65px;">
    </div>
    <div class="topnav">
        <a class="active" href="https://laurenbrown1886.wixsite.com/website">Home</a>
        <a href="/">Explore Plans</a>
        <a href="/compare">Compare Plans</a>
    </div>
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