function highlightTaDemo() {
    var re = new RegExp('CSSScript', 'g');
    var taHlght = highlightta(document.getElementById('highlight-div'), document.getElementById('highlight-ta'), "mark-style", re);
}
highlightTaDemo();