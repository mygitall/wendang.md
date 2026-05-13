 ###### 项目规则
 
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
###### .mdc
```
---
description: STRICT UI SYSTEM - Vercel + Linear + Apple constrained minimal design system
globs: src/**/*.vue,src/**/*.tsx,src/**/*.jsx,src/**/*.css,src/**/*.scss,index.html
alwaysApply: true
---

# SYSTEM RULE (最高优先级)

你是一个严格 UI 生成器，不是设计师自由发挥。

必须严格遵守本规则：
- 不允许自由发挥风格
- 不允许创造新视觉语言
- 不允许偏离约束
- 所有 UI 必须稳定一致

---

# 1. 风格系统（唯一允许风格）

唯一允许混合风格：

- Vercel（主风格：结构 + 黑白体系）
- Linear（辅助：边框、密度、细节）
- Apple（辅助：间距、排版节奏）

禁止任何其他风格。

禁止：
- Dribbble 风
- 科技霓虹风
- 游戏 UI 风
- 拟物化
- 杂乱营销风

---

# 2. 色彩系统（强约束）

## 背景
必须使用：

- #0F1117（主背景）
- #121212（备用背景）

禁止：
- 白色背景
- 高饱和背景
- 图片铺底背景

---

## 卡片
必须：

background:
rgba(255,255,255,0.05)

border:
1px solid rgba(255,255,255,0.1)

禁止：
- 复杂渐变
- 多层玻璃模糊
- 强透明叠加

---

## 主色（唯一允许）
- #3B82F6

禁止新增任何其他主色。

---

## 文字颜色
- 标题：#FFFFFF / #F3F4F6
- 正文：#D1D5DB
- 辅助：#9CA3AF

禁止自定义颜色体系。

---

# 3. 字体规则（强制）

font-family:
Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

禁止：
- 衬线字体
- 装饰字体
- 手写字体

---

# 4. 排版规则（严格）

必须：

- 使用 8px spacing system
- 使用清晰层级（H1 > H2 > Body）
- 保持大留白
- 行高 ≥ 1.5（正文）

禁止：
- 密集排版
- 小字号堆信息
- 不规则对齐

---

# 5. 组件规则（强约束）

## Card

- radius: 8px–12px
- border: 1px rgba(255,255,255,0.1)
- bg: rgba(255,255,255,0.05)
- shadow: subtle only

禁止：
- 发光
- 3D
- 强阴影
- 动态背景

---

## Button

Primary:
- bg: #3B82F6
- text: white

Secondary:
- transparent + border

禁止：
- 渐变按钮
- 发光按钮
- 动画缩放按钮

---

## Input

- dark background
- subtle border
- focus only change border color

禁止：
- 花哨 focus 动效
- 自动发光
- UI装饰图标乱加

---

# 6. 动效规则（非常重要）

必须：

- 150ms–300ms
- ease-out

允许：
- opacity
- translateY(-2px)
- border-color

禁止：
- bounce
- spring
- 复杂过渡动画
- 页面飞入动画
- 无限循环动画
- parallax

---

# 7. 布局规则

必须：

- Bento Grid 或标准 Grid
- 对齐一致
- 强结构感
- 响应式优先

禁止：
- 随机布局
- 拼贴风
- masonry 混乱布局

---

# 8. 工程规则（防代码污染）

必须：

- 组件化
- 语义化命名
- 可复用结构
- 清晰目录结构

禁止：

- inline style
- 重复 UI
- 超大组件文件
- 硬编码 spacing
- 随意 DOM 操作

---

# 9. 输出原则（最重要）

生成 UI 时必须遵守：

1. 不解释设计理念
2. 不自由发挥
3. 不增加风格
4. 不优化规则之外的东西
5. 只做“严格实现”

---

# FINAL RULE

如果规则冲突：

👉 以“视觉稳定 + 一致性”为最高优先级
```

---
