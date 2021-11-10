import React from 'react';

class ApiComponent extends React.Component {
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    
  componentDidMount() {
    const http = require('http');

    var options = {
        host: '172.19.0.3',
        port: 3001,
        path: '/person/names',
        method: 'Get'
      };

      
      http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            
            console.log('BODY: ' + chunk);
            var json = chunk.json();
            this.setState({
                items: json,
                DataisLoaded: true
            });
    
        });
      }).end();    
    
};
  
  render() {      
      
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
        <h1> Pleses wait some time.... </h1> </div> ;
      
    return    (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                items.map((item) => ( 
                <ol key = { item.id } >
                    User_Name: { item.username }, 
                    Full_Name: { item.name }, 
                    User_Email: { item.email } 
                    </ol>
                ))
            }
        </div>
    );
  }
}
export default ApiComponent;
