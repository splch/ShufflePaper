chrome.app.runtime.onLaunched.addListener(launchData => {
    showMainWindow();
});

chrome.runtime.onInstalled.addListener(async info => {
    await showUpdateNotification(info);

    setTimeout(() => {
        handleSpecificUpdates(info);
    }, 1500);
});

chrome.alarms.onAlarm.addListener(alarm => {
    console.log("Loading wallpaper.", alarm);
    loadNextWallpaper();
});

async function showUpdateNotification(info) {
    const currentVersion = chrome.runtime.getManifest().version;
    const previousVersion = info.previousVersion;

    if (info.reason == "install") {
        showMainWindow();
    } else if (info.reason == "update") {
        if (compareVersion(currentVersion, previousVersion) > 0) {
            await NotificationManager.show(
                Constants.NotificationIds.app__update,
                {
                    type: "basic",
                    title: getString("notification_update_title", [currentVersion]),
                    iconUrl: await getAsset("appicon", 48),
                    message: getString("notification_update_message"),
                    requireInteraction: true
                },
                () => {
                    window.open(Constants.Defaults.url, "blank");
                }
            );
        }
    }
}

async function handleSpecificUpdates(info) {
    const currentVersion = chrome.runtime.getManifest().version;
    const previousVersion = info.previousVersion;

    if (info.reason == "update") {
        if (isVersionJump("2.0.0", currentVersion, previousVersion)) {
            showMainWindow();
            SharedPreferences.clearPreferences();
            await NotificationManager.show(
                Constants.NotificationIds.app__update_additional,
                {
                    type: "basic",
                    title: getString("notification_update_title_v_1_3_0"),
                    iconUrl: await getAsset("appicon", 48),
                    message: getString("notification_update_message_v_1_3_0"),
                    requireInteraction: true
                },
                () => {
                    showMainWindow();
                }
            );
        }
    }
}
