const appComponentTemplate = `
    <div id="appComponent">
        hmmmm?
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