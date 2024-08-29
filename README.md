# Show Stopper

 A server status display solution




## The Hitchhikers Guide To Implementation

> [!IMPORTANT]
> This is just the frontend, and is designed to work with this [repo](https://github.com/Pranav1174/DB-STATUS-CHECKING-repo)


### 1. Basics of the component.

Copy the whole [loaderComp folder](./src/loaderComp/) to your project, it hopefully contains everything you require

As shown in the [App.js](./src/App.js) file create a config object 

```javascript
const config = {
        animated:true,
        actions:
        [
            {
                nm: '24h',
                mapping:"24H"
            },
            {
                nm: '7d',
                mapping:"1WK"
            },
            {
                nm: '1mo',
                mapping:"1MO"
            },
            {
                nm:"💀",
                mapping:"DEATHWISH"
            }
        ]
    }
```

> [!CAUTION]
> The animated property MUST BE set to false, if you intend to show heaps of data,like say, hypothetically 5000 slices. the DEATHWISH is to simulate the same, but it is not compatible with the current backend

Explanation for the Object,

    animated - this property is pretty self explanatory
    actions - this defines how many AppBar/Menu Bar buttons are there

        within actions,
            nm - It is the label for the button
            mapping - enables mapping for each of the app bar buttons, it is passed to the App.js (or wherever you use it -- more on it later)

##### Behold!! The Component
```javascript
    <StatusOverview load={dta} vertex={vertex} config={config}/>
```           

Explanation for the attributes/properties

* load - used to pass the data to the component, a basic template can be found in [data-24h.json](./data-24h.json)

* vertex - just an arbitary name for a Call back function, the component will pass the mapping string from before to this function.

which can be used like below,

```javascript
 function vertex(pass){
    const fetchData = async () => {
      const response = await fetch(`${baseUri}/monitor/db-status/?frame=${pass}`);
      const json = await response.json();
      setDta(json);
    };
    fetchData();
  }
```


* config have already been discussed above


### 2. In-depth of the component
the components parent file,
[loaderComp.js](./src/loaderComp/loaderComp.js)

the StatusOverview Component is built-up of two other components, SwitchingWidget and Rings.

[SwitchingWidget](./src/loaderComp/switchingWidget/swWdg.js) is used as the Appbar/NavBar and is responsible for switching b/w the datapoints, 

```javascript
    <SwitchingWidget config={config.actions} trace={trace}/>
```

* config - its the stripped down version of the config passed for the StatusOverview Component

* trace - takes a callback function, and is called whenever the appbar buttons are pressed, and it passes the index of the button along with it.

here the trace function defined in loaderComp.js helps with mapping the index with the config, and calling the vertex function

```javascript
    function trace(index){
        vertex(config.actions[index].mapping);
    }
```



[Rings](./src/loaderComp/ringThingy/ringyPingy.js) are basically the stars of the show.

They show the status passed through the dtaLLd attribute
```javascript
    <Rings dtaLLd={load.data} showProp={passProp} animated={config.animated}/>
```

* dtaLLD - it's used to pass the data.
* showProp - takes a function, and calls it whenever a slice/ring is clicked, the passed function is responsible for showing the details of the selected ring

* animated - this property was discussed before, in the main config variable section

the passProp function in loaderComp.js is self Explanatory

_the details div_
it is used to show relevant information about each slice, the data is loaded, and displayed as the showProp is triggered from `<Rings/>` component


--- 
> [!TIP]
> Feel like you need more? go to Networksim [Repo](https://github.com/havisVh/networkSim). for a local testing backend which is directly compatible with this project

#### enjoy.. and GodSpeed
