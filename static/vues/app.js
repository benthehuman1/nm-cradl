const appComponentTemplate = `
<div>
    <div class="logo">
        <img src="/static/assets/cradl_logo.webp" alt="Cradl logo" style="width: 161px; height: 65px;">
    </div>
    <div class="topnav">
        <a class="active" href="https://laurenbrown1886.wixsite.com/website">Home</a>
        <a href="/">Explore Plans</a>
        <a href="/compare">Compare Plans</a>
        <a href="/">About</a>
        <a href="/compare">Information</a>
        <a href="/">Why Choose Us?</a>
        <a href="/compare">Contact</a>
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