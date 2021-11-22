import '@/utils/index.js'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '@/store'
import App from './App'
import '/libs/amfe-flexible' // amfe-flexible 用于设置 rem 基准值,在html标签上加font-size 在postcss.config.js里面设置基准值
import 'virtual:windi.css'
import '@/assets/styles/index.less'

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
    document.getElementById('root')
)
