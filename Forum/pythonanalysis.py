from keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import sys
import pickle
import numpy as np
import joblib
from tensorflow.keras.models import load_model

import warnings

def predict(text,model,tokenizer):
    MAX_NB_WORDS = 50000
    MAX_SEQ_LEN = 300
    EMBEDDING_DIM = 100
    # Convert the text into sequence of integers
    #tokenizer = Tokenizer(num_words=MAX_NB_WORDS, filters='!"#$%&()*+,-./:;<=>?@[\]^_`{|}~', lower=True)
    new_data_seq = tokenizer.texts_to_sequences(text)

    # padding
    new_data_seq_padded = pad_sequences(new_data_seq, maxlen=MAX_SEQ_LEN)

    #predict
    predictions = model.predict(new_data_seq_padded,verbose=None)

    # The result, predictions, is an array of probabilities for each class. 
    # We can convert these probabilities into class labels as follows:
    predicted_classes = np.argmax(predictions, axis=1)

    return predicted_classes

def main():
    warnings.filterwarnings("ignore")
    model = pickle.load(open('model2.pkl', 'rb'))
    m_jlib = joblib.load('model_jlib') 
    tokenizer_d = joblib.load('tokenizer.pkl')
    # load model
    modelk = load_model('model.h5')
    if len(sys.argv) < 2:
        text = ["Finally 2020 is almost over... So I can never hear 2020 has been a bad year ever again. I swear to fucking God it's so annoying"]
        res = predict(text,modelk,tokenizer_d)
        print(res)
        return
    
    
    argument = sys.argv[1]
  
    #print(f"Argument provided: {argument}")
    res = predict([argument],modelk,tokenizer_d)
    print(res)

if __name__ == "__main__":
    main()




