import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import FormInput from "./component/FormInput";
import FormInput3 from "./component/FormInput3";
import "bootstrap/dist/css/bootstrap.min.css";
import FormButton from './component/FormButton2';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
function App() {
  const [prediction, setprediction] = useState(0);

  const [laboratory_test_L, setLaboratory_test_L] = useState(0)
  const [laboratory_test_N, setLaboratory_test_N] = useState(0)
  const [laboratory_test_ESR, setLaboratory_test_ESR] = useState()
  const [laboratory_test_CRP, setLaboratory_test_CRP] = useState()
  const [laboratory_test_PCT, setLaboratory_test_PCT] = useState()
  const [laboratory_test_CK_MB, setLaboratory_test_CK_MB] = useState()
  const [laboratory_test_D_dimer, setLaboratory_test_D_dimer] = useState()
  const [laboratory_test_ALT, setLaboratory_test_ALT] = useState()
  const [laboratory_test_AST, setLaboratory_test_AST] = useState()
  const [laboratory_test_ALB, setLaboratory_test_ALB] = useState()
  const [laboratory_test_LDH, setLaboratory_test_LDH] = useState()
  const [age, setAge] = useState()
  const [cK, setCK] = useState()
  const [o2, setO2] = useState()
  const [symptoms_Cough, setSymptoms_Cough] = useState()
  const [symptoms_Dyspnea, setSymptoms_Dyspnea] = useState()
  const [symptoms_Fatigue, setSymptoms_Fatigue] = useState()
  var handle1Change = (text) => {
    setLaboratory_test_L(text)
}
var handle2Change = (text) => {
  setLaboratory_test_N(text)
}
var handle3Change = (text) => {
  setLaboratory_test_ESR(text)
}
var handle4Change = (text) => {
  setLaboratory_test_CRP(text)
}
var handle5Change = (text) => {
  setLaboratory_test_PCT(text)
}
var handle6Change = (text) => {
  setLaboratory_test_CK_MB(text)
}

var handle7Change = (text) => {
  setLaboratory_test_D_dimer(text)
}
var handle8Change = (text) => {
  setLaboratory_test_ALT(text)
}
var handle9Change = (text) => {
  setLaboratory_test_AST(text)
}
var handle10Change = (text) => {
  setLaboratory_test_ALB(text)
}
var handle11Change = (text) => {
  setLaboratory_test_LDH(text)
}
var handle12Change = (text) => {
  setAge(text)
}
var handle13Change = (text) => {
  setCK(text)
}
var handle14Change = (text) => {
  setO2(text)
}
var handle15Change = (text) => {
  setSymptoms_Cough(text)
}
var handle16Change = (text) => {
  setSymptoms_Dyspnea(text)
}
var handle17Change = (text) => {
  setSymptoms_Fatigue(text)
};


fetch('/',
{ 
  method:"POST",
  body :JSON . stringify({ 'Laboratory_test_L':laboratory_test_L, 'Laboratory_test_N':laboratory_test_N, 'Laboratory_test_ESR_(mm/hr)':laboratory_test_ESR, 'Laboratory_test_CRP_(mg/L)':laboratory_test_CRP, 'Laboratory_test_PCT_(ng/ml)':laboratory_test_PCT, 'Laboratory_test_CK_MB_(ng/ml)':laboratory_test_CK_MB, 'Laboratory_test_D_dimer_(ug/ml)':laboratory_test_D_dimer, 'Laboratory_test_ALT_(U/L)':laboratory_test_ALT, 'Laboratory_test_AST_(U/L)':laboratory_test_AST, 'Laboratory_test_ALB_(g/L)':laboratory_test_ALB, 'Laboratory_test_LDH_(U/L)':laboratory_test_LDH, 'Age':age, 'CK':cK, 'O2%':o2, 'Symptoms_Cough':symptoms_Cough, 'Symptoms_Dyspnea':symptoms_Dyspnea, 'Symptoms_Fatigue':symptoms_Fatigue,
})
  ,})
  
useEffect(() => {
  fetch('/predict')
   
    .then(res => res.json())
      .then(data => {
        setprediction(data.pred);
      });
  });


   
  return (
    <div style={{backgroundColor:"rgba(171, 235, 198)",backgroundsize: "cover"}}>
      <div class="row">
<div class=" d-flex  m-4 col-md-6  " >
        <MDBContainer  >
              <MDBRow>
                <MDBCol >
                  <MDBCard>
                  <form>
                  <h2 class="font-weight-bold text-center p-5 text-primary">les 17 variables du modèle</h2>
                  
       <FormInput placeholder="laboratory_test_L" type="decimal-pad"type="number" onChangeText={handle1Change} required/>
       <FormInput placeholder="laboratory_test_N" type="decimal-pad"type="number" onChangeText={handle2Change} required/>
       <FormInput placeholder="laboratory_test_ESR" type="decimal-pad"type="number" onChangeText={handle3Change} required />
       <FormInput placeholder="laboratory_test_CRP" type="decimal-pad"type="number" onChangeText={handle4Change} required />
       <FormInput placeholder="laboratory_test_PCT" type="decimal-pad"type="number" onChangeText={handle5Change} required />
       <FormInput placeholder="laboratory_test_CK_MB" type="decimal-pad"type="number" onChangeText={handle6Change}required/>
       <FormInput placeholder="laboratory_test_D_dimer" type="decimal-pad"type="number" onChangeText={handle7Change} required />
       <FormInput placeholder="laboratory_test_ALT" type="decimal-pad"type="number" onChangeText={handle8Change} required />
       <FormInput placeholder="laboratory_test_AST" type="decimal-pad"type="number" onChangeText={handle9Change}required />
       <FormInput placeholder="laboratory_test_ALB" type="decimal-pad"type="number" onChangeText={handle10Change}required />
       <FormInput placeholder="laboratory_test_LDH" type="decimal-pad"type="number" onChangeText={handle11Change} required />
       <FormInput placeholder="Age" type="decimal-pad"type="number" onChangeText={handle12Change} required/>
       <FormInput placeholder="cK" type="decimal-pad"type="number" onChangeText={handle13Change}required />
       <FormInput placeholder="o2%" type="decimal-pad"type="number" onChangeText={handle14Change} required/>
       <FormInput placeholder="symptoms_Cough" type="decimal-pad"type="number" onChangeText={handle15Change}required />
       <FormInput placeholder="symptoms_Dyspnea" type="decimal-pad"type="number" onChangeText={handle16Change} required/>
       <FormInput placeholder="symptoms_Fatigue" type="decimal-pad"type="number" onChangeText={handle17Change} required/>
       <FormButton class="p-3" title="Predict" />
       
       </form> 
       <p> "prediction est "{prediction}</p> 
                    
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
              </div>
      </div>
  
      </div>
  );
}

export default App;
