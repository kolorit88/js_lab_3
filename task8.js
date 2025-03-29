function Browser(name, version) {
    this.name = name;
    this.version = version;
}

Browser.prototype.aboutBrowser = function() {
    console.log(`Браузер: ${this.name}, Версия: ${this.version}`);
};

const myBrowser = new Browser("Microsoft Internet Explorer", "9.0");
myBrowser.aboutBrowser();