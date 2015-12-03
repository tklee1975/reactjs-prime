
// General Function in global scope

function isPrime(value) {
  if(value <= 3) {
    return true;
  }

  if(value % 2 == 0) {
    return false;
  }

  var halfValue = Math.ceil(value / 2);


  if(halfValue % 2 == 0) {
    halfValue = halfValue + 1;  // use the odd number
  }
  // console.log("value=" + value + " half=" + halfValue);

  var d;
  for(d=halfValue; d>2; d-=2) {
    //console.log("value=" + value + " d=" + d + " quotient=" + ());
    if(value % d == 0) {
      return false;     // There is
    }
  }

  return true;
}

function generatePrime(n) {
  var primeArray = [];

  var i;
  for(i=1; i<=n; i++) {
    if(isPrime(i)) {
      primeArray.push(i);
    }
  }

  return primeArray;
}

// Test Prime
var TestPrime = React.createClass({
  render: function() {
    var testArray = [1, 3, 5, 9, 11, 15];

    var createItem = function(itemText, index) {
      var prime = isPrime(itemText) ? "yes" : "no";

      return <li>{itemText}: {prime}</li>
    };

    return <ul>{testArray.map(createItem)}</ul>;
  }
});


// PrimeNumber Class
var PrimeNumber = React.createClass({
  getInitialState: function() {
	 		return {
				rangeMax : 100
			};
 	},

  rangeChange : function() {
    this.setState(
				{
					rangeMax : this.refs.max.value
				}
		);
  },

  render: function() {
    var primeArray = generatePrime(this.state.rangeMax);

    var createItem = function(itemText, index) {
      return <div className="number">{itemText}</div>;
    };

    var inputStyle = {  "font-size":14, "width":50  };

    return (
      //Prime from 1 to : <input>
      <div>
      Find Prime from 1 to <input style={inputStyle} ref="max" type="text"
            defaultValue={this.state.rangeMax}
            onChange={this.rangeChange}
            placeholder="Prime Range"/>
      <p/>
      <div className="parent">{primeArray.map(createItem)}</div>
      </div>
    );
  }
});

ReactDOM.render(<PrimeNumber/>, document.getElementById('prime'));
//ReactDOM.render(<TestPrime/>, document.getElementById('testPrime'));
