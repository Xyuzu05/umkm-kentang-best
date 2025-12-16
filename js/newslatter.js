$(function () {
    const $checkbox = $("#langganan");
    if (!$checkbox.length) return;

    $checkbox.on("change", () => {
        const pesan = $checkbox.is(":checked") ? "Terima kasih telah berlangganan!" : "Langganan dibatalkan.";
        const $toast = $('<div class="toast align-items-center text-bg-info border-0" role="alert" aria-live="assertive" aria-atomic="true">\
            <div class="d-flex">\
                <div class="toast-body">' + pesan + '</div>\
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>\
            </div>\
        </div>');

        let $container = $(".toast-container");
        if (!$container.length) {
            $container = $('<div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 1060"></div>');
            $("body").append($container);
        }

        $container.append($toast);
        const toast = new bootstrap.Toast($toast[0], { delay: 2200 });
        toast.show();
    });
});