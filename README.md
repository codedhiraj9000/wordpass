# WordPass

WordPass is a JavaScript package that provides a simple yet effective password generator. It includes a special `wordPass` function that generates human-readable passwords by combining random skills and years, making them easier to remember.

## Features

- **Basic Password Generator**: Generate secure passwords of customizable length, including options for numbers, uppercase, and special characters.
- **WordPass Generator**: Create human-readable passwords using a randomly selected skill name and a year between 1920 and 2014.

## Installation

You can install WordPass via npm:


```bash
npm install wordpass
```

## Radom password generator 

Our wordpass moduel had basic password generator feature like random password making

#### Random password
```javascript

import passwordGenerator from "wordpass"

const password = passwordGenerator.randPass(8)
```
###### *Output*: `Ay9f63g7`

#### Random capital and small letters password
```javascript

import passwordGenerator from "wordpass"

const password = passwordGenerator.randCapsSmallPassword(8)
```
###### *Output*: `AyhrJlKb`

#### Random small letters and numbers password
```javascript

import passwordGenerator from "wordpass"

const password = passwordGenerator.randSmallNumPassword(8)
```
###### *Output*: `a86v7zk9`

#### Random capital letters and numebers password 
```javascript

import passwordGenerator from "wordpass"

const password = passwordGenerator.randCapsNumPassword(8)
```
###### *Output*: `W963KL8D`

#### Random numebers 0asswors
```javascript

import passwordGenerator from "wordpass"

const password = passwordGenerator.randNumPassword(8)
```
###### *Output*: `73927193`

#### Random small letters password
```javascript

import passwordGenerator from "wordpass"

const password = passwordGenerator.randSmallLtrPassword(8)
```
###### *Output*: `abfuelsm`

#### Random capital letters password
```javascript

import passwordGenerator from "wordpass"

const password = passwordGenerator.randCapsPassword(8)
```
###### *Output*: `ABDUEKSM`

#### Spacial human readable simpel password
```javascript

import passwordGenerator from "wordpass"

const simplePassword = passwordGenerator.wordpass()
```
###### *Output*: `@web developer.dhiraj(1999)`


## License

This project is licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

For more details, see the [LICENSE](./LICENSE) file in the root directory of this repository.

## 📫 Contact

- **Email:** [dhiraj](mailto:asubrodips.@gmail.com)
- **Instagram:** [@subrodip bhowmik](https://www.instagram.com/___its_yo_men_subrodip___?igsh=MXRmbHVtc3c1cDNxNQ==)
