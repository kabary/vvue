Module.register("temp_sensor",{
	defaults: {
		updateInterval: 1000 //reads the file every 30 mins
	},

	start: function(){
		this.sendSocketNotification("START", this.config);
	},

	socketNotificationReceived: function(notification, payload) {
		if(notification === "DATA"){
			this.dataFile = payload;
			this.updateDom();
		}
	},

	getDom: function(){
		var wrapper = document.createElement("div");
		if(this.dataFile){
			wrapper.innerHTML = this.dataFile;
		} else {
			wrapper.innerHTML = "No data";
		}
		return wrapper;
	}
});
