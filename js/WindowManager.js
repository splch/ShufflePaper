function showMainWindow(triggerFunction) {
    chrome.app.window.create(
        "../MainActivity.html",
        {
            id: Constants.Defaults.window_id,
            bounds: {
                width: Constants.Defaults.WindowDimensions.width,
                height: Constants.Defaults.WindowDimensions.height
            },
            frame: {
                type: "chrome",
                color: Constants.Defaults.frame_color
            }
        },
        createdWindow => {
            if (isdef(triggerFunction)) {
                createdWindow.contentWindow.onloadend = createdWindow.contentWindow[
                    Constants.Key.parameter_function
                ] = triggerFunction;
            }
        }
    );
}

window[Constants.Key.onload_trigger_folder_dialog] = () => {
    onClickChooseFolder();
};
