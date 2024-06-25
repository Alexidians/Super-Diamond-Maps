(function() {
    // Constructor for SuperDiamondMap object
    function SuperDiamondMap(options) {
        this.elem = null;
        this.options = options;
        this.init();
    }

    // Method to initialize the map
    SuperDiamondMap.prototype.init = function() {
        var mapUrl = this.constructMapUrl();
        this.createMapIframe(mapUrl);
    };

    // Method to construct Bing Maps embed URL based on options
    SuperDiamondMap.prototype.constructMapUrl = function() {
       var mapUrl = "https://alexidians.com/Super-Diamond-Maps/embed.php?";
       mapUrl += "latitude=" + encodeURIComponent(this.options.latitude || '0');
       mapUrl += "&longitude=" + encodeURIComponent(this.options.longitude || '0');
       mapUrl += "&zoomlvl=" + encodeURIComponent(this.options.zoomlvl || '15');
       mapUrl += "&view=" + encodeURIComponent(this.options.view || 'auto');
       mapUrl += "&width=" + encodeURIComponent(this.options.width || '600');
       mapUrl += "&height=" + encodeURIComponent(this.options.height || '450');
       mapUrl += "&language=" + encodeURIComponent(this.options.language || 'en');
       return mapUrl;
    };


    // Method to create iframe element and append to container
    SuperDiamondMap.prototype.createMapIframe = function(mapUrl) {
        this.elem = document.createElement('iframe');
        this.elem.setAttribute('src', mapUrl);
        this.elem.setAttribute('width', '100%');
        this.elem.setAttribute('height', '100%');
        this.elem.setAttribute('frameborder', '0');
        this.elem.setAttribute('allowfullscreen', '');
        this.elem.setAttribute('loading', 'lazy');
        this.elem.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');

        // Append iframe to specified container or default to body
        var container = document.getElementById(this.options.containerId) || document.body;
        container.innerHTML = ''; // Clear existing content
        container.appendChild(this.elem);
    };

    // Method to reload the map
    SuperDiamondMap.prototype.reloadMap = function() {
        var mapUrl = this.constructMapUrl();
        this.elem.setAttribute('src', mapUrl);
    };

    // Method to change attributes of the map
    SuperDiamondMap.prototype.changeAttributes = function(options) {
        this.options = Object.assign(this.options, options);
        var mapUrl = this.constructMapUrl();
        this.elem.setAttribute('src', mapUrl);
    };

    // Expose SuperDiamondMap constructor globally
    window.SuperDiamondMap = SuperDiamondMap;

})();
