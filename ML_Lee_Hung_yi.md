# Machine Learning (2021) Mandarin Version
- https://www.youtube.com/playlist?list=PLJV_el3uVTsMhtt7_Y6sgTHGHp1Vb2P2J

# 【機器學習2021】預測本頻道觀看人數 (上) - 機器學習基本概念簡介
- [Slides](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbkVKWHF0bndkbmVBQTdMdVlfMVhuNko0dzRld3xBQ3Jtc0tsRzhvbDRuMGE0ckRGOUxCQ1pVUGtzVnNSUDdEQWU4eTJTMEJCTmRzZkpWSXM1LTRGbUdxaV9wSXZjMml4bTN2ZS1mVU1HOElHX21reHFDbUlvX0JvX2dEc0hfSWxOWmxPYkFCenMyS1hfU25wTTVwbw&q=https%3A%2F%2Fspeech.ee.ntu.edu.tw%2F%7Ehylee%2Fml%2Fml2021-course-data%2Fregression%2520%28v16%29.pdf) 
- Looking for a function
    - Regression: outputs a scalar (數字)
        - PM2.5
    - Classification: Given options(Classes)
        - 圍棋
    - Structured Learning
        - 學會創造
- Training
    1. Model:Function with unknown Parameters
        - y = b + wx1
            - w: weight
            - b: bias 
    2. Define Loss from Training Data 
        - Loss: how good a set of value is
            - MAE mean absolute error (取絕對值)
            - MSE mean square error (取平方)
            - Cross-entropy (計算機率分布)
        - Error Surface
    3. Optimization
        - Gradient Descent (梯度下降 / 取斜率)
            - learning rate η
        - hyperparameters (是自己決定的)
        - 計算上限
            - 自己設定計算次數上限
            - 微分為 0 的時候
                - 可能只找到 local minima，而沒有找到 global minim a
- Linear model
    - Model Bias 有很大的限制

# 【機器學習2021】預測本頻道觀看人數 (下) - 深度學習基本概念簡介

- [Slides](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbnBtQlVlTFlpWXVhQ0dnU2R4MHNRcUxfanhVQXxBQ3Jtc0tra2tMYlFJQ3FxZmMzWkNOUW5FMXVSUTQxYVNrcnhreVMxTlZsVVV4VG1WeEJXTjF4SHNfQnVUUzhDMVpqLTNMd2h0alNmbHktcUppNVB4Vmt2OFBRZVFRZ08wYWg1eC1HYll4bzBFaE1EOTJXQTRoSQ&q=https%3A%2F%2Fspeech.ee.ntu.edu.tw%2F%7Ehylee%2Fml%2Fml2021-course-data%2Fregression%2520%28v16%29.pdf)
- Piecewise Linear curves
- Activation function
    - Sigmoid function
        - S 型的 function
        - y = c sigmoid(b + wx1)
            - w slope 斜率
            - b shift 穿過Y軸位置
            - c height 高度
    - ReLu   Hard sigmoid(直線的 sigmoid)
        - ReLu Rectified Linear Unit 折線 / 整流線性單元
            - c max(0, b + w x1)

- 公式進化 
    - y = b + wx1 --> y = b + ∑ci sigmoid(bi + wix1)
    - y = b + ∑wjxj --> y = b + ∑ci sigmoid(bi + ∑wijx1)
    - 推倒後簡寫成向量
        - r = b + w x (b 是向量，這幾個變數都是向量)
        - a = σ (r)
        - y = b + c^T a (b 是數值)
        - 整合成 y = b + c^T σ ( b + w x)
            - 未知的 b c^T b w 全部整合成一個向量 θ
- Loss
    - 目標要找到 θ^* 最小，實務上不太可能找到 0
    - Pick initial values θ^0
    - compute gradient g = ▽L(θ)
    - θ^1 ← θ^0 - ηg
- Optimization of New Model
    - 將全部 N 分成幾個 batch 的 B
        - 一個 batch 可以 update 一次參數
        - 1 epoch = see all the batches once
            - 1 epoch 更新幾次取決於 Batch 大小
- Step
    1. function with unknown
    2. define loss from training data
    3. optimization
- Deep learning
    - 一個 sigmoid 視為一個 Neuron
    - Neural Network
    - hidden layers
    - Overfitting 很適合訓練資料，但新資料預測效果就不好
- 延伸學習
    - Basic Introduction https://youtu.be/Dr-WRlEFefw
    - Backpropagation https://youtu.be/ibJpTrp5mcE

# ML Lecture 7: Backpropagation
- Gradient Descent
    - Network parameters θ = { w1, w2 ,w3, ... ,b1, b2, b3, ...}
- To compute the gradient efficiently, we use backpropagation.
- Chain Rule
    - 
- Forward pass
- Backward pass

# NHL Stenden
- 作業之三 https://ayearofai.com/rohan-lenny-1-neural-networks-the-backpropagation-algorithm-explained-abf4609d4f9d
    - 更多學習
        - [Stanford’s CS231n](http://cs231n.stanford.edu/)
            - http://cs231n.stanford.edu/syllabus.html
        - [MIT 6.034](http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/)
            - https://www.youtube.com/watch?v=q0pm3BrIUFo
- Google 資源
    - https://developers.google.com/machine-learning/gan/generative