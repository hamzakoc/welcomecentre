import React,{ Component} from 'react';
import '../../assets/css/exchange.css';
import {Table} from 'reactstrap'

class Exchange extends Component{
  constructor() {
    super()
    this.url = 'https://api.exchangeratesapi.io/latest?base=CAD'
        this.state = {
             value:'',
            currentUSDCurrency:'',
         };
      
  }



  handleInput =(event)=>{
    if(isNaN(event.target.value) === false  || event.target.value==="." ){
      this.setState({
        value: event.target.value
      });
    }else{
      alert('Enter a number')
    }
    
}


loadQuote = () => {
  fetch(this.url)
  .then((response)=>{
      return response.json()
  })
  .then((data)=>{
      this.setState({
           currentUSDCurrency:{...data.rates},
            })

      
  })

} 

componentDidMount(){
  this.loadQuote()
}



  render() {
  return (
    <div className="exc-background">
        
        
       
          <div className="owner">
                 
                   <h3 className="exc-header title">DÖVİZ ÇEVİRİCİ    </h3>
                      <p className="description" >CAD <input onChange={this.handleInput} value={this.state.value}></input> </p>
                      
                      </div>
                    <table className="exc-table" dark>
                        <thead >
                            
                            <th>Para Birimi</th>
                            <th>Tutar</th>
                            <th>Recently</th>
                            
                        </thead>
                        <tbody>
                            <tr>
                           
                            <td>Türk Lirası </td>
                            <td>{Number(Math.round(this.state.value*this.state.currentUSDCurrency.TRY*100)/100)}</td>
                            <td>{ ' TRY = '}{Number(Math.round(this.state.currentUSDCurrency.TRY*100)/100)}</td>
                            </tr>
                            <tr>
                            
                            <td>ABD Doları</td>
                            <td>{Number(Math.round(this.state.value*this.state.currentUSDCurrency.USD*100)/100)}</td>
                            <td>{ ' USD = '}{Number(Math.round(this.state.currentUSDCurrency.USD*100)/100)}</td>
                            </tr>
                            <tr>
                           
                            <td>EURO</td>
                            <td>{Number(Math.round(this.state.value*this.state.currentUSDCurrency.EUR*100)/100)}</td>
                            <td>{ ' EUR = '}{Number(Math.round(this.state.currentUSDCurrency.EUR*100)/100)}</td>
                            </tr>
                        </tbody>
                    </table>
              
        
    
    </div>
  );
}}

export default Exchange;
