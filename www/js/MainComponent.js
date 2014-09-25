/**
 *	MainComponent.js
 *
 *	implement PhoneGap lifecycle events here
 */

// This is an event that fires when PhoneGap is fully loaded.
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady()
{
	alert("Device ready.");
}

// This is an event that fires when a PhoneGap application is put into the background.
document.addEventListener("pause", onPause, false);

function onPause()
{
	
}

// This is an event that fires when a PhoneGap application is retrieved from the background.
document.addEventListener("resume", onResume, false);

function onResume()
{
	alert("Resumed");
}

// This is an event that fires when a PhoneGap application is online (connected to the Internet).
// When the application's network connection changes to being online, the online event is fired.
document.addEventListener("online", toOnline, false);

function toOnline()
{
	alert("Connected to the internet.");
}

// This is an event that fires when a PhoneGap application is offline (not connected to the Internet).
// When the application's network connection changes to being offline, the offline event is fired.
document.addEventListener("offline", toOffline, false);

function toOffline()
{
	alert("Disconnected");
}

// Android only:
// This is an event that fires when the user presses the back button on Android.
document.addEventlistener("backbutton", onBackButton, false);

function onBackButton()
{

}

// Android only:
// This is an event that fires when the user presses the menu button on Android.
document.addEventListener("menubutton", onMenuButton, false)

function onMenuButton()
{

}





