var Constants = {
    Pages: {
        default: "main",
        main: "main",
    },
    NotificationIds: {
        app__install: "notification__app__install",
        app__update: "notification__app__update",
        app__update_additional: "notification__app__update_additional",
        error__folder_unreadable: "notification__error__folder_unreadable"
    },
    Key: {
        // File system
        dir_id: "dir_id",
        current_file_id: "current_file_id",

        // Wallpaper preferences
        choose_random: "choose_random",
        use_interval: "use_interval",
        interval: "interval",
        delay_unit: "delay_unit",
        layout_mode: "layout_mode",

        // Dropdowns
        dropdown_delay_unit: "delay_unit",
        dropdown_layout_mode: "layout_mode",

        // Load Parameters
        parameter_function: "parameter_function",
        parameter_parameters: "parameter_parameters",

        // Load Functions
        onload_trigger_folder_dialog: "triggerOpenFolderDialog",
    },
    Defaults: {
        Wallpaper: {
            use_interval: false,
            delay_unit: 0,
            choose_random: false,
            retry_delay: 100,
            alarm_interval: 15,
            layout: 0,
            layout_mode: ["CENTER_CROPPED", "STRETCH", "CENTER"],
            file_extensions: new RegExp(".(jpg|jpeg|png)$", "i")
        },

        WindowDimensions: {
            width: 680,
            height: 400,
        },

        frame_color: "#D32F2F",
        window_id: "shufflepaper_mainActivity",
    }
};
