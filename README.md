# BitNovex-Blockchain-Explorer
Block explorer for BitNovex CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon BitNovexd. It should be accessible from the Internet. Run BitNovexd with open port as follows:
```bash
./BitNovexd --enable-cors="*" --enable-blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=35223
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.


### Development

Donate: [BTNX] btndEaft61oABpYFBZzLohYBEPSRduV3bMa2LX9mEjcmJJjFwFBVD7TPBg45aTQyYjHxfG9DHvCmXfLLMN8ubiJ46GrxcXS5s5

### Note

A lot of this code is from the great Karbovanets/Karbowanec-Blockchain-Explorer
