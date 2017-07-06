# WinampRadio

WinampRadio is an application......



## Getting Started / Installing

These instructions will get you a copy of the project up and running on your local machine. 

* Install Node.js.

* Install Winamp

* Make an winamp-radio folder

* Open node.js cmd

* Navigate to the winamp-radio folder

* Use the next code
```
	git pull https://github.com/Jellehegeraat/WinampRadio
```
* Now we're gonna install all the modules. 

* Install node modules using the next steps.
  
* Open Cmd.exe
  
* Navigate to the src map
  
* Use the next code

```
	npm install
```

* After this step it is time to run the program.

* open up node.js cmd

* Navigate to the src map

* Use the next code
```
	node app.js
```
* if everything is correct it will start Winamp with an random Radiostation.

## Running the tests

* This only works if u Installed everything properly

* Open up node.js cmd

* Go to the src map

* Use the next code
```
	node app.js
```
* if everything is correct it will start Winamp with an random Radiostation


## Changing Winamp Using Webbrowser

* The webapp is located at: localhost:4422.

* Here u can change the Volume, Next random or choose the radio u want to lissen to.

* there is also an Settings button where u can change the Winamp location on ur pc or u can change the refresh time between radio stations.



## Changing timers/ Winamp folder

* Navigate to the winamp-folder on ur pc

* Open the config.js file

* There are 2 things u can change here:

	* Here u can change the refresh timer, the number is in miliseconds so for everysecond it is 1000.
		* examples 
		* For 1 hour  it is 3 600 000.
		* For 2 hours it is 7 200 000.
	* Or u can change the Winamp location

### And coding style tests

Explain what these tests test and why


```

Give an example

```


## Adding your own Radiostations.

If you want to add Radiostations there are a few things u need to do.

* First navigate to the Broadcastlist inside the src map.

* Open Broadcastlist.

* If u have a new Radiostation u can add it to the list using this code

```
{
			stationName: " enter station name here ",
			url: " enter station url here "
		},
```
* Save the file.

* Open Station.js.

* If u have added a Radiostation. 

* Change the number on line 58 to.
	* If u added 1 radiostation u need to add 1. 
	* If u added 2 radiostations u need to add 2.

* change the number on line 61 to.
	* If u added 1 radiostation u need to add 1. 
	* If u added 2 radiostations u need to add 2.
## Built With

* [Node.js](https://nodejs.org/en/)

* [Winamp](http://www.winamp.com/index.html)

* [Java](https://www.javascript.com/)



## Authors

* **Jelle Hegeraat** - *Initial work* - [Jelle Hegeraat](https://github.com/Jellehegeraat)


