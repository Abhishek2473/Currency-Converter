import { useState } from 'react'
import useCurrencyInfo from './hooks/usecurrencyinfo'
import { InputBox } from './components'

function App() {
  const [amount, setAmount] = useState()
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
const [resAmount,setResAmount]=useState()

const currinfo=useCurrencyInfo(from)

const options=Object.keys(currinfo)

const swap=()=> {
  setFrom(to)
  setTo(from)
  setResAmount(amount)
  setAmount(resAmount)
}

const convert=()=>{
setResAmount(amount*currinfo[to])
}
return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <h1 className='text-3xl text-black text-center justify-center my-5 bg-white rounded-md text-bold py-3'>Currency Converter</h1>
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert()
                     
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOptions={options}
                          onCurrencyChange={(currency)=>
                          setFrom(currency)
                          }
                          onAmountChange={(amount)=>{
                            setAmount(amount)
                          }}
                          selectCurrency={from}

                          
                      />
                      
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          SWAP
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={resAmount}
                          currencyOptions={options}
                          onCurrencyChange={(currency)=>
                          setTo(currency)
                          }
                          selectCurrency={to}
                          
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
