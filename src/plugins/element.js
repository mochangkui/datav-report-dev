import Vue from 'vue'
import { Row, Col, Card } from 'element-ui'

Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Card.name, Card)
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */
