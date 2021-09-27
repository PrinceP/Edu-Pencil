# Air Pencil
## _Learning by Doing_

Checkout the 
[demo](https://www.youtube.com/watch?v=AUvp1d8GgXE "Air Pencil")

![Demo](/readme_images/demo.gif)




**AIR PENCIL** is a part of the TensorFlow Lite for Microcontroller Experiments [Challenge](https://experiments.withgoogle.com/tfmicrochallenge), adding to a collection of open source, interactive projects designed to demonstrate some fun ways to combine Arduino and TensorFlow Lite for Microcontrollers. 

These projects were built with the 

- [Arduino Sense 33 BLE](https://store.arduino.cc/usa/nano-33-ble-sense "Arduino Store")
- [TensorFlow Lite for Microcontrollers](https://www.tensorflow.org/lite/microcontrollers "TFL4M")
- Standard web technologies ( HTML, CSS & Javascript ) and [p5.js](https://p5js.org/ "p5js") ✨

**Other experiments to explore:**
- [Air Snare](https://experiments.withgoogle.com/air-snare "Air Snare Google Experiment") lets you play the drums in the air.
- [Tiny Motion Trainer](https://experiments.withgoogle.com/tiny-motion-trainer "Tiny Motion Trainer") lets you train and test IMU based TFLite models in the browser.
- [Morning Mountain](https://experiments.withgoogle.com/visual-alarm-clock "Morning Mountain Google Experiment") lets you stop your alarm clock from ringing by striking a pose.
- [Astrowand](https://experiments.withgoogle.com/astrowand "Astrowand Google Experiment") lets you draw shapes in the air to form constellations.
- [Finger User Interface](https://experiments.withgoogle.com/finger-user-interface "FUI Google Experiment") or FUI (pronounced Foo-ey) lets you control connected devices with the wave of a finger.

## Tools

- Linux, MacOS or Windows computer with [Chrome](https://www.google.com/chrome/?brand=WHAR&geo=US&gclid=Cj0KCQjw9_mDBhCGARIsAN3PaFNRBCVUxmhR1QPA2LHaoELEr9yc1KkSNQ-Jc9KVZd8Sq2ux5gR6mJsaAm_6EALw_wcB&gclsrc=aw.ds "Chrome") installed
- TensorFlow Lite for Microcontroller Challenge Kit or [Arduino Nano BLE Sense 33](https://store.arduino.cc/usa/nano-33-ble-sense "Arduino Nano")
- [Micro USB](https://www.google.com/search?rlz=1C5CHFA_enUS858US858&sxsrf=ALeKk01CbJTvQbYgX6arJbsjcRVmv-3-RQ:1584929968297&q=Micro+USB+cable&spell=1&sa=X&ved=2ahUKEwjl8IOexK_oAhXDqZ4KHZ0mCmcQBSgAegQIDhAn&biw=1680&bih=832 "Micro USB") cable (If you're on a USB-C laptop, instead get a [USB-C to Micro USB](https://www.google.com/search?&q=USB-C+to+Micro+USB+cable "USB-C to Micro USB") cable)
- Rubberband
- [Optional] Battery

## Flashing Arduino Nano

Flashing: Using the Arduino Nano Sense 33 BLE

1. Install the [Arduino IDE ](https://www.arduino.cc/en/software "Arduino IDE")
2. Setup Arduino board:
-  Plug in the board
- Install the board by navigating to Tools > Board > Boards Manager and search for  Arduino Mbed OS Nano Boards. Full instructions (including drivers required for Windows) [here.](https://www.arduino.cc/en/Guide/NANO33BLESense/ "Arduino Guide")
- FAQ for connection problems can be found [here.](https://github.com/tinyMLx/appendix/blob/main/ArduinoFAQ.md "Arduino Guide") 
- After the board is installed, select it under to Tools > Board >  Arduino Mbed OS Nano Boards > Arduino Nano 33 BLE
![Arduino board](/readme_images/board.png)

- Select the port by navigating to Tools -> Port -> dev/cu... (Arduino Nano 33 BLE)
![Arduino Port](/readme_images/port.png)


3. Install Arduino libraries 
-  Navigate to Tools > Manage Libraries
- Search for and install:
- Arduino_LSM9DS1
- ArduinoBLE
- Arduino_TensorFlowLite
![Manage libraries](/readme_images/library.png)
![TensorFlow Lite Library](/readme_images/tflib.png)

4. Open the sketch and flash
- Download the latest relase of tf4micro motion kit [here](https://github.com/googlecreativelab/tf4micro-motion-kit/releases/latest "file")
- Open the **arduino/tf4micro-motion-kit** <folder> and double click on <tf4micro-motion-kit.ino> file
- Click the Right arrow in the top left corner to build and upload the sketch.  
![Arduino Port](/readme_images/buttons.png)

- **Warning**: This process may take a few minutes. Also, warnings may populate but the upload should still succeed in spite of them.
- If the sketch is installed, the LED on the board should flash red and green. 


5. Go to the URL related to the experiment. The URL can be found below and play!
- [Finger User Interface (FUI)](https://experiments.withgoogle.com/finger-user-interface/view "FUI")

----

### Using the TensorFlow Microcontroller Challenge Kit by SparkFun
 
The board that comes with the TensorFlow Microcontroller Challenge Kit by SparkFun comes preflashed with a sketch that will work with some of the experiments right out of the box. If you are using one of the “TensorFlow Micro” kits and you just want to jump right into playing with the experiments then you can simply connect your arduino to a power source (USB or Battery) and connect to one of the following experiment URLs:
- [Air Snare](https://experiments.withgoogle.com/air-snare/view "Air Snare")
- [Finger User Interface (FUI)](https://experiments.withgoogle.com/finger-user-interface/view "FUI")
- [Tiny Motion Trainer](https://experiments.withgoogle.com/tiny-motion-trainer/view "Tiny Motion Trainer")

----

### FAQ & Common Errors

**What exactly is being transferred when I “connect”?**
When you’re connecting the board to your computer, a pre-trained TensorFlow Lite machine learning model gets transferred over BLE onto the device. The sketches that are uploaded to the Arduino include a common TensorFlow Lite for Microcontrollers Experiments model architecture. The different experiment websites change the behavior of the sketch by changing the model to one specifically made for the experience. 


**What if I’m having issues connecting via bluetooth?**
If you are having issues connecting try the following: 
1. Make sure your browser (Chrome or Edge) supports Bluetooth and it is enabled.
2. Make sure your device (laptop, phone, etc) supports Bluetooth and that it is working and enabled.
3. Refresh the web page, unplug the Arduino power cable and then plug it back in to reset, then try connecting again.

*NOTE: If you’re using a managed device, like a computer from school or work, your device policy may prevent BLE pairing.*

**My board isn’t showing up on my computer, even though it’s plugged in. What should I do?**
Try unplugging the Arduino power cable and then plug it back in to reset. Make sure you see the RGB LED blink red, green, blue in a sequential order.

**The model isn’t getting my movements right. What do I do?**
The way you move may be different from the data we used to pre-train the model. Different people move differently. That’s why we created [Tiny Motion Trainer](https://experiments.withgoogle.com/tiny-motion-trainer/view "Tiny Motion Trainer"), which lets you train a custom model based on the way you move. 


**Where should I go from here if I want to make my own model or project?**
You can create your own model in several different ways. Check out these links: 
- [Experiments Collection](https://experiments.withgoogle.com/collection/tfliteformicrocontrollers/ "Experiments Collection") - Inspiration and more resources
[Tiny Motion Trainer](https://experiments.withgoogle.com/tiny-motion-trainer/view "Tiny Motion Trainer") - Code-free motion trainer for microcontrollers
- [Teachable Machine](https://teachablemachine.withgoogle.com/ "Teachable Machine") - Code-free image model trainer
- [TensorFlow Lite for Microcontrollers](https://www.tensorflow.org/lite/microcontrollers "TensorFlow Lite for Microcontrollers") - Full documentation 
- [Free Harvard EdX Course](https://www.edx.org/professional-certificate/harvardx-tiny-machine-learning "Harvard X Course")  - In-depth course on TensorFlow Lite for Microcontrollers and the TinyML Ecosystem `

**"What sensors do the experiments use?"**<br/>
The IMU is a LSM9DS1. It is a 3-axis accelerometer, 3-axis gyroscope and 3-axis magnetometer. This chip, made by ST Microelectronics, is a standard component supported by our library ArduinoLSM9DS1. Read more here: https://www.arduino.cc/en/Guide/NANO33BLESense

**How do you shrink a TensorFlow model to fit on a microcontroller?**<br/>
Post-training quantization is a conversion technique that can reduce model size while also improving CPU and hardware accelerator latency, with little degradation in model accuracy. You can quantize an already-trained float TensorFlow model when you convert it to TensorFlow Lite format using the TensorFlow Lite Converter. Read more here: https://www.tensorflow.org/lite/performance/post_training_quantization



## ML Model

Air pencil is built with [Tiny Motion Trainer](https://experiments.withgoogle.com/tiny-motion-trainer "Tiny Motion Trainer"), it lets you train and test IMU based TFLite models in the browser.

- Get the kit.
 
![Initial](/readme_images/challenge_kit.jpg)

- Setup the pencil
 
![Initial](/readme_images/initial_setup.jpg)
![Initial](/readme_images/final_setup.jpg)


- Connect the Arduino Nano to micro-usb. It will start blinking.
 
![Arduino Initial](/readme_images/intial_arduino.gif)

- Intiailize the parameters for the motion capture. 
1. Capturing threshold = 0.2 
2. Number of samples = 30
3. Delay = 0.3

- Capture all the data with at least 20 samples.
 

![Capture1.png](/readme_images/capture2.gif)                                                               | ![Result.png](/readme_images/capture1.gif)
:------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------:
**Gesture  /** : *A forward slant gesture training* | ***Captured dataset***



- Training and Testing

![Train.png](/readme_images/training.gif)                                                               | ![Test.png](/readme_images/testing.gif)
:------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------:
**Train the model** | **Test using the same setup**

- Download the quantized model

- Replace the model and its parameters in sketch.js file.

## Installation

Air Pencil requires [Node.js](https://nodejs.org/) v10+ to run.
You need live-server-https, python2 or 3 installed
```sh
cd Edu-Pencil
npm install
sh serve.sh
```
Then go to https://localhost:8181 in your browser and follow instructions



## License

MIT


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
