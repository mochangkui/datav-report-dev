import Vue from 'vue'
import { Row, Col, Card, Menu, MenuItem, RadioGroup, RadioButton, DatePicker } from 'element-ui'

Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Card.name, Card)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(RadioButton.name, RadioButton)
Vue.component(DatePicker.name, DatePicker)
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */
