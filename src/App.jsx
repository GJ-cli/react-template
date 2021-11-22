import { useEffect } from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from 'react-router-dom'
import routes from '@/routes'
import { ConfigProvider } from 'antd-mobile'
import zhCN from 'antd-mobile/es/locales/zh-CN'

export default function App() {
    useEffect(() => {
        // const location = useLocation()
        console.log(2)
    }, [])
    return (
        <div
            className="min-h-screen text-13px text-txt-default-color bg-bg-color mx-auto"
            style={{ maxWidth: '1024PX' }}
        >
            <ConfigProvider locale={zhCN}>
                <Router>
                    <Routes>
                        {routes.map(({ path, element }) => (
                            <Route path={path} element={element} key={path} />
                        ))}
                    </Routes>
                </Router>
            </ConfigProvider>
        </div>
    )
}
