const Observable = require("@nativescript/core").Observable;
var Toast = require("nativescript-toast");

const viewModel = new Observable();

function createViewModel() {
    viewModel.dialogShown = false;

    viewModel.showDialog = () => {
        viewModel.set("dialogShown", true);
    };
    
    viewModel.closeDialog = () => {
        viewModel.set("dialogShown", false);
    };

    viewModel.send = () => {
        var toast = Toast.makeText("We'll send verification code","long");

        toast.show();
        viewModel.set("dialogShown",false);
    };

    return viewModel;
}
exports.createViewModel = createViewModel;
