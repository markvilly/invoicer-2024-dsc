import { useState } from "react";

import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";
import TableForm from "./components/TableForm";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("DSC Company Limited");
  const [address, setAddress] = useState("Chole Road, Masaki");
  const [email, setEmail] = useState("shivazera@gmail.com");
  const [bankName, setBankName] = useState("ABSSA");
  const [bankAccount, setBankAccount] = useState("121342323");
  const [branch, setBranch] = useState("Palm Beach Premier");
  const [website, setWebsite] = useState("www.google.com");
  const [clientName, setClientName] = useState("Mama Barrick");
  const [clientAddress, setClientAddress] = useState("Masaki, DYC");
  const [invoiceNumber, setInvoiceNumber] = useState("12");
  const [invoiceDate, setInvoiceDate] = useState("1/1/2024");
  const [dueDate, setDueDate] = useState("1/10/2024");
  const [notes, setNotes] = useState("Pay through the DSC Bank details");
  const [phone, setPhone] = useState("0686384019");
  const [clientEmail, setClientEmail] = useState(
    "markpaulbusiness66@gmail.com"
  );
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rate, setRate] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="App">
      <main className="bg-white p-5 m-5 md:max-w-xl md:mx-auto lg:mx-auto xl:max-w-4xl rounded shadow">
        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />
            <MainDetails name={name} address={address} />
            <Dates
              invoiceDate={invoiceDate}
              invoiceNumber={invoiceNumber}
              dueDate={dueDate}
            />
            <ClientDetails
              clientName={clientName}
              clientAddress={clientAddress}
            />

            <Table
              description={description}
              quantity={quantity}
              rate={rate}
              amount={amount}
              list={list}
              setList={setList}
              total={total}
              setTotal={setTotal}
            />
            <Notes notes={notes} />
            <Footer
              name={name}
              address={address}
              website={website}
              email={email}
              branch={branch}
            />

            <button
              onClick={() => setShowInvoice(false)}
              className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 "
            >
              Edit information
            </button>
          </div>
        ) : (
          <>
            {/* name, address, client name, client address, invoice number, invoice date, due date, notes */}

            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Full Name</label>
                  <input
                    className="mb-5 mt-1 "
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="address">Address</label>
                  <input
                    className="mb-5 mt-1 "
                    type="text"
                    name="text"
                    id="address"
                    placeholder="Enter your Address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input
                    className="mb-5 mt-1 "
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="website">Website</label>
                  <input
                    className="mb-5 mt-1 "
                    type="url"
                    name="website"
                    id="website"
                    placeholder="Enter your website"
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="bankName">Bank Name</label>
                  <input
                    className="mb-5 mt-1 "
                    type="name"
                    name="bankName"
                    id="bankName"
                    placeholder="Enter your Bank Name"
                    autoComplete="off"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="branchName">Branch Name</label>
                  <input
                    className="mb-5 mt-1 "
                    type="name"
                    name="branchName"
                    id="branchName"
                    placeholder="Enter your Branch Name"
                    autoComplete="off"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                  />
                </div>
              </article>

              <label htmlFor="bankAccount">Bank Account Number</label>
              <input
                className=" mb-5 mt-1 "
                type="name"
                name="bankAccount"
                id="bankAccount"
                placeholder="Enter your Bank Account"
                autoComplete="off"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
              />

              <article className="md:grid grid-cols-2 gap-10 md:mt-20">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Client Name</label>
                  <input
                    className="mb-5 mt-1 "
                    type="name"
                    name="clientName"
                    id="clientName"
                    placeholder="Enter your client's name"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress">Client Address</label>
                  <input
                    className="mb-5 mt-1 "
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Enter your clientAddress"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="clientEmail">Client Email</label>
                  <input
                    className="mb-5 mt-1 "
                    type="text"
                    name="clientEmail"
                    id="clientEmail"
                    placeholder="Enter your clientEmail"
                    autoComplete="off"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone">Client Phone No</label>
                  <input
                    className="mb-5 mt-1 "
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10 ">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input
                    className="mb-5 mt-1 "
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Enter your invoiceNumber"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Invoice Date</label>
                  <input
                    className="mb-5 mt-1 "
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Enter your invoiceDate"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dueDate">Due Date</label>
                  <input
                    className="mb-5 mt-1 "
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Enter your Due Date"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>

              {/* OUR TABLE FORM */}

              <article>
                <TableForm
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  rate={rate}
                  setRate={setRate}
                  amount={amount}
                  setAmount={setAmount}
                  setList={setList}
                  list={list}
                  total={total}
                  setTotal={setTotal}
                />
              </article>

              <label htmlFor="notes">Addition Notes</label>
              <textarea
                className="mt-2 p-2  rounded"
                name="notes"
                id="notess"
                cols="30"
                rows="10"
                placeholder="additional notes to client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>

              <button
                onClick={() => setShowInvoice(true)}
                className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 "
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
