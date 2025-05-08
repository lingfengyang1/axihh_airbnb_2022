import React, { Suspense, memo } from 'react'
import "./assets/css/index.less"
import "normalize.css"
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import {useScrollTo} from './hooks'

/**
项目搭建：
配置项目标题
配置项目图标
配置jsconfig.json文件 该文件用于增强vscode的智能提示(特别是对于路径的智能提示)
通过craco来增加webpack配置(别名、less等)、不建议直接修改webpack源码
项目目录：
assets--存放静态资源 比如css/img等等
base-ui--多个项目共享的组件
components--当前项目独有的组件
store--redux仓库
router--路由
services--网络请求
utils--工具
views--视图 路由切换的组件
hooks--钩子函数 

如果我们想要进行webpack的别名配置或者less配置的话 建议使用craco来合并配置而不要直接修改源码
在项目中创建craco.config.js来配置要合并到webpack中的配置 同时package.json的scripts字段中的create-react-app均要修改为craco方可将craco.config.js合并到webpack配置中
而针对less的配置我们需要另外安装craco-less 并且在craco.config.js中做相应的配置

对于样式重置而言 我们一般需要两种文件 一个是npm包(normalize.css)--他已经提供了默认的重置样式 一个则是我们自己定制的重置样式文件reset.less

路由配置：
我们会通过独立文件来配置路由映射关系 并且在views目录中配置路由跳转组件 由于映射关系中跳转的组件都是懒加载 因此的话 需要配置Suspense作为占位符来应付加载过程中的空窗期 同时还需要路由采用的模式是Hash模式还是history模式

store配置：
有两种方式(①普通方式 ②rtk方式 可以混用) 导入@reduxjs/toolkit时 默认已经导入了普通方式所依赖的redux 但是两种方式都需要导入react-redux来为二者产生联系

我们大致会将网站分成三个部分：header、content、footer 
对于header的搭建 由于不同的路由组件中的header效果比较不同 因此的话 最容易的做法是在不同的路由组件中定义多个header组件实例以设置不同效果的header 还有一种做法是属于比较复杂的做法 即直接在app组件中定义一个header组件实例然后再多个路由组件中共享需要为这一个组件实例设置多种不同的展示效果难度比较大 我们会采用不同路由组件共享同一个header组件的方案
我们会将header组件划分成左中右三个部分 由于这每一个部分的逻辑均比较复杂 因此的话 我们依旧选择将他们封装成一个个组件 并且左中右三部分中由于中间部分需要始终保持居中 因此的话 我们对中间部分采取包裹内容的做法而左右部分采取平分剩余空间的做法
我们在做一个模块时尽量考虑一下他的逻辑复杂性或者说网站中的高复用性来决定是否要封装为一个组件以供多个模块复用

如果我们要集成ui组件库的话 这边有两个选择(①mui ②ant design) 每个组件库中的组件肯定都包含两个部分(jsx、css) mui中css编写采用的方案是css in js(官方不推荐styled-components的实现方案 而大力支持emotion实现方案) 而ant desigin中css编写所采取的方案则是less 
*/
const App = memo(() => {
  // 当监听到路由组件/路径改变时 需要让新组件回到顶部
  useScrollTo()

  return (
    <div className='app'>
      {/* <div className="header">header</div> */}
      <AppHeader/>
      <Suspense fallback="loading">
        <div className="content">
          {
            useRoutes(routes)
          }
        </div>
      </Suspense>
      {/* <div className="footer">footer</div> */}
      <AppFooter/>
    </div>
  )
})

export default App
