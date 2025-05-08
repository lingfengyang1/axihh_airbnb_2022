import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
// 我们在引入ui组件库时 难免会对我们原有的项目产生一些意外的修改 比如引入ant-design库时 他会对所有的元素的box-sizing都重置为border-box 但有些元素实际上是想维持content-box的 因此的话 你可以为某些元素在重置为content-box即可
import "antd/dist/antd.less"

import App from '@/App';
import { Provider } from 'react-redux';
import store from './store/index';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    /** 
     * 当Suspense组件包裹在Provider组件之外时 那么Suspense等待组件懒加载的过程中是不会渲染任何组件的(包括Suspense组件) 直到懒加载完毕后 那么会导致懒加载完毕异步组件发送事件时 由于Provider组件仍处于未渲染状态因此未监听到事件以更新store 从而仍然传递旧的store给App
     * 解决方案就是让Provider组件包裹Suspense组件 这样的话 即使懒加载的过程中依旧能够保证Provider组件渲染 因此的话 在懒加载完毕发送事件时 由于组件渲染便可以成功监听到事件
     * 
     * Suspense的执行流程：
     * 首先会进行第一次尝试渲染Suspense的子组件 当遇到其中的懒加载语句时 就会以fallback代替子组件进行展示
     * 当懒加载执行完毕后 就会重新渲染Suspense的子组件以代替占位的fallback 
     * 所以一共会经历两次渲染 如果你只想要路由组件(重点就是路由组件是懒加载组件)而不影响到路由组件以外的其他子组件的同步加载的话 那么你就不应该将Suspense包裹在App组件之外 而是需要将其包裹在App组件内部的路由组件之外
     *  */
    <Provider store={store}>
      
        <ThemeProvider theme={theme}>
            <HashRouter>
              <App />
            </HashRouter>
            
        </ThemeProvider>
    </Provider>
  // </React.StrictMode>
);
