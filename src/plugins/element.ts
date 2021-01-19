import { ElButton, ElInput } from 'element-plus'

import 'element-plus/lib/theme-chalk/el-button.css'
import 'element-plus/lib/theme-chalk/el-input.css'

import app from '../utils/getInstance'

app
  .use(ElButton)
  .use(ElInput)
