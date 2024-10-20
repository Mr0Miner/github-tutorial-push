// script.js
function copyToClipboard(button, text) {
    navigator.clipboard.writeText(text).then(function() {
        const originalText = button.innerHTML;
        button.innerHTML = "✔";
        setTimeout(function() {
            button.innerHTML = originalText;
        }, 2000);
    }, function(err) {
        console.error('خطا در کپی متن: ', err);
    });
}
