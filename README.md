# generator-v [![Build Status](https://travis-ci.org/gongzza/generator-v.svg?branch=master)](https://travis-ci.org/gongzza/generator-v)
> Yeoman generator for Vue.js


## Usage
Install `yo`, `gongzza/generator-v`:
``` bash
$ npm install --global yo gongzza/generator-v
```

Run `yo v`, 구성요소를 물어봅니다:
``` bash
$ yo v
```

## Generators
Available generators:
* [App](#app)
* [Component](#component)

<a name="app"></a>
### App
생성에 필요한 정보를 물어봅니다.

입력받은 정보를 `.yo-rc.json`에 저장합니다.

`.yo-rc.json`의 내용은 언제든지 바꾸실 수 있습니다.<br>
사용자로부터 입력받지 않는 내용도 있습니다.
- suffixScript: .vue
- testSuffixScript: .spec.js

##### Example:
``` bash
$ yo v
```

##### Prompts
```
use semi-colon(y/N)?
use import(Y/n)?
Enter source path(./app/src):
component members?
o props
o computed
o methods
o components
tempate lang?
> html
o pug
o jade
style lang?
> css
o sass
o scss
append style scoped(Y/n)?
ex) vue[:vue] -> import vue from 'vue' or var vue = require('vue'):
Enter your src imports(ex: vue[:vue])
Enter test specs path(./test/unit/specs):
ex) vue[:vue] -> import vue from 'vue' or var vue = require('vue'):
ex) var Ctor = Vue.extend -> var Ctor = Vue.extend(Name)
Enter your constructor:
```

<a name="component"></a>
### Component
컴포넌트와 테스트케이스를 생성합니다.

`data()`멤버는 기본으로 추가되어 있습니다.

`life cycle`은 화면을 이뿌게 뿌리기 힘들어서 추가하지 않았습니다.

##### Example:
``` bash
$ yo v:comp Comp
```

##### Options
- --skip-import: component를 생성할 때 import 구문을 넣지 않습니다.
- --skip-member: 옵션으로 지정한 맴버들을 추가하지 않는다.
- --skip-test: 테스트 케이스를 생성하지 않습니다.
- --skip-test-import: 테스트 케이스를 생성하면서 import 구문을 넣지 않습니다.

##### Produces `app/src/components/Comp.vue`:
``` html
<template lang="html">

</template>
<script>

export default {
  data() {
    return { }
  }
}
</script>
<style lang="css" scoped>
</style>
```

##### Produces `app/test/unit/specs/components/Comp.spec.js`:
``` js
import Comp from 'src/components/Comp'
// user imports
import Vue from 'vue'

describe('Comp.vue', () => {
  var Ctor = Vue.extend(Comp)

  it('textContent')
})
```
