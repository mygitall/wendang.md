
| 类型 | 范围 | 状态 |
| :--- | :--- | :--- |
| 全局Rules | 所有项目 | ✅ |
| .cursor/rules/**.mdc | 项目规则，放在项目根目录 | ✅|


###### 全局规则。设置里搜索
```
rules,skills,subagents 
```
```
# HTML 自动构建规范（全自动生效）
1. 所有页面必须使用 Tailwind CSS 构建
2. 自动在 HTML 头部引入 Tailwind CDN
3. 自动应用项目自定义 Tailwind 配置
4. 严格遵循 apple-linear-vercel-ui.mdc 设计规范
5. 自动使用深色主题 + 玻璃卡片风格
6. 自动使用项目自定义类名：bg-darkBg、bg-card、borderLine、rounded-card、rounded-button
7. 页面必须响应式适配手机/平板/桌面
8. 所有交互组件必须包含 hover / focus 效果
9. 代码结构完整、可直接运行、无错误
10. 布局使用 Bento Grid，留白充足
```
