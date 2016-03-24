// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

// universal utils: cache, fetch, store, resource, fetcher, router, vdom, etc
// import * as u from 'universal-utils'

// the following line, if uncommented, will enable browserify to push
// a changed fn to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
// -- browserify-hmr having install issues right now
// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         app()
//     })
// }

// Check for ServiceWorker support before trying to install it
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./serviceworker.js').then(() => {
//         // Registration was successful
//         console.info('registration success')
//     }).catch(() => {
//         console.error('registration failed')
//             // Registration failed
//     })
// } else {
//     // No ServiceWorker Support
// }

import DOM from 'react-dom'
import React, {Component} from 'react'

function app() {
    // start app
    // new Router()
      var timeMachineData = {
      about: 
        {
          cobwebImageUrl: "http://www.pd4pic.com/images/spiderweb-cobweb-spiders-web-creepy-scary-spider.png",
          timeMachineName: "just a machine bro",
          year: "2016",
          imageUrl: "http://orig12.deviantart.net/7d29/f/2011/323/4/f/antique_vintage_pocket_watch_with_map_background_by_eveyd-d4fmi81.png"
        }
    }

    var AppView = React.createClass({

    	render: function() {
        console.log(this)
    		return (
    			<div className="container">			
	    			<h1 className="title">...just a normal box bro</h1> 
	    			<TimeMachine resultsData={this.props.machineData.about} />
	    		</div>
    			)
    	}
    })

   	var TimeMachine = React.createClass({
   	      _timeTravel: function() {
        if (!this.state.ticking) {
            var incrementYear = function() {
              
                   this.setState({
                  year: this.state.year + 1,
                  ticking: true,
                  tickSymbol: "||",
                  
                })
                 
                }
                  
           
          var boundIncrementer = incrementYear.bind(this)
          this.intervalId = setInterval(boundIncrementer,500)
        
      }

        else {
          clearInterval(this.intervalId)
          this.setState({
            tickSymbol: '\u2191',
            ticking: false
          })
        }
        },

          _backTravel: function() {
        if (!this.state.ticking) {
            var decrementYear = function() {
               this.setState({
                  year: this.state.year - 1,
                  ticking: true,
                  downTickSymbol: "||"
                 })
           }
          var boundDecrementer = decrementYear.bind(this)
          this.backIntervalId = setInterval(boundDecrementer,500)
        }

        else {
          clearInterval(this.backIntervalId)
          this.setState({
            downTickSymbol: 'getDown',
            ticking: false
          })
        }
      },
        

      getInitialState: function() {
        return {
          buttonSymbol: "+",
          year: 2016 ,
          tickSymbol: '\u2191',
          downTickSymbol: 'get Down',
          ticking: false,
          cobweb: <img src={this.props.resultsData.cobwebImageUrl}/> ,
        }
      },

   		render: function(){
        console.log(this.state)             
   			return (
   				<div className="listing">
   					<img src={this.props.resultsData.imageUrl} />
   					<p className="year">What year is it?? {this.state.year}<button onClick={this._backTravel}>{this.state.downTickSymbol}</button><button onClick={this._timeTravel}>{this.state.tickSymbol}</button></p>
   				</div>
   				)
   		}
   	})

    DOM.render(<AppView id="topView" machineData={timeMachineData} />,document.querySelector('.container'))
}

app()
