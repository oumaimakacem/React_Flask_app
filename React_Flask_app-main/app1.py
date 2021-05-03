
# import libraries
from flask import Flask,request,session,redirect,url_for
from flask import jsonify
import time
import pickle
import json 
import sklearn
from sklearn import preprocessing
from xgboost import XGBClassifier
import pandas as pd
import numpy as np
#pip install scikit-learn==0.24.1
#pip install xgboost==0.90
#pip install numpy==1.19.5
#pip install pandas==1.1.5
app = Flask(__name__)
app.secret_key="hello"
global prediction
model = pickle.load(open('grad_correct scaling.pkl', 'rb'))
scaler = pickle.load(open('min_max_scaler scaling.pkl', 'rb'))
#### add imputation
@app.route("/",methods=["POST"])
def index():
    if request.method == "POST":
        request_data= json.loads(request.data)
        X_testt= list(request_data.values())
        X_testt=pd.DataFrame(X_testt)
        X_testt=X_testt.T    
        X_test_scaled=scaler.transform(X_testt)
        X_test_scaled=pd.DataFrame(X_test_scaled)
        X_test_scaled.columns=['Laboratory_test_L', 'Laboratory_test_N', 'Laboratory_test_ESR_(mm/hr)', 'Laboratory_test_CRP_(mg/L)', 'Laboratory_test_PCT_(ng/ml)', 'Laboratory_test_CK_MB_(ng/ml)', 'Laboratory_test_D_dimer_(ug/ml)', 'Laboratory_test_ALT_(U/L)', 'Laboratory_test_AST_(U/L)', 'Laboratory_test_ALB_(g/L)', 'Laboratory_test_LDH_(U/L)', 'Age', 'CK', 'O2%', 'Symptoms_Cough', 'Symptoms_Dyspnea', 'Symptoms_Fatigue'] 
        pred = model.predict(X_test_scaled)
        if pred ==0:
            prediction="not_severe"
        if pred ==1 :
            prediction="severe"
        print("severity prediction",prediction)
        #session["prediction"] = prediction
        return redirect(url_for('predictt'))

    

@app.route("/predict")
def predictt():
    
    #var =session.get("prediction")
    print("redirected")
    #resulat=jsonify({'pred': var})
    resulat=jsonify({'pred':"redicredc"})
    return resulat 
    #### refraichir react to get the final value, and make sure the data are not passed (not on change, submit issue)

   

if __name__ == '__main__':
   app.run(debug=True)
 
 