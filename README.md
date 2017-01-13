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

<!--

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
Enter is end
```
source path(./app/src)?
component members?
o el
o templates
o props
o data
o computed
o methods
o components
life cycles?
o created
o beforeMount
o mounted
o beforeUpdate
o updated
o beforeDestroy
o destroyed
tempate lang?
o html
o pug
o jade
style lang?
o css
o sass
o scss
append style scoped(Y/n)?
default imports?
o vue
Enter your imports(ex:import Vue from 'vue'):
test specs path(./test/unit/specs)?
default imports?
o vue
o axios
o axios-mock-adapter
o should
o expect
o chai
o sinon
o should-sinon
o chai-sinon
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
- --skip-member: 옵션으로 지정한 맴버들을 추가하지 않는다. 단, 파라메터로 넘겨주는 맴버들은 추가한다.
- --skip-life-cycle: 옵션으로 지정한 life-cycle 메소드들을 추가하지 않는다. 단, 파라메터로 넘겨주는 매소드들은 추가한다.
- --skip-test: 테스트 케이스를 생성하지 않습니다.
- --skip-test-import: 테스트 케이스를 생성하면서 import 구문을 넣지 않습니다.

##### Produces `app/src/components/Name.vue`:
``` html
<template>

</template>
<script>
export default {
}
</script>
<style scoped>
</style>
```

##### Produces `app/test/unit/specs/components/Name.spec.js`:
``` js
import Name from 'src/components/Name.vue'
import ...

describe('Name.vue', () => {
  it('works')
})
```
-->
