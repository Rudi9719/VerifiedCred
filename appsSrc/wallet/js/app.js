(function() {

    window.ononline = (event) => {
        console.log("The network connection has been lost.");
    };

    window.onoffline = (event) => {
        console.log("The network connection has been lost.");
    };

    window.addEventListener("load", () => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("service-worker.js")
                .then(
                    (registration) => {
                        console.log(`serviceWorker has been registered: ${registration.scope}`);
                    },
                    (err) => {
                        console.log(`serviceWorker failed on registration: ${err}`);
                    }
                )
        }
    });

})();