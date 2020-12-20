## tensorflowjs-demos

[在线预览](https://novlan1.github.io/tensorflowjs-demos/)

### http-server的使用

启动静态服务器的[命令行工具](https://www.npmjs.com/package/http-server)

```
hs data --cors
```


### async在浏览器中报错

解决：在package.json中添加：

```json
"browserslist": ["last 1 Chrome version"]
```

### 安装`node-gyp`

```bash
npm install node-gyp windows-build-tools@4.0.0
```


### 安装`tensorflow`

`nodejs`中安装`tensorflow`有两种

1. `node-gyp`安装比较费劲，c++编译有关
2. c++绑定的TensorFlow高速版本就是`@tensorflow/tfjs-node`，而一般版本是`@tensorflow/tfjs`


### 张量`tensor`

1. 张量是向量和矩阵向更高维度的推广
2. 相当于多维数组

```js
const a = tf.tensor([[1, 2, 3], [1, 2, 3]])
console.log(a) 
```
可以看到a的`shape`是`[2,3]`

第一个2代表最外层的数组有两个元素，3代表里面一层的数组有三个元素


### tensorflowjs切片
```
x.slice([1,0],[1,2])

x = [[1,2],[3,4]]
```

结果 => `[3,4]`

解释：
第一维从第2个开始，第二维从第1个开始，第一维取1个，第二维取2个

那么：`tf.tensor([1, 2])`的`shape`是`[2]`


### 过拟合

过拟合的经典图像：

- 验证集`loss`上升，训练集`loss`下降


解决过拟合

1. 早停止
2. 权重衰减（L2正则）
3. 丢弃法（dropout层）

L2正则化相当于权重衰减




### 池化层

1. **最大池化层用于提取最强的特征**
2. **扩大感受野，减少计算量**
3. 池化层没有权重要训练

### 安装tensorflow_converter

1. 先安装Conda
   - 搜索引擎搜索：`conda清华`，下载合适的包安装，可以选择mini版本，轻量，够用。
   - Conda安装的时候记得放到环境变量中
2. 使用 Conda 安装 python 虚拟环境
   - 具体命令见下文
3. 使用 python 虚拟环境安装`tensorflow_converter`，其实是安装全部的`tensorflowjs`
   - `pip install tensorflowjs` 

参考：[github链接](https://github.com/tensorflow/tfjs/tree/master/tfjs-converter)

### 迁移学习

1. 含义：把已训练好的模型参数迁移到新的模型来帮助新模型训练
2. 原因：深度学习模型参数多，从头训练成本高
3. 做法：删除原始模型的最后一层，基于截断模型的输出，训练一个新的（通常比较浅的）模型




#### Conda的常见命令

```bash
# 安装虚拟环境
conda create -n tfjs python=3.6.8  

# 删除虚拟环境
conda remove -n tfjs --all 

# 查看虚拟环境
conda info --envs 

# 激活虚拟环境
conda activate tfjs 

# 取消虚拟环境
conda deactivate 
```

```bash
python --version # 校验
```

另外，可以在用户主目录下的`.condarc`文件中添加镜像地址，提高下载速度

### keras和tfjs模型互转

#### keras模型转为tfjs模型

（1）转为layers模型
```
tensorflowjs_converter \
   --input_format=keras \
   --output_format=tfjs_layers_model \
   data\mobilenet\keras.h5 \
   data\mobilenet\web_model2 
```


（2）转为graph模型

```bash
tensorflowjs_converter \
    --input_format=keras \
    --output_format=tfjs_graph_model \
    data\mobilenet\keras.h5 \
    data\mobilenet\graph_model
```

#### tfjs模型转为keras模型

```
tensorflowjs_converter \
      --input_format=tfjs_layers_model \
      --output_format=keras \
      data\mobilenet\web_model\model.json \
      data\mobilenet\keras2.h5 
```




### 模型的分片、量化、加速

#### tfjs模型分片，每片大小100kb

```bash
tensorflowjs_converter \
    --input_format=tfjs_layers_model \
    --output_format=tfjs_layers_model \
    data\mobilenet\web_model\model.json \
    data\mobilenet\sharded_model \
    --weight_shard_size_bytes=100000 
```

#### 量化，即压缩模型二进制文件

只是加了这个参数`--quantize_uint16 2`


```bash
tensorflowjs_converter \
     --input_format=tfjs_layers_model \
     --output_format=tfjs_layers_model \
     --quantize_uint16 2 data\mobilenet\web_model\model.json  \
     data\mobilenet\quantized_model
```

#### 加速模型，就是把layers_model转为graph_model，从而拥有更快的速度，感谢图优化

```
tensorflowjs_converter \
    --input_format=tfjs_layers_model \
    --output_format=tfjs_graph_model \
    data\mobilenet\web_model\model.json \  
    data\mobilenet\graph_model2
```

### 其他

1. Adam优化器可以自动调节学习率
2. model的inputShape只有第一个dense层需要设置，中间的隐藏层会自动调整


```js
var ele = document.elementFromPoint(touch.pageX, touch.pageY);   
//根据坐标直接返回元素
// document.elementFromPoint()
```



### TODO

1. 编写`webpack-plugin`自动插入`tfjs/tfjs-vis`的CDN链接，而不是手动，并且删除`script.js`标签
2. 打包文件，报错TypeError: t.backend is not a function(speech-commands.min.js:17)