const copyBtn = document.getElementById('copyBtn');
const text = document.getElementById('linkText').textContent;

copyBtn.addEventListener('click', function() {
    navigator.clipboard.writeText(text);

    document.getElementById('copiedLink').classList.add('copied-active');
    setTimeout(function() {
        document.getElementById('copiedLink').classList.remove('copied-active');
    }, 1500);
});