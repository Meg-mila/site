document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a')
    links.forEach(link => {
        link.addEventListener('click', function (ev) {
            const event = ev.currentTarget.dataset.metric;
            if (window.gtag && event) {
                window.gtag('event', 'click_link', {
                    'data_metric': event,
                });
            }
        })
    })
})