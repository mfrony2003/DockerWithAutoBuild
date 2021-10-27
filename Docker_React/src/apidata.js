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
    const apiUrl = 'http://localhost:3001/person/names';
    fetch(apiUrl)
    .then((res) => res.json())
    .then((json) => {
        this.setState({
            items: json,
            DataisLoaded: true
        });
    })
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
