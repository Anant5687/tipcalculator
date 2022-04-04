import './App.css';
// import Home from './Pages/Home';
// import ExpenseItem from './Expenses/ExpenseItem';
import Pages from './Pages/Pages';
const  App=()=>{
    // let arr = [
    //     {
    //         id:"id1",
    //         date:new Date(2021, 8, 13),
    //         title:"Car Insaurance",
    //         expense:400
    //     },
    //     {
    //         id:"id2",
    //         date:new Date(2022, 7, 14),
    //         title:"Cycle Insaurance",
    //         expense:400
    //     },
    //     {
    //         id:"id1",
    //         date:new Date(2021, 8, 15),
    //         title:"Train Insaurance",
    //         expense:40000
    //     },
    //     {
    //         id:"id4",
    //         date:new Date(2021, 10, 16),
    //         title:"Bike Insaurance",
    //         expense:40
    //     }
    // ]
    return(<>
         <Pages/>
      {/* <Home/> */}


         {/* <h1>Project is started</h1>
       <ExpenseItem date={arr[0].date} title={arr[0].title} expense = {arr[0].expense}/>
       <ExpenseItem date={arr[1].date} title={arr[1].title} expense = {arr[1].expense}/>
       <ExpenseItem date={arr[2].date} title={arr[2].title} expense = {arr[2].expense}/>
       <ExpenseItem date={arr[3].date}title={arr[3].title} expense = {arr[3].expense}/> */}
        </>
    )
};

export default App;
