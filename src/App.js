import "./App.css";

import Left from "./components/Left.js";
import Right from "./components/Right.js";
import Register from "./components/Register";
import Account from "./components/Account";
import Select_Account from "./components/Select_Account";
import Verify_bussiness_details from "./components/Verify_bussiness_details";
import Verify_documents from "./components/Verify_documents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Congratulation from "./components/Congratulation";
import About_us from "./components/About_us.js";
import Saving_Account from "./components/Saving_Account";
import Manage_Accounts from "./components/Manage_Accounts";
import Saving_select_acc from "./components/Saving_select_acc";
import Account_details from "./components/Account_details";
import Apply_credit_debit from "./components/Apply_credit_debit";
import Manage_Accounts1 from "./components/Manage_Accounts1";
import Saving_Personal_details from "./components/Saving_Personal_details";
import  Account_details_notification from "./components/Account_details_notification";
import Sales_purchase from "./components/Sales_purchase";
import Sales_purchase_details from "./components/Sales_purchase_details";
import Sales_purchase_tax_details from "./components/Sales_purchase_tax_details";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Left />
                <Right />
              </>
            }
          />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/About_us" element={<About_us />} />
          <Route exact path="/Account" element={<Account />} />
          <Route exact path="/Select_Account" element={<Select_Account />} />
          <Route
            exact
            path="/Verify_bussiness_details"
            element={<Verify_bussiness_details />}
          />
          <Route
            exact
            path="/Verify_documents"
            element={<Verify_documents />}
          />
          <Route exact path="/Congratulation" element={<Congratulation />} />
          <Route exact path="/Saving_Account" element={<Saving_Account/>} />
          <Route exact path="/Manage_Accounts" element={<Manage_Accounts/>} />
          <Route exact path="/Saving_select_acc" element={<Saving_select_acc/>} />
          <Route exact path="/Account_details" element={<Account_details/>} />
           <Route exact path="/Apply_credit_debit" element={<Apply_credit_debit/>} />
           <Route exact path="/Manage_Accounts1" element={<Manage_Accounts1/>} />
           <Route exact path="Saving_Personal_details" element={<Saving_Personal_details/>} />
           <Route exact path="Account_details_notification" element={<Account_details_notification/>} />
           <Route exact path="Sales_purchase" element={<Sales_purchase/>} />
           <Route exact path="Sales_purchase_details" element={<Sales_purchase_details/>} />
           <Route exact path="Sales_purchase_tax_details" element={<Sales_purchase_tax_details/>} />
        </Routes>
        
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
