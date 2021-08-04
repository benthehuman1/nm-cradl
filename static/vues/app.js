const appComponentTemplate = `
    <div id="appComponent">
        welcome to cradl?
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