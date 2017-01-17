# generator-v
> Yeoman generator for Vue.js

alias를 걸어 두시면 더욱 편리하게 사용하실 수 있습니다. `alias v='yo v'`

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

##### Example:
``` bash
$ yo v
```

##### Prompts
```
use import(Y/n)?
source path(./app/src)?
component members?
o el
o templates
o props
o data
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
Enter your imports(ex:import Vue from 'vue'):
test specs path(./test/unit/specs)?
use assertion?
> should
o expect
o expect.js
Enter your imports(ex:import Vue from 'vue')?
```

<a name="component"></a>
### Component
컴포넌트와 테스트케이스를 생성합니다.

##### Example:
``` bash
$ yo v:comp name
```

##### Options
- --skip-import: component를 생성할 때 import 구문을 넣지 않습니다.
- --skip-member: 옵션으로 지정한 맴버들을 추가하지 않는다.
- --skip-test: 테스트 케이스를 생성하지 않습니다.
- --skip-test-import: 테스트 케이스를 생성하면서 import 구문을 넣지 않습니다.

##### Produces `app/src/components/Name.vue`:
``` html
<template lang="html">

</template>
<script>
export default {
}
</script>
<style lang="css" scoped>
</style>
```

##### Produces `app/test/unit/specs/components/Name.spec.js`:
``` js
import Name from 'src/components/Name'
import ...

const target = 'Name'
describe(target, () => {
  it('works', () => {
    ...
  })
})
```
